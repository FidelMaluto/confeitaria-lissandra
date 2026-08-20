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

      {menuAberto && (
        <div className="mobile-menu-overlay">
          <div className="mobile-menu-top">
            <span className="site-logo">Doces Tentações</span>
            <button className="nav-toggle" aria-label="Fechar menu" onClick={fechar}>✕</button>
          </div>

          <nav className="mobile-menu-links">
            <NavLink to="/" className="mobile-menu-link" end onClick={fechar}>Início</NavLink>
            <NavLink to="/catalogo" className="mobile-menu-link" onClick={fechar}>Catálogo</NavLink>
            <NavLink to="/contatos" className="mobile-menu-link" onClick={fechar}>Contatos</NavLink>
            <NavLink to="/sobre" className="mobile-menu-link" onClick={fechar}>Sobre</NavLink>
            <NavLink to="/perfil" className="mobile-menu-link" onClick={fechar}>Perfil</NavLink>
            {isAdmin && <NavLink to="/admin" className="mobile-menu-link" onClick={fechar}>Painel Admin</NavLink>}
            <Link to="/carrinho" className="mobile-menu-link" onClick={fechar}>
              Carrinho{count > 0 ? ` (${count})` : ''}
            </Link>
            {user ? (
              <button className="mobile-menu-link mobile-menu-link-button" onClick={() => { signOut(); fechar(); }}>
                Sair
              </button>
            ) : (
              <Link to="/login" className="mobile-menu-link" onClick={fechar}>Entrar</Link>
            )}
          </nav>
        </div>
      )}

      <div className="container site-header-bar">
        <Link to="/" className="site-logo" onClick={fechar}>
          Doces Tentações
        </Link>

        {/* Menu do DESKTOP — só aparece em telas largas (controlado via CSS) */}
        <nav className="nav-links-desktop">
          <NavLink to="/" style={linkStyle} end>Início</NavLink>
          <NavLink to="/catalogo" style={linkStyle}>Catálogo</NavLink>
          <NavLink to="/contatos" style={linkStyle}>Contatos</NavLink>
          <NavLink to="/sobre" style={linkStyle}>Sobre</NavLink>
          <NavLink to="/perfil" style={linkStyle}>Perfil</NavLink>
          {isAdmin && <NavLink to="/admin" style={linkStyle}>Painel Admin</NavLink>}

        </nav>

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

        <button className="nav-toggle" aria-label="Abrir menu" onClick={() => setMenuAberto(true)}>☰</button>
      </div>

      {/* Menu do MOBILE — só existe no HTML quando está aberto.
          Fechado, não sobra nenhum elemento invisível na tela. */}
      
    </header>
  );
}
