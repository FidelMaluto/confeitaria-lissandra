import { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { useAuth } from '../context/AuthContext';

export default function Cadastro() {
  const { signUp } = useAuth();
  const navigate = useNavigate();
  const [fullName, setFullName] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [erro, setErro] = useState(null);
  const [sucesso, setSucesso] = useState(false);
  const [carregando, setCarregando] = useState(false);

  async function handleSubmit(e) {
    e.preventDefault();
    setErro(null);
    setCarregando(true);
    try {
      await signUp(email, password, fullName);
      setSucesso(true);
    } catch (err) {
      setErro(err.message || 'Não foi possível criar a conta.');
    } finally {
      setCarregando(false);
    }
  }

  if (sucesso) {
    return (
      <div className="container" style={{ padding: 60, maxWidth: 420, textAlign: 'center' }}>
        <h1>Quase lá!</h1>
        <p style={{ color: 'var(--color-cocoa-soft)' }}>
          Enviamos um e-mail de confirmação para {email}. Confirme para poder entrar.
        </p>
        <Link to="/login" className="btn btn-primary" style={{ marginTop: 20 }}>Ir para o login</Link>
      </div>
    );
  }

  return (
    <div className="container" style={{ padding: '60px 24px', maxWidth: 420 }}>
      <h1>Criar conta</h1>
      <form onSubmit={handleSubmit} className="card" style={{ padding: 28, marginTop: 20 }}>

        <div className="field">
          <label htmlFor="fullName">Nome completo</label>
          <input id="fullName" required value={fullName} onChange={(e) => setFullName(e.target.value)} />
        </div>

        <div className="field">
          <label htmlFor="email">E-mail</label>
          <input id="email" type="email" required value={email} onChange={(e) => setEmail(e.target.value)} />
        </div>

        <div className="field">
          <label htmlFor="password">Senha</label>
          <input id="password" type="password" required minLength={6} value={password} onChange={(e) => setPassword(e.target.value)} />
        </div>

        {erro && <p style={{ color: '#b23b3b', marginBottom: 12 }}>{erro}</p>}
        
        <button className="btn btn-primary" type="submit" disabled={carregando} style={{ width: '100%' }}>
          {carregando ? 'Criando conta...' : 'Criar conta'}
        </button>

      </form>
      <p style={{ marginTop: 16, textAlign: 'center', color: 'var(--color-cocoa-soft)' }}>
        Já tem conta? <Link to="/login" style={{ color: 'var(--color-rose-deep)', fontWeight: 700 }}>Entrar</Link>
      </p>

    </div>
  );
}
