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

  return (
    <header className="site-header">
      <div className="container site-header-bar">
        <Link to="/" className="site-logo" onClick={fechar}>
          Doces Tentações
        </Link>

        <nav className={`nav-links ${menuAberto ? 'is-open' : ''}`}>
          <NavLink to="/" style={linkStyle} end onClick={fechar}>Início</NavLink>
          <NavLink to="/catalogo" style={linkStyle} onClick={fechar}>Catálogo</NavLink>
          <NavLink to="/contactos" style={linkStyle} onClick={fechar}>Contactos</NavLink>
          <NavLink to="/sobre" style={linkStyle} onClick={fechar}>Sobre</NavLink>
          <NavLink to="/perfil" style={linkStyle} onClick={fechar}>Perfil</NavLink>
          {isAdmin && <NavLink to="/admin" style={linkStyle} onClick={fechar}>Painel Admin</NavLink>}

          <div className="nav-search">
            <input type="text" placeholder="Pesquisar" />
            <select defaultValue="">
              <option value="" disabled>Filtrar</option>
              <option>Produtos</option>
              <option>Cursos</option>
              <option>Vagas</option>
            </select>
          </div>

          {/* Este bloco só aparece dentro da gaveta mobile (controlado 100% pelo CSS) */}
          <div className="nav-drawer-extra">
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

        {/* Este bloco só aparece na barra do desktop (controlado 100% pelo CSS) */}
        <div className="header-actions-desktop">
          <Link to="/carrinho" className="btn btn-secondary">
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
