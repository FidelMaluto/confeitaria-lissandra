import { useEffect, useState } from 'react';
import { api } from '../lib/api';

const STATUS_LABEL = {
  pendente: 'Pendente',
  confirmado: 'Confirmado',
  em_preparo: 'Em preparo',
  pronto: 'Pronto',
  entregue: 'Entregue',
  cancelado: 'Cancelado',
};

export default function MeusPedidos() {
  const [pedidos, setPedidos] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    api.listMyOrders().then(setPedidos).finally(() => setLoading(false));
  }, []);

  if (loading) return <p className="container" style={{ padding: 60 }}>Carregando...</p>;

  return (
    <div className="container" style={{ padding: '48px 24px', maxWidth: 800 }}>
      <h1 style={{ marginBottom: 24 }}>Meus pedidos</h1>
      {pedidos.length === 0 ? (
        <p style={{ color: 'var(--color-cocoa-soft)' }}>Você ainda não fez nenhum pedido.</p>
      ) : (
        <div style={{ display: 'flex', flexDirection: 'column', gap: 16 }}>
          {pedidos.map((p) => (
            <div key={p.id} className="card" style={{ padding: 20 }}>
              <div style={{ display: 'flex', justifyContent: 'space-between' }}>
                <strong>Pedido #{p.id.slice(0, 8)}</strong>
                <span className="badge">{STATUS_LABEL[p.status]}</span>
              </div>
              <p style={{ color: 'var(--color-cocoa-soft)', fontSize: '0.9rem' }}>
                {new Date(p.created_at).toLocaleString('pt-BR')}
              </p>
              <ul style={{ margin: '10px 0' }}>
                {p.order_items.map((item) => (
                  <li key={item.id}>{item.quantity}x {item.product_name}</li>
                ))}
              </ul>
              <strong>Total: R$ {Number(p.total).toFixed(2)}</strong>
            </div>
          ))}
        </div>
      )}
    </div>
  );
}
