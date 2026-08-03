import { useState } from 'react';
import { Link, NavLink } from 'react-router-dom';
import { useAuth } from '../context/AuthContext';
import { useCart } from '../context/CartContext';

export default function Header() {
  const { user, isAdmin, signOut } = useAuth();
  const { count } = useCart();
  const [menuAberto, setMenuAberto] = useState(false);

  const linkStyle = ({ isActive }) => ({
    fontWeight: 700,
    fontSize: '0.95rem',
    color: isActive ? 'var(--color-rose-deep)' : 'var(--color-cocoa)',
    borderBottom: isActive ? '2px solid var(--color-rose)' : '2px solid transparent',
    paddingBottom: 4,
  });

  function fechar() {
    setMenuAberto(false);
  }

  return (
    <header style={{ background: 'var(--color-cream)', borderBottom: '1px solid var(--color-border)', position: 'sticky', top: 0, zIndex: 20 }}>
      <div
        className="container"
        style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', padding: '18px 24px' }}
      >
        <Link to="/" style={{ fontFamily: 'var(--font-display)', fontSize: '1.5rem', fontWeight: 700 }} onClick={fechar}>
          Doce Encanto
        </Link>

        <nav className={`nav-links ${menuAberto ? 'is-open' : ''}`}>
          <NavLink to="/" style={linkStyle} end onClick={fechar}>Início</NavLink>
          <NavLink to="/catalogo" style={linkStyle} onClick={fechar}>Catálogo</NavLink>
          <NavLink to="/sobre" style={linkStyle} end>Sobre</NavLink>
          <NavLink to="/perfil" style={linkStyle} end>Perfil</NavLink>
          <NavLink to="#" style={linkStyle2}><nav><input type='text' style={inputStyle} placeholder='Pesquisar'/></nav><select style={selectStyle}>
            <option>Filtrar</option>
            <option>Produtos</option>
            <option>Cursos</option>
            <option>Vagas</option>
          </select>
          </NavLink>
          {isAdmin && <NavLink to="/admin" style={linkStyle} onClick={fechar}>Painel Admin</NavLink>}

          {/* No mobile, o carrinho e a conta também aparecem dentro da gaveta */}
          <div style={{ display: 'flex', flexDirection: 'column', gap: 12, marginTop: 12 }} className="nav-drawer-extra">
            <Link to="/carrinho" className="btn btn-secondary" onClick={fechar}>
              Carrinho{count > 0 ? ` (${count})` : ''}
            </Link>
            {user ? (
              <button className="btn btn-ghost" onClick={() => { signOut(); fechar(); }}>Sair</button>
            ) : (
              <Link to="/login" className="btn btn-primary" onClick={fechar}>Entrar</Link>
            )}
          </div>
        </nav>

        <div className="header-actions-desktop" style={{ display: 'flex', alignItems: 'center', gap: 14 }}>
          <Link to="/carrinho" className="btn btn-secondary" style={{ padding: '10px 18px' }}>
            Carrinho{count > 0 ? ` (${count})` : ''}
          </Link>
          {user ? (
            <button className="btn btn-ghost" onClick={signOut}>Sair</button>
          ) : (
            <Link to="/login" className="btn btn-primary">Entrar</Link>
          )}
        </div>

        <button
          className="nav-toggle"
          aria-label={menuAberto ? 'Fechar menu' : 'Abrir menu'}
          aria-expanded={menuAberto}
          onClick={() => setMenuAberto((v) => !v)}
        >
          {menuAberto ? '✕' : '☰'}
        </button>
      </div>

      <div
        className={`nav-drawer-backdrop ${menuAberto ? 'is-open' : ''}`}
        onClick={fechar}
        aria-hidden="true"
      />
    </header>
  );
}
