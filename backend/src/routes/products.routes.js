const express = require('express');
const { supabaseAdmin } = require('../config/supabase');
const { requireAdmin } = require('../middleware/auth');

const router = express.Router();

// GET /api/products?category=slug - lista produtos ativos (público)
router.get('/', async (req, res) => {
  let query = supabaseAdmin
    .from('products')
    .select('*, categories(name, slug)')
    .eq('active', true)
    .order('created_at', { ascending: false });

  if (req.query.category) {
    const { data: cat } = await supabaseAdmin
      .from('categories')
      .select('id')
      .eq('slug', req.query.category)
      .single();
    if (cat) query = query.eq('category_id', cat.id);
  }

  const { data, error } = await query;
  if (error) return res.status(500).json({ error: error.message });
  res.json(data);
});

// GET /api/products/admin/all - lista TODOS os produtos, inclusive inativos (admin)
router.get('/admin/all', requireAdmin, async (_req, res) => {
  const { data, error } = await supabaseAdmin
    .from('products')
    .select('*, categories(name, slug)')
    .order('created_at', { ascending: false });

  if (error) return res.status(500).json({ error: error.message });
  res.json(data);
});

// GET /api/products/:slug - detalhe de um produto (público)
router.get('/:slug', async (req, res) => {
  const { data, error } = await supabaseAdmin
    .from('products')
    .select('*, categories(name, slug)')
    .eq('slug', req.params.slug)
    .eq('active', true)
    .single();

  if (error) return res.status(404).json({ error: 'Produto não encontrado.' });
  res.json(data);
});

// POST /api/products - cria produto (admin)
router.post('/', requireAdmin, async (req, res) => {
  const { name, slug, description, price, image_url, stock, category_id, active } = req.body;

  if (!name || !slug || price === undefined) {
    return res.status(400).json({ error: 'name, slug e price são obrigatórios.' });
  }

  const { data, error } = await supabaseAdmin
    .from('products')
    .insert({ name, slug, description, price, image_url, stock: stock ?? 0, category_id, active: active ?? true })
    .select()
    .single();

  if (error) return res.status(400).json({ error: error.message });
  res.status(201).json(data);
});

// PUT /api/products/:id - atualiza produto (admin)
router.put('/:id', requireAdmin, async (req, res) => {
  const fields = (({ name, slug, description, price, image_url, stock, category_id, active }) =>
    ({ name, slug, description, price, image_url, stock, category_id, active }))(req.body);

  // remove chaves undefined para não sobrescrever com null sem querer
  Object.keys(fields).forEach((k) => fields[k] === undefined && delete fields[k]);

  const { data, error } = await supabaseAdmin
    .from('products')
    .update(fields)
    .eq('id', req.params.id)
    .select()
    .single();

  if (error) return res.status(400).json({ error: error.message });
  res.json(data);
});

// DELETE /api/products/:id - remove produto (admin)
router.delete('/:id', requireAdmin, async (req, res) => {
  const { error } = await supabaseAdmin
    .from('products')
    .delete()
    .eq('id', req.params.id);

  if (error) return res.status(400).json({ error: error.message });
  res.status(204).send();
});

module.exports = router;
