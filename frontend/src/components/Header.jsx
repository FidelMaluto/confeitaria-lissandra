
import { useState } from 'react';
import { Link, NavLink } from 'react-router-dom';
import { useAuth } from '../context/AuthContext';
import { useCart } from '../context/CartContext';

export default function Header() {

  const { user, isAdmin, signOut } = useAuth();
  const { count } = useCart();

  const [menuAberto, setMenuAberto] = useState(false);

  const fechar = () => {
    setMenuAberto(false);
  };

  const linkStyle = ({ isActive }) => ({
    fontWeight: 700,
    fontSize: '0.95rem',
    color: isActive
      ? 'var(--color-rose-deep)'
      : 'var(--color-cocoa)',
    borderBottom: isActive
      ? '2px solid var(--color-rose)'
      : '2px solid transparent',
    paddingBottom: 4,
  });

  return (
    <>
      <style>{`

        .header{
          width:100%;
          background:var(--color-cream);
          border-bottom:1px solid var(--color-border);
        }

        .header-container{
          width:100%;
          display:flex;
          align-items:center;
          justify-content:space-between;
          padding:20px;
          gap:20px;
        }

        .header-logo{
          font-family:var(--font-display);
          font-size:1.5rem;
          font-weight:700;
          white-space:nowrap;
          text-decoration:none;
          color:var(--color-cocoa);
        }

        .header-nav{
          display:flex;
          align-items:center;
          gap:28px;
        }

        .header-actions{
          display:flex;
          align-items:center;
          gap:14px;
        }

        .nav-search{
          display:flex;
          align-items:center;
          gap:10px;
        }

        .nav-search input{
          padding:8px 12px;
          border:1px solid var(--color-border);
          border-radius:8px;
          outline:none;
        }

        .nav-search select{
          padding:8px 12px;
          border:1px solid var(--color-border);
          border-radius:8px;
          outline:none;
        }

        .menu-button{
          display:none;
          background:none;
          border:none;
          font-size:2rem;
          cursor:pointer;
        }

        .overlay{
          position:fixed;
          inset:0;
          background:rgba(0,0,0,.45);
          z-index:999;
        }

        .sidebar-menu{
          position:fixed;
          top:0;
          left:0;
          height:100vh;
          width:280px;
          background:white;
          z-index:1000;
          padding:25px;
          transform:translateX(-100%);
          transition:.3s ease;
          display:flex;
          flex-direction:column;
          gap:25px;
        }

        .sidebar-menu.open{
          transform:translateX(0);
        }

        .sidebar-header{
          display:flex;
          justify-content:space-between;
          align-items:center;
        }

        .close-menu{
          border:none;
          background:none;
          font-size:2rem;
          cursor:pointer;
        }

        .sidebar-links{
          display:flex;
          flex-direction:column;
          gap:20px;
        }

        .sidebar-links a{
          text-decoration:none;
          color:var(--color-cocoa);
          font-weight:700;
        }

        .sidebar-actions{
          display:flex;
          flex-direction:column;
          gap:12px;
        }

        @media(max-width:900px){

          .header-container{
            padding:15px;
          }

          .header-nav,
          .header-actions{
            display:none;
          }

          .menu-button{
            display:block;
          }

        }

      `}</style>

      <header className="header">

        <div className="header-container">

          <Link
            to="/"
            className="header-logo"
            onClick={fechar}
          >
            Doces Tentações
          </Link>

          <nav className="header-nav">

          <NavLink
              to="/"
              style={linkStyle}
              end
            >
              Início
            </NavLink>

            <NavLink
              to="/catalogo"
              style={linkStyle}
            >
              Catálogo
            </NavLink>

            <NavLink
  to="/contactos"
  style={linkStyle}
>
  Contactos
</NavLink>

          <NavLink
            to="/sobre"
              style={linkStyle}
            >
              Sobre
           </NavLink>

            <NavLink
              to="/perfil"
              style={linkStyle}
            >
              Perfil
            </NavLink>

            {isAdmin && (
              <NavLink
                to="/admin"
                style={linkStyle}
              >
                Painel Admin
              </NavLink>
            )}

            <div className="nav-search">

              <input
                type="text"
                placeholder="Pesquisar"
              />

              <select defaultValue="">
                <option value="" disabled>
                  Filtrar
                </option>

                <option>
                  Produtos
                </option>

                <option>
                  Cursos
                </option>

                <option>
                  Vagas
                </option>

              </select>

            </div>

          </nav>

          <div className="header-actions">

            <Link
              to="/carrinho"
              className="btn btn-secondary"
            >
              Carrinho {count > 0 && `(${count})`}
            </Link>

            {user ? (
              <button
                className="btn btn-ghost"
                onClick={signOut}
              >
                Sair
              </button>
            ) : (
              <Link
                to="/login"
                className="btn btn-primary"
              >
                Entrar
              </Link>
            )}

          </div>

          <button
            className="menu-button"
            onClick={() => setMenuAberto(true)}
          >
            ☰
          </button>

        </div>

      </header>

      {menuAberto && (
        <div
          className="overlay"
          onClick={fechar}
        />
      )}

      <div
        className={`sidebar-menu ${
          menuAberto ? 'open' : ''
        }`}
      >

        <div className="sidebar-header">

          <strong>
            Menu
          </strong>

          <button
            className="close-menu"
            onClick={fechar}
          >
            ×
          </button>

        </div>

        <div className="sidebar-links">

          <NavLink
            to="/"
            onClick={fechar}
          >
            Início
          </NavLink>

          <NavLink
            to="/catalogo"
            onClick={fechar}
          >
            Catálogo
          </NavLink>

          <NavLink
            to="/contactos"
            onClick={fechar}
          >
            Contactos
          </NavLink>
          <NavLink
            to="/sobre"
            onClick={fechar}
          >
            Sobre
          </NavLink>

          <NavLink
            to="/perfil"
            onClick={fechar}
          >
            Perfil
          </NavLink>

          {isAdmin && (
            <NavLink
              to="/admin"
              onClick={fechar}
            >
              Painel Admin
            </NavLink>
          )}

        </div>


        <div className="sidebar-actions">

          <Link
            to="/carrinho"
            className="btn btn-secondary"
            onClick={fechar}
          >
            Carrinho {count > 0 && `(${count})`}
          </Link>


          {user ? (

            <button
              className="btn btn-ghost"
              onClick={() => {
                signOut();
                fechar();
              }}
            >
              Sair
            </button>

          ) : (

            <Link
              to="/login"
              className="btn btn-primary"
              onClick={fechar}
            >
              Entrar
            </Link>

          )}

        </div>

      </div>

    </>
  );

}


