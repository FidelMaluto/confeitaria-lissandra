import { useState, useEffect } from 'react';
import { Link, NavLink } from 'react-router-dom';
import { useAuth } from '../context/AuthContext';
import { useCart } from '../context/CartContext';
import logoImg from '../images/image.png';

export default function Header() {
  const { user, isAdmin, signOut } = useAuth();
  const { count } = useCart();
  const [menuAberto, setMenuAberto] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    function handleScroll() {
      if (window.scrollY > 20) {
        setScrolled(true);
      } else {
        setScrolled(false);
      }
    }
    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  function fechar() {
    setMenuAberto(false);
  }

  const linkStyle = ({ isActive }) => ({
    fontWeight: 700,
    fontSize: '0.95rem',
    color: isActive ? 'var(--color-rose-deep)' : 'var(--color-cocoa)',
    position: 'relative',
    padding: '6px 12px',
    borderRadius: '8px',
    transition: 'all var(--dur-fast) ease',
    background: isActive ? 'rgba(162, 74, 90, 0.08)' : 'transparent',
    display: 'inline-flex',
    alignItems: 'center',
    gap: '6px',
  });

  return (
    <header className={`site-header ${scrolled ? 'header-scrolled' : ''}`}>
      {/* Menu Mobile Overlay */}
      {menuAberto && (
        <div className="mobile-menu-overlay" onClick={fechar}>
          <div className="mobile-menu-drawer" onClick={(e) => e.stopPropagation()}>
            <div className="mobile-menu-top">
              <Link to="/" className="site-logo" onClick={fechar}>
                <img src={logoImg} alt="Lissandra Doces Tentações Logo" className="header-logo-image" />
                <div className="site-logo-text-wrap">
                  <span className="logo-text">Lissandra</span>
                  <span className="logo-sub">Doces Tentações</span>
                </div>
              </Link>
              <button className="nav-toggle" aria-label="Fechar menu" onClick={fechar}>
                ✕
              </button>
            </div>

            <div className="mobile-menu-divider" />

            <nav className="mobile-menu-links">
              <NavLink to="/" className="mobile-menu-link" end onClick={fechar}>
                <i className="fa-solid fa-house" /> Início
              </NavLink>
              <NavLink to="/agendar" className="mobile-menu-link agendamento-highlight-mobile" onClick={fechar}>
                <i className="fa-solid fa-calendar-check" /> Agendar Encomenda <span className="nav-hot-badge">VIP</span>
              </NavLink>
              <NavLink to="/catalogo" className="mobile-menu-link" onClick={fechar}>
                <i className="fa-solid fa-cake-candles" /> Catálogo
              </NavLink>
              <NavLink to="/contatos" className="mobile-menu-link" onClick={fechar}>
                <i className="fa-solid fa-envelope" /> Contatos
              </NavLink>
              <NavLink to="/sobre" className="mobile-menu-link" onClick={fechar}>
                <i className="fa-solid fa-heart" /> Sobre
              </NavLink>
              <NavLink to="/perfil" className="mobile-menu-link" onClick={fechar}>
                <i className="fa-solid fa-user" /> Perfil
              </NavLink>
              {isAdmin && (
                <NavLink to="/admin" className="mobile-menu-link admin-link" onClick={fechar}>
                  <i className="fa-solid fa-shield-halved" /> Painel Admin
                </NavLink>
              )}
            </nav>

            <div className="mobile-menu-footer">
              <Link to="/carrinho" className="btn btn-secondary w-full" onClick={fechar}>
                <i className="fa-solid fa-cart-shopping" /> Carrinho {count > 0 ? `(${count})` : ''}
              </Link>
              {user ? (
                <button
                  className="btn btn-ghost w-full"
                  onClick={() => {
                    signOut();
                    fechar();
                  }}
                >
                  <i className="fa-solid fa-right-from-bracket" /> Sair
                </button>
              ) : (
                <Link to="/login" className="btn btn-primary w-full" onClick={fechar}>
                  <i className="fa-solid fa-user-lock" /> Entrar / Cadastro
                </Link>
              )}
            </div>
          </div>
        </div>
      )}

      {/* Header Desktop / Tablet Bar */}
      <div className="container site-header-bar">
        <Link to="/" className="site-logo" onClick={fechar}>
          <img src={logoImg} alt="Lissandra Doces Tentações Logo" className="header-logo-image" />
          <div className="site-logo-text-wrap">
            <span className="logo-text">Lissandra</span>
            <span className="logo-sub">Doces Tentações</span>
          </div>
        </Link>

        {/* Menu Desktop */}
        <nav className="nav-links-desktop">
          <NavLink to="/" style={linkStyle} end>
            Início
          </NavLink>
          <NavLink to="/agendar" style={linkStyle} className="nav-link-agendar">
            <i className="fa-solid fa-calendar-days text-gold" />
            <span>Agendamento</span>
            <span className="nav-sparkle-pill">VIP</span>
          </NavLink>
          <NavLink to="/catalogo" style={linkStyle}>
            Catálogo
          </NavLink>
          <NavLink to="/contatos" style={linkStyle}>
            Contatos
          </NavLink>
          <NavLink to="/sobre" style={linkStyle}>
            Sobre
          </NavLink>
          <NavLink to="/perfil" style={linkStyle}>
            Perfil
          </NavLink>
          {isAdmin && (
            <NavLink to="/admin" style={linkStyle} className="admin-nav-pill">
              Admin
            </NavLink>
          )}
        </nav>

        {/* Ações à Direita */}
        <div className="header-actions-desktop">
          <Link to="/carrinho" className="btn btn-cart-luxury" aria-label="Ver Carrinho">
            <i className="fa-solid fa-bag-shopping" />
            <span>Carrinho</span>
            {count > 0 && <span className="cart-badge-luxury">{count}</span>}
          </Link>

          {user ? (
            <button className="btn btn-ghost" onClick={signOut}>
              Sair
            </button>
          ) : (
            <Link to="/login" className="btn btn-primary btn-shine">
              Entrar
            </Link>
          )}
        </div>

        {/* Botão Hambúrguer Mobile */}
        <button
          className="nav-toggle"
          aria-label="Abrir menu"
          onClick={() => setMenuAberto(true)}
        >
          <span className="toggle-bar" />
          <span className="toggle-bar" />
          <span className="toggle-bar" />
        </button>
      </div>
    </header>
  );
}
