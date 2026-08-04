import { useEffect, useState } from 'react';
import { api } from '../../lib/api';

const STATUS_OPCOES = ['pendente', 'confirmado', 'em_preparo', 'pronto', 'entregue', 'cancelado'];
const STATUS_LABEL = {
  pendente: 'Pendente',
  confirmado: 'Confirmado',
  em_preparo: 'Em preparo',
  pronto: 'Pronto',
  entregue: 'Entregue',
  cancelado: 'Cancelado',
};

export default function AdminPedidos() {
  const [pedidos, setPedidos] = useState([]);
  const [filtro, setFiltro] = useState('');
  const [loading, setLoading] = useState(true);

  function carregar() {
    setLoading(true);
    api.listAllOrders(filtro || undefined).then(setPedidos).finally(() => setLoading(false));
  }

  useEffect(carregar, [filtro]);

  async function mudarStatus(id, status) {
    await api.updateOrderStatus(id, status);
    carregar();
  }

  return (
    <div className="container" style={{ padding: '48px 24px' }}>
      <h1 style={{ marginBottom: 20 }}>Pedidos</h1>

      <div className="field" style={{ maxWidth: 260, marginBottom: 20 }}>
        <label>Filtrar por status</label>
        <select value={filtro} onChange={(e) => setFiltro(e.target.value)}>
          <option value="">Todos</option>
          {STATUS_OPCOES.map((s) => (
            <option key={s} value={s}>{STATUS_LABEL[s]}</option>
          ))}
        </select>
      </div>

      {loading ? (
        <p>Carregando...</p>
      ) : pedidos.length === 0 ? (
        <p style={{ color: 'var(--color-cocoa-soft)' }}>Nenhum pedido encontrado.</p>
      ) : (
        <div style={{ display: 'flex', flexDirection: 'column', gap: 16 }}>
          {pedidos.map((p) => (
            <div key={p.id} className="card" style={{ padding: 20 }}>
              <div style={{ display: 'flex', justifyContent: 'space-between', flexWrap: 'wrap', gap: 12 }}>
                <div>
                  <strong>#{p.id.slice(0, 8)} — {p.customer_name}</strong>
                  <p style={{ color: 'var(--color-cocoa-soft)', fontSize: '0.9rem', margin: '4px 0' }}>
                    {p.customer_phone} · {new Date(p.created_at).toLocaleString('pt-BR')}
                  </p>
                </div>
                <select value={p.status} onChange={(e) => mudarStatus(p.id, e.target.value)}>
                  {STATUS_OPCOES.map((s) => (
                    <option key={s} value={s}>{STATUS_LABEL[s]}</option>
                  ))}
                </select>
              </div>

              <ul style={{ margin: '12px 0' }}>
                {p.order_items.map((item) => (
                  <li key={item.id}>{item.quantity}x {item.product_name} — KZ$ {Number(item.subtotal).toFixed(2)}</li>
                ))}
              </ul>

              {p.customer_address && (
                <p style={{ fontSize: '0.9rem', color: 'var(--color-cocoa-soft)' }}>📍 {p.customer_address}</p>
              )}
              {p.notes && <p style={{ fontSize: '0.9rem', color: 'var(--color-cocoa-soft)' }}>📝 {p.notes}</p>}

              <strong>Total: KZ$ {Number(p.total).toFixed(2)}</strong>
            </div>
          ))}
        </div>
      )}
    </div>
  );
}
