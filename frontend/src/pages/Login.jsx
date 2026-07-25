import { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { useAuth } from '../context/AuthContext';

export default function Login() {
  const { signIn } = useAuth();
  const navigate = useNavigate();
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [erro, setErro] = useState(null);
  const [carregando, setCarregando] = useState(false);

  async function handleSubmit(e) {
    e.preventDefault();
    setErro(null);
    setCarregando(true);
    try {
      await signIn(email, password);
      navigate('/');
    } catch (err) {
      setErro('E-mail ou senha inválidos.');
    } finally {
      setCarregando(false);
    }
  }

  return (
    <div className="container" style={{ padding: '60px 24px', maxWidth: 420 }}>
      <h1>Entrar</h1>
      <form onSubmit={handleSubmit} className="card" style={{ padding: 28, marginTop: 20 }}>
        <div className="field">
          <label htmlFor="email">E-mail</label>
          <input id="email" type="email" required value={email} onChange={(e) => setEmail(e.target.value)} />
        </div>
        <div className="field">
          <label htmlFor="password">Senha</label>
          <input id="password" type="password" required value={password} onChange={(e) => setPassword(e.target.value)} />
        </div>
        {erro && <p style={{ color: '#b23b3b', marginBottom: 12 }}>{erro}</p>}
        <button className="btn btn-primary" type="submit" disabled={carregando} style={{ width: '100%' }}>
          {carregando ? 'Entrando...' : 'Entrar'}
        </button>
      </form>
      <p style={{ marginTop: 16, textAlign: 'center', color: 'var(--color-cocoa-soft)' }}>
        Não tem conta? <Link to="/cadastro" style={{ color: 'var(--color-rose-deep)', fontWeight: 700 }}>Cadastre-se</Link>
      </p>
    </div>
  );
}
