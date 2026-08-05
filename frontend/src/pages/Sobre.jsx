import { NavLink, Link } from 'react-router-dom';

export default function Sobre() {
  return (
    <>
      <style>{`

        // * {
        //   box-sizing: border-box;
        // }

        body {
          margin: 0;
          background: #fffaf7;
          color: #4b3033;
        }

        a {
          text-decoration: none;
        }

        .about-page {
          min-height: 100vh;
          background: #fffaf7;
        }

        .about-cart {
          padding: 10px 18px;

          border: 1px solid #e8899e;
          border-radius: 22px;

          background: #fff;
          color: #d96882;

          font-weight: 700;
        }

        .about-hero {
          min-height: 500px;
          padding: 80px 30px;

          display: grid;
          grid-template-columns: 1fr 1fr;
          align-items: center;
          gap: 70px;

          background:
            radial-gradient(
              circle at 10% 20%,
              rgba(239, 171, 187, 0.35),
              transparent 25%
            ),
            radial-gradient(
              circle at 90% 80%,
              rgba(239, 171, 187, 0.3),
              transparent 25%
            ),
            #fff5f2;
        }

        .about-hero-content {
          max-width: 560px;
          width: 100%;
          margin-left: auto;
        }

        .about-label {
          margin: 0 0 12px;

          color: #d79532;
          font-size: 0.75rem;
          font-weight: 800;
          letter-spacing: 2px;
        }

        .about-hero-title {
          margin: 0;

          color: #4b3033;
          font-family: Georgia, serif;
          font-size: clamp(2.5rem, 5vw, 4.5rem);
          line-height: 1.1;
        }

        .about-hero-text {
          margin: 25px 0 0;

          color: #795f64;
          font-size: 1rem;
          line-height: 1.8;
        }

        .about-hero-button {
          display: inline-block;
          margin-top: 30px;
          padding: 13px 25px;

          border-radius: 25px;

          background: #e4839a;
          color: #fff;

          font-size: 0.9rem;
          font-weight: 700;
        }

        .about-hero-image {
          width: 100%;
          max-width: 500px;
          min-height: 400px;

          display: flex;
          align-items: center;
          justify-content: center;

          margin-right: auto;

          overflow: hidden;
          border-radius: 25px;

          background:
            linear-gradient(
              rgba(228, 131, 154, 0.12),
              rgba(228, 131, 154, 0.12)
            ),
            url('https://images.unsplash.com/photo-1578985545062-69928b1d9587?auto=format&fit=crop&w=900&q=80');

          background-size: cover;
          background-position: center;

          box-shadow:
            0 20px 50px rgba(88, 54, 60, 0.12);
        }

        .about-container {
          max-width: 1100px;
          margin: auto;
          padding: 90px 20px;
        }

        .story-section {
          display: grid;
          grid-template-columns: 1fr 1fr;
          align-items: center;
          gap: 60px;
        }

        .story-image {
          min-height: 450px;

          border-radius: 20px;

          background:
            url('https://images.unsplash.com/photo-1559622214-f8a9850965bb?auto=format&fit=crop&w=900&q=80');

          background-size: cover;
          background-position: center;
        }

        .section-label {
          margin: 0 0 10px;

          color: #d79532;
          font-size: 0.72rem;
          font-weight: 800;
          letter-spacing: 2px;
        }

        .section-title {
          margin: 0 0 20px;

          color: #4b3033;
          font-family: Georgia, serif;
          font-size: clamp(2rem, 4vw, 3rem);
          line-height: 1.2;
        }

        .section-text {
          margin: 0 0 18px;

          color: #795f64;
          line-height: 1.8;
        }

        .story-signature {
          margin-top: 25px;

          color: #d96882;
          font-family: Georgia, serif;
          font-size: 1.2rem;
          font-style: italic;
        }

        .numbers-section {
          padding: 70px 20px;
          background: #f8e5e7;
        }

        .numbers-container {
          max-width: 1000px;
          margin: auto;
          display: flex;
          justify-content: space-between;
        }

        .number-card {
          text-align: center;
        }

        .number {
          display: block;

          color: #d96882;
          font-family: Georgia, serif;
          font-size: 2.5rem;
          font-weight: 700;
        }

        .number-description {
          display: block;
          margin-top: 7px;

          color: #795f64;
          font-size: 0.85rem;
        }

        .values-section {
          text-align: center;
        }

        .values-heading {
          max-width: 650px;
          margin: 0 auto 50px;
        }

        .values-grid {
          display: grid;
          grid-template-columns: repeat(3, 1fr);
          gap: 20px;

          text-align: left;
        }

        .value-card {
          padding: 30px;

          border: 1px solid #f0e2e2;
          border-radius: 15px;

          background: #fff;

          transition:
            transform 0.2s ease,
            box-shadow 0.2s ease;
        }

        .value-card:hover {
          transform: translateY(-5px);

          box-shadow:
            0 15px 35px rgba(88, 54, 60, 0.07);
        }

        .value-icon {
          width: 50px;
          height: 50px;

          display: flex;
          align-items: center;
          justify-content: center;

          margin-bottom: 20px;

          border-radius: 50%;

          background: #fff0f3;
          color: #d96882;

          font-size: 1.3rem;
        }

        .value-title {
          margin: 0 0 10px;

          color: #4b3033;
          font-family: Georgia, serif;
          font-size: 1.2rem;
        }

        .value-text {
          margin: 0;

          color: #795f64;
          font-size: 0.87rem;
          line-height: 1.7;
        }

        .process-section {
          background: #fff5f2;
        }

        .process-heading {
          max-width: 650px;
          margin-bottom: 50px;
        }

        .process-grid {
          display: grid;
          grid-template-columns: repeat(4, 1fr);
          gap: 25px;
        }

        .process-card {
          position: relative;
        }

        .process-number {
          display: flex;

          width: 45px;
          height: 45px;

          align-items: center;
          justify-content: center;

          margin-bottom: 18px;

          border-radius: 50%;

          background: #e4839a;
          color: #fff;

          font-weight: 700;
        }

        .process-card h3 {
          margin: 0 0 10px;

          color: #4b3033;
          font-family: Georgia, serif;
        }

        .process-card p {
          margin: 0;

          color: #795f64;
          font-size: 0.85rem;
          line-height: 1.7;
        }

        .team-section {
          text-align: center;
        }

        .team-heading {
          max-width: 650px;
          margin: 0 auto 50px;
        }

        .team-grid {
          display: flex;
          // grid-template-columns: repeat(3, 1fr);
          // gap: 25px;
          justify-content: space-between;
        }

        .team-card {
          // overflow: hidden;
          border: 1px solid #f0e2e2;
          border-radius: 15px;
          background: #fff;
          width: 45%;
        }

        .team-image {
          height: 260px;

          background-size: cover;
          background-position: center;
        }

        .team-image-2 {
          background-image:
            url('https://images.unsplash.com/photo-1610851467843-fe4a65aea9c0?ixlib=rb-4.1.0&q=85&fm=jpg&crop=entropy&cs=srgb');
        }

        .team-image-3 {
          background-image:
            url('https://images.unsplash.com/photo-1521791136064-7986c2920216?ixlib=rb-4.1.0&q=85&fm=jpg&crop=entropy&cs=srgb');
        }

        .team-info {
          padding: 22px;
        }

        .team-name {
          margin: 0 0 6px;

          color: #4b3033;
          font-family: Georgia, serif;
          font-size: 1.2rem;
        }

        .team-role {
          margin: 0;

          color: #d96882;
          font-size: 0.8rem;
          font-weight: 700;
        }

        .cta-section {
          padding: 80px 20px;

          background: #4b3033;

          text-align: center;
        }

        .cta-title {
          margin: 0;

          color: #fff;
          font-family: Georgia, serif;
          font-size: clamp(2rem, 4vw, 3rem);
        }

        .cta-text {
          max-width: 600px;
          margin: 15px auto 30px;

          color: #efdfe1;
          line-height: 1.7;
        }

        .cta-button {
          display: inline-block;

          padding: 14px 28px;

          border-radius: 25px;

          background: #e4839a;
          color: #fff;

          font-weight: 700;
        }

        @media (max-width: 1000px) {

          .about-nav {
            display: none;
          }

          .about-hero {
            grid-template-columns: 1fr;
          }

          .about-hero-content {
            margin: auto;
            text-align: center;
          }

          .about-hero-image {
            margin: auto;
          }

          .story-section {
            grid-template-columns: 1fr;
          }

          .story-image {
            min-height: 350px;
          }

          .process-grid {
            grid-template-columns: repeat(2, 1fr);
          }

        }

        @media (max-width: 700px) {

          .about-header-container {
            padding: 15px;
          }

          .about-search {
            display: none;
          }

          .about-hero {
            padding: 60px 20px;
            gap: 40px;
          }

          .about-hero-image {
            min-height: 300px;
          }

          .about-container {
            padding: 60px 15px;
          }

          .numbers-container {
            grid-template-columns: repeat(2, 1fr);
          }

          .values-grid {
            grid-template-columns: 1fr;
          }

          .process-grid {
            grid-template-columns: 1fr;
          }

          .team-grid {
            grid-template-columns: 1fr;
          }

        }

      `}</style>

      <div className="about-page">

        <section className="about-hero">

          <div className="about-hero-content">

            <p className="about-label">
              A NOSSA HISTÓRIA
            </p>

            <h1 className="about-hero-title">
              Feito com amor,
              <br />
              servido com carinho.
            </h1>

            <p className="about-hero-text">
              Somos uma confeitaria apaixonada por transformar
              ingredientes simples em momentos inesquecíveis.
              Cada bolo, cada doce e cada criação nasce do desejo
              de tornar os seus momentos ainda mais especiais.
            </p>

            <Link
              to="/catalogo"
              className="about-hero-button"
            >
              Conheça os nossos produtos
            </Link>

          </div>

          <div className="about-hero-image">
          </div>

        </section>

        <main>

          <section className="about-container">

            <div className="story-section">

              <div className="story-image">
              </div>

              <div>

                <p className="section-label">
                  DE ONDE VIEMOS
                </p>

                <h2 className="section-title">
                  Uma paixão que começou na cozinha
                </h2>

                <p className="section-text">
                  A nossa história começou com uma paixão simples:
                  criar doces que trouxessem felicidade às pessoas.
                  O que começou como um pequeno sonho foi crescendo
                  através de cada cliente, cada encomenda e cada
                  celebração que tivemos a oportunidade de fazer parte.
                </p>

                <p className="section-text">
                  Hoje, continuamos a trabalhar com a mesma dedicação
                  e cuidado. Acreditamos que um bom doce não é apenas
                  uma sobremesa. É uma memória, uma celebração e uma
                  forma de demonstrar carinho.
                </p>

                <p className="story-signature">
                  — Com carinho, da nossa cozinha para a sua mesa.
                </p>

              </div>

            </div>

          </section>

          <section className="numbers-section">

            <div className="numbers-container">

              <div className="number-card">

                <span className="number">
                  5+
                </span>

                <span className="number-description">
                  Anos de experiência
                </span>

              </div>


              <div className="number-card">

                <span className="number">
                  100%
                </span>

                <span className="number-description">
                  Dedicação
                </span>

              </div>

              <div className="number-card">

                <span className="number">
                  ∞
                </span>

                <span className="number-description">
                  Momentos especiais
                </span>

              </div>

            </div>

          </section>

          <section className="about-container values-section">

            <div className="values-heading">

              <p className="section-label">
                O QUE NOS DEFINE
              </p>

              <h2 className="section-title">
                Mais do que doces
              </h2>

              <p className="section-text">
                Cada detalhe importa. Desde a escolha dos ingredientes
                até à apresentação final, procuramos oferecer uma
                experiência que seja tão especial quanto o momento
                que está a celebrar.
              </p>

            </div>

            <div className="values-grid">

              <div className="value-card">

                <div className="value-icon">
                  ♡
                </div>

                <h3 className="value-title">
                  Feito com amor
                </h3>

                <p className="value-text">
                  Colocamos paixão em cada receita e cuidado em
                  cada detalhe para que o resultado final seja
                  sempre especial.
                </p>

              </div>

              <div className="value-card">

                <div className="value-icon">
                  ✦
                </div>

                <h3 className="value-title">
                  Qualidade
                </h3>

                <p className="value-text">
                  Trabalhamos para oferecer produtos de qualidade,
                  preparados com ingredientes seleccionados e
                  atenção aos detalhes.
                </p>

              </div>

              <div className="value-card">

                <div className="value-icon">
                  ♧
                </div>

                <h3 className="value-title">
                  Personalização
                </h3>

                <p className="value-text">
                  Cada celebração é única. Por isso, criamos
                  soluções personalizadas para combinar com
                  o seu momento.
                </p>

              </div>

            </div>

          </section>

          <section className="process-section">

            <div className="about-container">

              <div className="process-heading">

                <p className="section-label">
                  COMO TRABALHAMOS
                </p>

                <h2 className="section-title">
                  Do seu pedido até à sua mesa
                </h2>

                <p className="section-text">
                  Cuidamos de cada etapa para garantir que a sua
                  experiência seja simples, agradável e especial.
                </p>

              </div>

              <div className="process-grid">

                <div className="process-card">

                  <div className="process-number">
                    01
                  </div>

                  <h3>
                    Escolha
                  </h3>

                  <p>
                    Explore o nosso catálogo e encontre o produto
                    perfeito para o seu momento.
                  </p>

                </div>

                <div className="process-card">

                  <div className="process-number">
                    02
                  </div>

                  <h3>
                    Personalize
                  </h3>

                  <p>
                    Para pedidos especiais, converse connosco
                    e diga-nos como imagina a sua criação.
                  </p>

                </div>

                <div className="process-card">

                  <div className="process-number">
                    03
                  </div>

                  <h3>
                    Preparação
                  </h3>

                  <p>
                    A nossa equipa prepara cuidadosamente a sua
                    encomenda com atenção a todos os detalhes.
                  </p>

                </div>

                <div className="process-card">

                  <div className="process-number">
                    04
                  </div>

                  <h3>
                    Celebre
                  </h3>

                  <p>
                    Receba a sua encomenda e aproveite o momento
                    com quem realmente importa.
                  </p>

                </div>

              </div>

            </div>

          </section>

          <section className="about-container team-section">

            <div className="team-heading">

              <p className="section-label">
                A NOSSA EQUIPA
              </p>

              <h2 className="section-title">
                Pessoas por trás de cada criação
              </h2>

              <p className="section-text">
                Por trás de cada produto existe uma equipa que
                partilha a mesma paixão por criar momentos
                especiais através da confeitaria.
              </p>

            </div>

            <div className="team-grid">


              <div className="team-card">

                <div className="team-image team-image-2">
                </div>

                <div className="team-info">

                  <h3 className="team-name">
                    Equipa de Produção
                  </h3>

                  <p className="team-role">
                    Criação & Qualidade
                  </p>

                </div>

              </div>

              <div className="team-card">

                <div className="team-image team-image-3">
                </div>

                <div className="team-info">

                  <h3 className="team-name">
                    Atendimento
                  </h3>

                  <p className="team-role">
                    A cuidar de si
                  </p>

                </div>

              </div>

            </div>

          </section>

          <section className="cta-section">

            <h2 className="cta-title">
              Vamos criar algo especial?
            </h2>

            <p className="cta-text">
              Seja para uma celebração, um presente ou simplesmente
              para adoçar o seu dia, estamos prontos para preparar
              algo especial para si.
            </p>

            <Link
              to="/contactos"
              className="cta-button"
            >
              Entre em contacto connosco
            </Link>

          </section>

        </main>

      </div>
    </>
  );
}