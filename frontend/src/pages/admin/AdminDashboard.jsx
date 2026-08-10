import { Link } from 'react-router-dom';

export default function AdminDashboard() {
  return (
    <div className="container" style={{ padding: '48px 24px' }}>
      <span className="eyebrow">Painel administrativo</span>
      <h1 style={{ marginBottom: 28 }}>Bem-vinda(o) de volta</h1>

      <div style={{ 
        display: 'grid', 
        gridTemplateColumns: 'repeat(auto-fit, minmax(220px, 1fr))', 
        gap: 20 
        }}>
          
        <Link to="/admin/produtos" className="card" style={{
          padding: 28, 
          display: 'block' 
          }}>
          <h3>Produtos</h3>
          <p style={{ 
            color: 'var(--color-cocoa-soft)' 
            }}>Cadastre, edite e organize o cardápio.</p>
        </Link>

        <Link to="/admin/pedidos" className="card" style={{ 
          padding: 28, 
          display: 'block' 
          }}>
          <h3>Pedidos</h3>
          <p style={{ 
            color: 'var(--color-cocoa-soft)' 
            }}>Acompanhe e atualize o status das encomendas.</p>
        </Link>

      </div>
    </div>
  );
}
