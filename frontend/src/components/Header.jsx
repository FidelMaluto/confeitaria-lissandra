import { Link, NavLink } from 'react-router-dom';
import { useAuth } from '../context/AuthContext';
import { useCart } from '../context/CartContext';

export default function Header() {
  const { user, isAdmin, signOut } = useAuth();
  const { count } = useCart();

  const linkStyle = ({ isActive }) => ({
    fontWeight: 700,
    fontSize: '0.95rem',
    color: isActive ? 'var(--color-rose-deep)' : 'var(--color-cocoa)',
    borderBottom: isActive ? '2px solid var(--color-rose)' : '2px solid transparent',
    paddingBottom: 4,
  });

  return (
    <header style={{ background: 'var(--color-cream)', borderBottom: '1px solid var(--color-border)' }}>
      <div
        className="container"
        style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', padding: '18px 24px' }}
      >
        <Link to="/" style={{ fontFamily: 'var(--font-display)', fontSize: '1.5rem', fontWeight: 700 }}>
          Doce Encanto
        </Link>

        <nav style={{ display: 'flex', gap: 28, alignItems: 'center' }}>
          <NavLink to="/" style={linkStyle} end>Início</NavLink>
          <NavLink to="/catalogo" style={linkStyle}>Catálogo</NavLink>
          {isAdmin && <NavLink to="/admin" style={linkStyle}>Painel Admin</NavLink>}
        </nav>

        <div style={{ display: 'flex', alignItems: 'center', gap: 14 }}>
          <Link to="/carrinho" className="btn btn-secondary" style={{ padding: '10px 18px' }}>
            🧺 Carrinho{count > 0 ? ` (${count})` : ''}
          </Link>
          {user ? (
            <button className="btn btn-ghost" onClick={signOut}>Sair</button>
          ) : (
            <Link to="/login" className="btn btn-primary">Entrar</Link>
          )}
        </div>
      </div>
    </header>
  );
}
