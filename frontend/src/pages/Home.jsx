import { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import { api } from '../lib/api';
import ProductCard from '../components/ProductCard';
import ScallopDivider from '../components/ScallopDivider';

export default function Home() {
  const [destaques, setDestaques] = useState([]);

  useEffect(() => {
    api.listProducts().then((data) => setDestaques(data.slice(0, 3))).catch(() => {});
  }, []);

  return (
    <div>
      {/* Hero */}
      <section style={{ background: 'linear-gradient(180deg, var(--color-blush), var(--color-cream))' }}>
        <div
          className="container"
          style={{
            padding: '90px 24px 70px',
            display: 'grid',
            gridTemplateColumns: '1.1fr 0.9fr',
            gap: 40,
            alignItems: 'center',
          }}
        >
          <div>
            <span className="eyebrow">Confeitaria da Lisandra</span>
            <h1 style={{ fontSize: '3rem', lineHeight: 1.1, margin: '12px 0 20px' }}>
              Doces que parecem<br />feitos de carinho.
            </h1>
            <p style={{ fontSize: '1.05rem', color: 'var(--color-cocoa-soft)', maxWidth: 460 }}>
              Bolos, tortas e doces finos preparados do zero, todos os dias, com receita de família
              e ingredientes selecionados a dedo.
            </p>
            <div style={{ display: 'flex', gap: 14, marginTop: 28 }}>
              <Link to="/catalogo" className="btn btn-primary">Ver catálogo</Link>
              <Link to="/checkout" className="btn btn-secondary">Fazer encomenda</Link>
            </div>
          </div>
          <div
            style={{
              aspectRatio: '1',
              borderRadius: '50%',
              background: 'radial-gradient(circle at 35% 30%, var(--color-baby-pink), var(--color-rose))',
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
              fontSize: '6rem',
              boxShadow: 'var(--shadow-soft)',
            }}
            aria-hidden="true"
          >
            🎂
          </div>
        </div>
      </section>

      <ScallopDivider />

      {/* Destaques */}
      <section className="container" style={{ padding: '60px 24px' }}>
        <span className="eyebrow">Selecionados pra você</span>
        <h2 style={{ marginBottom: 30 }}>Destaques da semana</h2>
        {destaques.length === 0 ? (
          <p style={{ color: 'var(--color-cocoa-soft)' }}>
            Cadastre produtos no painel admin para vê-los aqui.
          </p>
        ) : (
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(240px, 1fr))', gap: 24 }}>
            {destaques.map((p) => (
              <ProductCard key={p.id} product={p} />
            ))}
          </div>
        )}
      </section>
    </div>
  );
}
