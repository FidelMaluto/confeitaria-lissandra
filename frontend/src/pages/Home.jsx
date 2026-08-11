import { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import { api } from '../lib/api';
import ProductCard from '../components/ProductCard';
import ScallopDivider from '../components/ScallopDivider';

// Pega automaticamente TODAS as imagens de frontend/images,
// não importa o nome do arquivo — só precisam estar nessa pasta.
const heroImageModules = import.meta.glob('../images/*.{png,jpg,jpeg,webp}', {
  eager: true,
  import: 'default',
});

const heroImages = Object.values(heroImageModules);

export default function Home() {
  const [destaques, setDestaques] = useState([]);
  const [heroIndex, setHeroIndex] = useState(0);

  useEffect(() => {
    api.listProducts().then((data) => setDestaques(data.slice(0, 3))).catch(() => { });
  }, []);

  // Troca a imagem do círculo a cada 5 segundos
  useEffect(() => {
    if (heroImages.length <= 1) return;
    const intervalo = setInterval(() => {
      setHeroIndex((i) => (i + 1) % heroImages.length);
    }, 3000);
    return () => clearInterval(intervalo);
  }, []);

  return (
    <div>
      {/* Hero */}
      <section style={{ background: 'linear-gradient(180deg, var(--color-blush), var(--color-cream))' }}>
        <div
          className="container hero-grid"
          style={{
            padding: '90px 24px 70px',
            display: 'grid',
            gridTemplateColumns: '1.1fr 0.9fr',
            gap: 40,
            alignItems: 'center',
          }}>

          <div className="fade-in-up">
            <span className="eyebrow">Confeitaria artesanal</span>
            <h1 style={{ lineHeight: 1.1, margin: '12px 0 20px' }}>
              Doces que parecem<br />feitos de carinho.
            </h1>

            <p style={{ fontSize: '1.05rem', color: 'var(--color-cocoa-soft)', maxWidth: 460 }}>
              Bolos, tortas e doces finos preparados do zero, todos os dias, com receita de família
              e ingredientes selecionados a dedo.
            </p>

            <div style={{ display: 'flex', gap: 14, marginTop: 28, flexWrap: 'wrap' }}>
              <Link to="/catalogo" className="btn btn-shine">Ver catálogo</Link>
              <Link to="/checkout" className="btn btn-secondary">Fazer encomenda</Link>
            </div>

          </div>

          <div className="float hero-circle" aria-hidden="true">
            {heroImages.length > 0 ? (
              <img
                key={heroIndex}
                src={heroImages[heroIndex]}
                alt=""
                className="hero-circle-img fade-in"
              />
            ) : (
              <span style={{ fontSize: '6rem' }}></span>
            )}

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
          <div className="stagger-grid" style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(auto-fit, minmax(240px, 1fr))',
            gap: 24
          }}>
            {destaques.map((p) => (
              <ProductCard key={p.id} product={p} />
            ))}
          </div>
        )}
      </section>
    </div>
  );
}
