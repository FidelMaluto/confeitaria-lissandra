import { Link } from 'react-router-dom';

export default function Sobre() {
  return (
    <div className="about-page fade-in-up">

        <section className="about-hero">

          <div className="about-hero-content">

            <p className="about-label">A NOSSA HISTÓRIA</p>

            <h1 className="about-hero-title">Feito com amor,<br />
              servido com carinho.
            </h1>

            <p className="about-hero-text">
              Somos uma confeitaria apaixonada por transformar
              ingredientes simples em momentos inesquecíveis.
              Cada bolo, cada doce e cada criação nasce do desejo
              de tornar os seus momentos ainda mais especiais.
            </p>

            <Link to="/catalogo" className="about-hero-button">
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

                <p className="section-label">DE ONDE VIEMOS</p>

                <h2 className="section-title">Uma paixão que começou na cozinha</h2>

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

                <span className="number">5+</span>

                <span className="number-description">Anos de experiência</span>

              </div>

              <div className="number-card">

                <span className="number">100%</span>

                <span className="number-description">Dedicação</span>

              </div>

              <div className="number-card">

                <span className="number">∞</span>

                <span className="number-description">Momentos especiais</span>

              </div>

            </div>

          </section>

          <section className="about-container values-section">

            <div className="values-heading">

              <p className="section-label">O QUE NOS DEFINE</p>

              <h2 className="section-title">Mais do que doces</h2>

              <p className="section-text">
                Cada detalhe importa. Desde a escolha dos ingredientes
                até à apresentação final, procuramos oferecer uma
                experiência que seja tão especial quanto o momento
                que está a celebrar.
              </p>

            </div>

            <div className="values-grid">

              <div className="value-card">

                <div className="value-icon">♡</div>

                <h3 className="value-title">Feito com amor</h3>

                <p className="value-text">
                  Colocamos paixão em cada receita e cuidado em
                  cada detalhe para que o resultado final seja
                  sempre especial.
                </p>

              </div>

              <div className="value-card">

                <div className="value-icon">✦</div>

                <h3 className="value-title">Qualidade</h3>

                <p className="value-text">
                  Trabalhamos para oferecer produtos de qualidade,
                  preparados com ingredientes seleccionados e
                  atenção aos detalhes.
                </p>

              </div>

              <div className="value-card">

                <div className="value-icon">♧</div>

                <h3 className="value-title">Personalização</h3>

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

                <p className="section-label">COMO TRABALHAMOS</p>

                <h2 className="section-title">Do seu pedido até à sua mesa</h2>

                <p className="section-text">
                  Cuidamos de cada etapa para garantir que a sua
                  experiência seja simples, agradável e especial.
                </p>

              </div>

              <div className="process-grid">

                <div className="process-card">

                  <div className="process-number">01</div>

                  <h3>Escolha</h3>

                  <p>
                    Explore o nosso catálogo e encontre o produto
                    perfeito para o seu momento.
                  </p>

                </div>

                <div className="process-card">

                  <div className="process-number">02</div>

                  <h3>Personalize</h3>

                  <p>
                    Para pedidos especiais, converse connosco
                    e diga-nos como imagina a sua criação.
                  </p>

                </div>

                <div className="process-card">

                  <div className="process-number">03</div>

                  <h3>Preparação</h3>

                  <p>
                    A nossa equipa prepara cuidadosamente a sua
                    encomenda com atenção a todos os detalhes.
                  </p>

                </div>

                <div className="process-card">

                  <div className="process-number">04</div>

                  <h3>Celebre</h3>

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

              <p className="section-label">A NOSSA EQUIPA</p>

              <h2 className="section-title">Pessoas por trás de cada criação</h2>

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

                  <h3 className="team-name">Equipa de Produção</h3>

                  <p className="team-role">Criação & Qualidade</p>

                </div>

              </div>

              <div className="team-card">

                <div className="team-image team-image-3">
                </div>

                <div className="team-info">

                  <h3 className="team-name">Atendimento</h3>

                  <p className="team-role">A cuidar de si</p>

                </div>

              </div>

            </div>

          </section>

          <section className="cta-section">

            <h2 className="cta-title">Vamos criar algo especial?</h2>

            <p className="cta-text">
              Seja para uma celebração, um presente ou simplesmente
              para adoçar o seu dia, estamos prontos para preparar
              algo especial para si.
            </p>

            <Link to="/contatos" className="cta-button">
              Entre em contacto connosco
            </Link>

          </section>

        </main>

      </div>
  );
}
