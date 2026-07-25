import { useState } from 'react';
import { useNavigate, Link } from 'react-router-dom';
import { useCart } from '../context/CartContext';
import { useAuth } from '../context/AuthContext';
import { api } from '../lib/api';

export default function Checkout() {
  const { items, total, clearCart } = useCart();
  const { user } = useAuth();
  const navigate = useNavigate();

  const [form, setForm] = useState({
    customer_name: '',
    customer_phone: '',
    customer_address: '',
    payment_method: 'pix',
    notes: '',
  });
  const [enviando, setEnviando] = useState(false);
  const [erro, setErro] = useState(null);
  const [pedidoConfirmado, setPedidoConfirmado] = useState(null);

  function handleChange(e) {
    setForm((f) => ({ ...f, [e.target.name]: e.target.value }));
  }

  async function handleSubmit(e) {
    e.preventDefault();
    setErro(null);
    setEnviando(true);
    try {
      const order = await api.createOrder({
        ...form,
        items: items.map((i) => ({ product_id: i.product_id, quantity: i.quantity })),
      });
      setPedidoConfirmado(order);
      clearCart();
    } catch (err) {
      setErro(err.message);
    } finally {
      setEnviando(false);
    }
  }

  if (pedidoConfirmado) {
    return (
      <div className="container" style={{ padding: 60, textAlign: 'center', maxWidth: 560 }}>
        <h1>Pedido recebido! 🎉</h1>
        <p style={{ color: 'var(--color-cocoa-soft)' }}>
          Obrigado, {pedidoConfirmado.customer_name.split(' ')[0]}! Vamos confirmar os detalhes e
          entrar em contato pelo telefone informado.
        </p>
        <p style={{ margin: '20px 0', fontWeight: 700 }}>
          Total: R$ {Number(pedidoConfirmado.total).toFixed(2)}
        </p>
        <Link to="/catalogo" className="btn btn-primary">Voltar ao catálogo</Link>
      </div>
    );
  }

  if (items.length === 0) {
    return (
      <div className="container" style={{ padding: 60, textAlign: 'center' }}>
        <h1>Seu carrinho está vazio</h1>
        <Link to="/catalogo" className="btn btn-primary">Ver catálogo</Link>
      </div>
    );
  }

  return (
    <div className="container" style={{ padding: '48px 24px', maxWidth: 640 }}>
      <h1 style={{ marginBottom: 8 }}>Finalizar pedido</h1>
      <p style={{ color: 'var(--color-cocoa-soft)', marginBottom: 28 }}>
        {user ? 'Confirme seus dados de entrega abaixo.' : 'Você pode fazer o pedido sem criar uma conta.'}
      </p>

      <form onSubmit={handleSubmit} className="card" style={{ padding: 28 }}>
        <div className="field">
          <label htmlFor="customer_name">Nome completo</label>
          <input id="customer_name" name="customer_name" required value={form.customer_name} onChange={handleChange} />
        </div>
        <div className="field">
          <label htmlFor="customer_phone">Telefone / WhatsApp</label>
          <input id="customer_phone" name="customer_phone" required value={form.customer_phone} onChange={handleChange} />
        </div>
        <div className="field">
          <label htmlFor="customer_address">Endereço de entrega</label>
          <textarea id="customer_address" name="customer_address" rows={3} value={form.customer_address} onChange={handleChange} />
        </div>
        <div className="field">
          <label htmlFor="payment_method">Forma de pagamento</label>
          <select id="payment_method" name="payment_method" value={form.payment_method} onChange={handleChange}>
            <option value="pix">Pix</option>
            <option value="cartao">Cartão na entrega</option>
            <option value="dinheiro">Dinheiro na entrega</option>
          </select>
        </div>
        <div className="field">
          <label htmlFor="notes">Observações (opcional)</label>
          <textarea id="notes" name="notes" rows={2} value={form.notes} onChange={handleChange} placeholder="Ex: sem morango, escrever 'Parabéns' no bolo..." />
        </div>

        {erro && <p style={{ color: '#b23b3b', marginBottom: 12 }}>{erro}</p>}

        <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginTop: 8 }}>
          <strong style={{ fontSize: '1.2rem' }}>Total: R$ {total.toFixed(2)}</strong>
          <button className="btn btn-primary" type="submit" disabled={enviando}>
            {enviando ? 'Enviando...' : 'Confirmar pedido'}
          </button>
        </div>
      </form>
    </div>
  );
}
