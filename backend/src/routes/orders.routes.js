const express = require('express');
const { supabaseAdmin } = require('../config/supabase');
const { requireAuth, requireAdmin } = require('../middleware/auth');

const router = express.Router();

// POST /api/orders - cria um pedido (cliente logado OU convidado)
// O preço de cada item é validado no servidor a partir do banco,
// para que o valor total nunca dependa do que o navegador enviou.
router.post('/', async (req, res) => {
  try {
    const { customer_name, customer_phone, customer_address, payment_method, notes, items } = req.body;

    if (!customer_name || !customer_phone) {
      return res.status(400).json({ error: 'Nome e telefone são obrigatórios.' });
    }
    if (!Array.isArray(items) || items.length === 0) {
      return res.status(400).json({ error: 'O pedido precisa ter ao menos um item.' });
    }

    const productIds = items.map((i) => i.product_id);
    const { data: products, error: prodError } = await supabaseAdmin
      .from('products')
      .select('id, name, price, stock, active')
      .in('id', productIds);

    if (prodError) return res.status(500).json({ error: prodError.message });

    let total = 0;
    const orderItems = items.map((item) => {
      const product = products.find((p) => p.id === item.product_id);
      if (!product || !product.active) {
        throw new Error(`Produto indisponível: ${item.product_id}`);
      }
      const quantity = Number(item.quantity) || 1;
      const subtotal = Number(product.price) * quantity;
      total += subtotal;
      return {
        product_id: product.id,
        product_name: product.name,
        unit_price: product.price,
        quantity,
        subtotal,
      };
    });

    const { data: order, error: orderError } = await supabaseAdmin
      .from('orders')
      .insert({
        user_id: req.user?.id || null,
        customer_name,
        customer_phone,
        customer_address,
        payment_method,
        notes,
        total,
        status: 'pendente',
      })
      .select()
      .single();

    if (orderError) return res.status(400).json({ error: orderError.message });

    const itemsWithOrderId = orderItems.map((i) => ({ ...i, order_id: order.id }));
    const { error: itemsError } = await supabaseAdmin.from('order_items').insert(itemsWithOrderId);
    if (itemsError) return res.status(400).json({ error: itemsError.message });

    res.status(201).json({ ...order, items: itemsWithOrderId });
  } catch (err) {
    res.status(400).json({ error: err.message });
  }
});

// GET /api/orders/me - pedidos do cliente autenticado
router.get('/me', requireAuth, async (req, res) => {
  const { data, error } = await supabaseAdmin
    .from('orders')
    .select('*, order_items(*)')
    .eq('user_id', req.user.id)
    .order('created_at', { ascending: false });

  if (error) return res.status(500).json({ error: error.message });
  res.json(data);
});

// GET /api/orders - lista todos os pedidos (admin), com filtro opcional por status
router.get('/', requireAdmin, async (req, res) => {
  let query = supabaseAdmin
    .from('orders')
    .select('*, order_items(*)')
    .order('created_at', { ascending: false });

  if (req.query.status) query = query.eq('status', req.query.status);

  const { data, error } = await query;
  if (error) return res.status(500).json({ error: error.message });
  res.json(data);
});

// PATCH /api/orders/:id/status - atualiza status do pedido (admin)
router.patch('/:id/status', requireAdmin, async (req, res) => {
  const { status } = req.body;
  const valid = ['pendente', 'confirmado', 'em_preparo', 'pronto', 'entregue', 'cancelado'];
  if (!valid.includes(status)) {
    return res.status(400).json({ error: `Status inválido. Use um de: ${valid.join(', ')}` });
  }

  const { data, error } = await supabaseAdmin
    .from('orders')
    .update({ status })
    .eq('id', req.params.id)
    .select()
    .single();

  if (error) return res.status(400).json({ error: error.message });
  res.json(data);
});

module.exports = router;
