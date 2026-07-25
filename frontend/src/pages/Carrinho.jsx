import { Link } from 'react-router-dom';
import { useCart } from '../context/CartContext';

export default function Carrinho() {
  const { items, updateQuantity, removeItem, total } = useCart();

  if (items.length === 0) {
    return (
      <div className="container" style={{ padding: 60, textAlign: 'center' }}>
        <h1>Seu carrinho está vazio</h1>
        <p style={{ color: 'var(--color-cocoa-soft)', marginBottom: 24 }}>
          Que tal dar uma olhada nos nossos doces?
        </p>
        <Link to="/catalogo" className="btn btn-primary">Ver catálogo</Link>
      </div>
    );
  }

  return (
    <div className="container" style={{ padding: '48px 24px', maxWidth: 800 }}>
      <h1 style={{ marginBottom: 28 }}>Seu carrinho</h1>

      <div className="card" style={{ padding: 24 }}>
        <table>
          <thead>
            <tr>
              <th>Produto</th>
              <th>Qtd.</th>
              <th>Subtotal</th>
              <th></th>
            </tr>
          </thead>
          <tbody>
            {items.map((item) => (
              <tr key={item.product_id}>
                <td>
                  <strong>{item.name}</strong>
                  <br />
                  <span style={{ color: 'var(--color-cocoa-soft)', fontSize: '0.85rem' }}>
                    R$ {Number(item.price).toFixed(2)} un.
                  </span>
                </td>
                <td>
                  <div style={{ display: 'flex', alignItems: 'center', gap: 8 }}>
                    <button className="btn btn-ghost" onClick={() => updateQuantity(item.product_id, item.quantity - 1)}>−</button>
                    <span>{item.quantity}</span>
                    <button className="btn btn-ghost" onClick={() => updateQuantity(item.product_id, item.quantity + 1)}>+</button>
                  </div>
                </td>
                <td>R$ {(item.price * item.quantity).toFixed(2)}</td>
                <td>
                  <button className="btn btn-ghost" onClick={() => removeItem(item.product_id)} aria-label={`Remover ${item.name}`}>
                    ✕
                  </button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>

        <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginTop: 24 }}>
          <span style={{ fontSize: '1.3rem', fontWeight: 700 }}>
            Total: <span style={{ color: 'var(--color-rose-deep)' }}>R$ {total.toFixed(2)}</span>
          </span>
          <Link to="/checkout" className="btn btn-primary">Finalizar pedido</Link>
        </div>
      </div>
    </div>
  );
}
