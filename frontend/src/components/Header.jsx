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
  const linkStyle2 = ({ isActive }) => ({
    display: 'flex',
    justifyContent: 'space-between',
    fontWeight: 700,
    fontSize: '0.95rem',
    color: isActive ? 'var(--color-rose-deep)' : 'var(--color-cocoa)',
    paddingBottom: 4,
  });
  const inputStyle = ({
    borderRadius: '15px',
    padding: '5px',
    outline: 'solid 1px #c25',
    border: 'none',
    marginInline: '',
  });
  const selectStyle = ({
    borderRadius: '8px',
    padding: '5px',
    outline: 'solid 1px #ddd',
    border: 'none',
    wiidth: '2rem',
    marginInline: '.5vh',
    background: 'white',
  });


  return (
    <header
      style={{
        background: 'var(--color-cream)',
        borderBottom: '1px solid var(--color-border)',
        width: '100%',
      }}
    >
  <div
    className="container"
    style={{
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'space-between',
      padding: '26px 10px',
      width: '100%',
      maxWidth: 'none',
      background: 'var(--color-cream)',
    }}
  >
        <Link to="/" style={{ fontFamily: 'var(--font-display)', fontSize: '1.5rem', fontWeight: 700 }}>
          Doces Tentações
        </Link>

        <nav style={{ display: 'flex', gap: 28, alignItems: 'center' }}>
          <NavLink to="/" style={linkStyle} end>Início</NavLink>
          <NavLink to="/catalogo" style={linkStyle}>Catálogo</NavLink>
          <NavLink to="/contactos" style={linkStyle} end>Contactos</NavLink>
          <NavLink to="/sobre" style={linkStyle} end>Sobre</NavLink>
          <NavLink to="/perfil" style={linkStyle} end>Perfil</NavLink>
          <NavLink to="#" style={linkStyle2}><nav><input type='text' style={inputStyle} placeholder='Pesquisar'/></nav><select style={selectStyle}>
            <option>Filtrar</option>
            <option>Produtos</option>
            <option>Cursos</option>
            <option>Vagas</option>
          </select>
          </NavLink>
          {isAdmin && <NavLink to="/admin" style={linkStyle}>Painel Admin</NavLink>}
        </nav>

        <div style={{ display: 'flex', alignItems: 'center', gap: 14 }}>
          <Link to="/carrinho" className="btn btn-secondary" style={{ padding: '10px 18px' }}>
            Carrinho{count > 0 ? ` (${count})` : ''}
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
