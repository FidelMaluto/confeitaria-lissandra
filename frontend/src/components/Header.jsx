import { useState } from 'react';
import { Link, NavLink } from 'react-router-dom';
import { useAuth } from '../context/AuthContext';
import { useCart } from '../context/CartContext';

export default function Header() {
  const { user, isAdmin, signOut } = useAuth();
  const { count } = useCart();
  const [menuAberto, setMenuAberto] = useState(false);

  function fechar() {
    setMenuAberto(false);
  }

  const linkStyle = ({ isActive }) => ({
    fontWeight: 700,
    fontSize: '0.95rem',
    color: isActive ? 'var(--color-rose-deep)' : 'var(--color-cocoa)',
    borderBottom: isActive ? '2px solid var(--color-rose)' : '2px solid transparent',
    paddingBottom: 4,
  });

  const searchWrapStyle = {
    display: 'flex',
    alignItems: 'center',
    gap: 8,
    flexWrap: 'wrap',
  };

  const inputStyle = {
    borderRadius: '15px',
    padding: '8px 12px',
    outline: 'none',
    border: '1px solid #e0b8c1',
    minHeight: 40,
  };

  const selectStyle = {
    borderRadius: '8px',
    padding: '8px',
    outline: 'none',
    border: '1px solid #ddd',
    minHeight: 40,
    background: 'white',
  };

  return (
    <header
      style={{
        background: 'var(--color-cream)',
        borderBottom: '1px solid var(--color-border)',
        position: 'sticky',
        top: 0,
        zIndex: 20,
      }}
    >
      <div
        className="container"
        style={{
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'space-between',
          padding: '18px 24px',
        }}
      >
        <Link to="/" style={{ fontFamily: 'var(--font-display)', fontSize: '1.5rem', fontWeight: 700 }} onClick={fechar}>
          Doces Tentações
        </Link>

        <nav className={`nav-links ${menuAberto ? 'is-open' : ''}`}>
          <NavLink to="/" style={linkStyle} end onClick={fechar}>Início</NavLink>
          <NavLink to="/catalogo" style={linkStyle} onClick={fechar}>Catálogo</NavLink>
          <NavLink to="/contactos" style={linkStyle} onClick={fechar}>Contactos</NavLink>
          <NavLink to="/sobre" style={linkStyle} onClick={fechar}>Sobre</NavLink>
          <NavLink to="/perfil" style={linkStyle} onClick={fechar}>Perfil</NavLink>
          {isAdmin && <NavLink to="/admin" style={linkStyle} onClick={fechar}>Painel Admin</NavLink>}

          <div style={searchWrapStyle}>
            <input type="text" style={inputStyle} placeholder="Pesquisar" />
            <select style={selectStyle}>
              <option>Filtrar</option>
              <option>Produtos</option>
              <option>Cursos</option>
              <option>Vagas</option>
            </select>
          </div>

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
