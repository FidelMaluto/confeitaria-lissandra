import { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import { api } from '../lib/api';
import ProductCard from '../components/ProductCard';
import LuxuryMarquee from '../components/LuxuryMarquee';
import CakeStudioVisualizer from '../components/CakeStudioVisualizer';
import FlavorSommelierQuiz from '../components/FlavorSommelierQuiz';
import ScallopDivider from '../components/ScallopDivider';

import heroCakeImage from '../images/hero-desktop.png';

export default function Home() {
  const [destaques, setDestaques] = useState([]);

  useEffect(() => {
    api
      .listProducts()
      .then((data) => setDestaques(data.slice(0, 6)))
      .catch(() => { });
  }, []);

  return (
    <div className="home-luxury-wrapper">
      {/* =========================================================================
          1. HERO CINEMATOGRÁFICO COM VÍDEO DE FUNDO EM LOOP
          ========================================================================= */}
      <section className="hero-awwwards-section hero-has-img-bg">
        {/* FUNDO: imagem desktop/mobile */}
        <div className="hero-img-bg-container">
          <div className="hero-img-bg-media" />
          {/* Fumaça / névoa no lado esquerdo */}
          <div className="hero-smoke-left" />
          {/* Overlay escuro geral suave */}
          <div className="hero-video-backdrop-overlay" />
        </div>

        <div className="container hero-video-content">
          <div className="hero-editorial-content fade-in-up">

            {/* Título isolado — separado visualmente */}
            <h1 className="hero-headline hero-headline-standalone">
              Confeitaria que <br />
              <span className="text-gradient-foil">Encanta</span> com os <br />
              <span className="font-serif-italic">sabores.</span>
            </h1>

            {/* Separador sutil */}
            <div className="hero-title-divider" />

            <p className="hero-description">
              Bolos esculturais, tortas aveludadas e doces finos criados do zero,
              unindo receitas ancestrais de família, cacau belga nobre e o toque
              inconfundível do carinho artesanal.
            </p>

            <div className="hero-actions-group">
              <Link to="/catalogo" className="btn btn-primary btn-shine hero-main-cta">
                <i className="fa-solid fa-cake-candles" />
                <span>Explorar Criações</span>
              </Link>

              <a href="#atelier-3d" className="btn btn-ghost-light hero-secondary-cta">
                <i className="fa-solid fa-cubes-stacked" />
                <span>Montar Bolo 3D</span>
              </a>
            </div>

            <div className="hero-metrics-strip">
              <div className="metric-item">
                <strong className="metric-number">5.000+</strong>
                <span className="metric-label">Momentos Adoçados</span>
              </div>
              <div className="metric-sep" />
              <div className="metric-item">
                <strong className="metric-number">4.9 ★</strong>
                <span className="metric-label">Excelência em Luanda</span>
              </div>
              <div className="metric-sep" />
              <div className="metric-item">
                <strong className="metric-number">100%</strong>
                <span className="metric-label">Ingredientes Naturais</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* =========================================================================
          2. MARQUEE DE LUXO CONTÍNUO
          ========================================================================= */}
      <LuxuryMarquee />

      {/* =========================================================================
          3. ATELIER INTERATIVO DE BOLOS 3D
          ========================================================================= */}
      <div id="atelier-3d">
        <CakeStudioVisualizer />
      </div>

      <ScallopDivider />

      {/* =========================================================================
          4. COLEÇÃO EXCLUSIVA / DESTAQUES DA SEMANA
          ========================================================================= */}
      <section className="curated-collection-section">
        <div className="container">
          <div className="collection-header">
            <div className="collection-titles">
              <span className="eyebrow" style={{ color: 'var(--color-rose)' }}>
                ✦ Seleção do Confeiteiro
              </span>
              <h2 className="collection-main-title">
                Criações em <span className="text-gradient-gold">Destaque</span>
              </h2>
            </div>

            <Link to="/catalogo" className="btn btn-secondary collection-see-all">
              <span>Ver Catálogo Completo</span>
              <i className="fa-solid fa-arrow-right" />
            </Link>
          </div>

          {destaques.length === 0 ? (
            <div className="empty-catalog-box">
              <div className="empty-catalog-icon">🧁</div>
              <h3>Nenhum produto cadastrado no momento</h3>
              <p>Cadastre delícias no painel administrativo para exibi-las em destaque aqui.</p>
              <Link to="/catalogo" className="btn btn-primary">
                Acessar Catálogo
              </Link>
            </div>
          ) : (
            <div className="product-luxury-grid">
              {destaques.map((product) => (
                <ProductCard key={product.id} product={product} />
              ))}
            </div>
          )}
        </div>
      </section>

      {/* =========================================================================
          5. A ARTE & MAESTRIA (EDITORIAL STORYTELLING 4 PASSOS)
          ========================================================================= */}
      <section className="craftsmanship-section">
        <div className="container">
          <div className="craftsmanship-header text-center">
            <span className="eyebrow">⚜️ O Ritual da Confeitaria</span>
            <h2 className="craftsmanship-title">
              A Alquimia por Trás de <span className="text-gradient-gold">Cada Criação</span>
            </h2>
            <p className="craftsmanship-subtitle">
              Não fazemos apenas doces — desenhamos memórias sensoriais através da combinação
              de técnicas consagradas e dedicação inegociável à excelência.
            </p>
          </div>

          <div className="craftsmanship-steps-grid">
            <div className="craft-card">
              <div className="craft-card-number">01</div>
              <div className="craft-card-icon">🧈</div>
              <h3 className="craft-card-title">Matérias-Primas Nobres</h3>
              <p className="craft-card-text">
                Manteiga pura de primeira linha, chocolate belga autêntico e favas de baunilha de Bourbon
                garantem uma base rica, aromática e pura.
              </p>
            </div>

            <div className="craft-card">
              <div className="craft-card-number">02</div>
              <div className="craft-card-icon">🔥</div>
              <h3 className="craft-card-title">Cocção & Ponto Perfeito</h3>
              <p className="craft-card-text">
                Nossos brigadeiros, ganaches e cremes atingem a cremosidade ideal em fogo lento,
                sem atalhos industriais ou conservantes.
              </p>
            </div>

            <div className="craft-card">
              <div className="craft-card-number">03</div>
              <div className="craft-card-icon">🎨</div>
              <h3 className="craft-card-title">Design Escultural</h3>
              <p className="craft-card-text">
                Cada bolo é esculpido como uma tela viva: texturas aveludadas, espatulados florais
                e toques refinados de folha de ouro 24k.
              </p>
            </div>

            <div className="craft-card">
              <div className="craft-card-number">04</div>
              <div className="craft-card-icon">🎀</div>
              <h3 className="craft-card-title">Embalagem de Joalheria</h3>
              <p className="craft-card-text">
                Caixas estruturadas, laços de cetim e transporte climatizado para que sua encomenda
                chegue impecável à sua mesa.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* =========================================================================
          6. SOMMELIER / HARMONIZADOR DE DOCES INTERATIVO
          ========================================================================= */}
      <FlavorSommelierQuiz />

      {/* =========================================================================
          7. BANNER FINAL VIP & ENCOMENDAS PERSONALIZADAS
          ========================================================================= */}
      <section className="vip-cta-banner-section">
        <div className="container">
          <div className="vip-cta-card">
            <div className="vip-cta-glow" />
            <div className="vip-cta-content">
              <span className="eyebrow" style={{ color: 'var(--color-gold-light)' }}>
                ✦ Eventos & Grandes Celebrações
              </span>
              <h2 className="vip-cta-title">
                Pronto para transformar sua ocasião em um momento inesquecível?
              </h2>
              <p className="vip-cta-desc">
                Agende uma consultoria personalizada ou monte sua encomenda diretamente pelo nosso
                concierge de atendimento.
              </p>
              <div className="vip-cta-buttons">
                <a
                  href="https://wa.me/244923456789?text=Ol%C3%A1%20Lissandra!%20Gostaria%20de%20solicitar%20um%20or%C3%A7amento%20para%20minha%20celebra%C3%A7%C3%A3o%20especial."
                  target="_blank"
                  rel="noreferrer"
                  className="btn btn-primary btn-shine"
                >
                  <i className="fa-brands fa-whatsapp" />
                  <span>Falar com o Concierge</span>
                </a>
                <Link to="/catalogo" className="btn btn-ghost-light">
                  <span>Ver Todos os Doces</span>
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
