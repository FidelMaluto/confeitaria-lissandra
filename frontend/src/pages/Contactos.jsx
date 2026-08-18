export { default } from './Contatos';

import { useState } from 'react';
import { NavLink } from 'react-router-dom';

export default function Contactos() {
  const [formulario, setFormulario] = useState({
    nome: '',
    email: '',
    telefone: '',
    assunto: '',
    dataEncomenda: '',
    mensagem: '',
  });

  const [enviado, setEnviado] = useState(false);

  const handleChange = (e) => {
    setFormulario({
      ...formulario,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    console.log(formulario);

    setEnviado(true);

    setFormulario({
      nome: '',
      email: '',
      telefone: '',
      assunto: '',
      dataEncomenda: '',
      mensagem: '',
    });

    setTimeout(() => {
      setEnviado(false);
    }, 5000);
  };

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

        // button,
        // input,
        // textarea,
        // select {
        //   font: inherit;
        // }

        button {
          cursor: pointer;
        }

        .contact-page {
          min-height: 100vh;
          background: #fffaf7;
        }

        .contact-hero {
          padding: 80px 20px 70px;
          text-align: center;
          background:
            radial-gradient(
              circle at 15% 20%,
              rgba(239, 171, 187, 0.35),
              transparent 25%
            ),
            radial-gradient(
              circle at 85% 70%,
              rgba(239, 171, 187, 0.25),
              transparent 25%
            ),
            #fff5f2;
        }

        .contact-label {
          margin: 0 0 12px;
          color: #d79532;
          font-size: 0.75rem;
          font-weight: 800;
          letter-spacing: 2px;
          text-transform: uppercase;
        }

        .contact-title {
          margin: 0;
          color: #4b3033;
          font-family: Georgia, serif;
          font-size: clamp(2.2rem, 5vw, 4rem);
        }

        .contact-description {
          max-width: 650px;
          margin: 20px auto 0;
          color: #795f64;
          font-size: 1rem;
          line-height: 1.7;
        }

        .contact-container {
          max-width: 1100px;
          margin: auto;
          padding: 70px 20px;
        }

        .contact-grid {
          display: grid;
          grid-template-columns: 0.85fr 1.15fr;
          gap: 45px;
          align-items: start;
        }

        .contact-info-title {
          margin: 0 0 12px;
          color: #4b3033;
          font-family: Georgia, serif;
          font-size: 1.8rem;
        }

        .contact-info-description {
          margin: 0 0 30px;
          color: #795f64;
          line-height: 1.7;
        }

        .contact-cards {
          display: grid;
          gap: 14px;
        }

        .contact-card {
          display: flex;
          align-items: flex-start;
          gap: 15px;
          padding: 18px;
          border: 1px solid #f0e2e2;
          border-radius: 12px;
          background: #fff;
        }

        .contact-icon {
          width: 44px;
          height: 44px;
          flex-shrink: 0;

          display: flex;
          align-items: center;
          justify-content: center;

          border-radius: 50%;
          background: #fff0f3;
          color: #d96882;
          font-size: 1.2rem;
        }

        .contact-card h3 {
          margin: 0 0 5px;
          color: #4b3033;
          font-size: 0.9rem;
        }

        .contact-card p {
          margin: 0;
          color: #795f64;
          font-size: 0.85rem;
          line-height: 1.5;
        }

        .whatsapp-button {
          display: inline-flex;
          align-items: center;
          justify-content: center;
          gap: 8px;

          width: 100%;
          margin-top: 20px;
          padding: 14px;

          border: none;
          border-radius: 25px;

          background: #e4839a;
          color: #fff;

          font-weight: 700;
          text-decoration: none;
        }

        .social-section {
          margin-top: 25px;
        }

        .social-title {
          margin: 0 0 12px;
          font-size: 0.85rem;
        }

        .social-links {
          display: flex;
          gap: 10px;
        }

        .social-link {
          width: 40px;
          height: 40px;

          display: flex;
          align-items: center;
          justify-content: center;

          border: 1px solid #efd9dd;
          border-radius: 50%;

          background: #fff;
          color: #d96882;

          text-decoration: none;
          font-weight: 700;
        }

        .contact-form-container {
          padding: 30px;
          border: 1px solid #f0e2e2;
          border-radius: 16px;
          background: #fff;

          box-shadow:
            0 15px 40px rgba(88, 54, 60, 0.05);
        }

        .form-title {
          margin: 0 0 7px;
          color: #4b3033;
          font-family: Georgia, serif;
          font-size: 1.6rem;
        }

        .form-subtitle {
          margin: 0 0 25px;
          color: #927479;
          font-size: 0.85rem;
        }

        .form-row {
          display: grid;
          grid-template-columns: 1fr 1fr;
          gap: 15px;
        }

        .form-group {
          margin-bottom: 17px;
        }

        .form-label {
          display: block;
          margin-bottom: 7px;
          color: #654a4f;
          font-size: 0.8rem;
          font-weight: 700;
        }

        .form-input,
        .form-select,
        .form-textarea {
          width: 100%;
          padding: 12px 14px;

          border: 1px solid #eadbdd;
          border-radius: 8px;

          outline: none;
          background: #fff;
          color: #4b3033;
        }

        .form-textarea {
          min-height: 130px;
          resize: vertical;
        }

        .form-input:focus,
        .form-select:focus,
        .form-textarea:focus {
          border-color: #e8899e;
          box-shadow: 0 0 0 3px rgba(232, 137, 158, 0.1);
        }

        .form-button {
          width: 100%;
          padding: 14px;

          border: none;
          border-radius: 25px;

          background: #e4839a;
          color: #fff;

          font-weight: 700;
        }

        .form-button:hover {
          background: #db718b;
        }

        .success-message {
          margin-bottom: 20px;
          padding: 13px 15px;

          border: 1px solid #e3c8cd;
          border-radius: 8px;

          background: #fff2f4;
          color: #a35c6c;

          font-size: 0.85rem;
          font-weight: 700;
        }

        .response-info {
          margin-top: 15px;
          color: #927479;
          text-align: center;
          font-size: 0.75rem;
        }

        .map-section {
          margin-top: 70px;
        }

        .section-heading {
          margin-bottom: 25px;
        }

        .section-label {
          margin: 0 0 8px;
          color: #d79532;
          font-size: 0.7rem;
          font-weight: 800;
          letter-spacing: 2px;
          text-transform: uppercase;
        }

        .section-title {
          margin: 0;
          color: #4b3033;
          font-family: Georgia, serif;
          font-size: 2rem;
        }

        .map-container {
          position: relative;
          min-height: 330px;
          overflow: hidden;

          display: flex;
          align-items: center;
          justify-content: center;

          border-radius: 16px;
          background:
            linear-gradient(
              rgba(244, 218, 220, 0.75),
              rgba(244, 218, 220, 0.75)
            ),
            repeating-linear-gradient(
              45deg,
              #f8e8e8,
              #f8e8e8 10px,
              #f3dddd 10px,
              #f3dddd 20px
            );
        }

        .map-content {
          padding: 30px;
          text-align: center;
        }

        .map-pin {
          font-size: 3rem;
        }

        .map-content h3 {
          margin: 15px 0 8px;
          color: #4b3033;
          font-family: Georgia, serif;
          font-size: 1.5rem;
        }

        .map-content p {
          margin: 0;
          color: #795f64;
        }

        .map-button {
          display: inline-block;
          margin-top: 20px;
          padding: 11px 20px;

          border: 1px solid #e8899e;
          border-radius: 22px;

          background: #fff;
          color: #d96882;

          font-size: 0.85rem;
          font-weight: 700;
          text-decoration: none;
        }

        .faq-section {
          margin-top: 70px;
        }

        .faq-grid {
          display: grid;
          grid-template-columns: repeat(3, 1fr);
          gap: 18px;
        }

        .faq-card {
          padding: 22px;
          border: 1px solid #f0e2e2;
          border-radius: 12px;
          background: #fff;
        }

        .faq-card h3 {
          margin: 0 0 10px;
          color: #4b3033;
          font-family: Georgia, serif;
          font-size: 1rem;
        }

        .faq-card p {
          margin: 0;
          color: #795f64;
          font-size: 0.83rem;
          line-height: 1.6;
        }

        .contact-bottom {
          padding: 50px 20px;
          background: #f8e5e7;
          text-align: center;
        }

        .contact-bottom h2 {
          margin: 0;
          color: #4b3033;
          font-family: Georgia, serif;
          font-size: 2rem;
        }

        .contact-bottom p {
          margin: 12px auto 25px;
          color: #795f64;
        }

        .bottom-button {
          display: inline-block;
          padding: 13px 25px;

          border-radius: 25px;
          background: #e4839a;
          color: #fff;

          font-weight: 700;
          text-decoration: none;
        }

        @media (max-width: 1000px) {

          .contact-nav {
            display: none;
          }

          .contact-grid {
            grid-template-columns: 1fr;
          }

          .contact-info {
            max-width: 700px;
          }

        }

        @media (max-width: 700px) {

          .contact-header-container {
            padding: 15px;
          }

          .contact-search {
            display: none;
          }

          .contact-hero {
            padding: 60px 20px;
          }

          .contact-container {
            padding: 50px 15px;
          }

          .contact-form-container {
            padding: 20px;
          }

          .form-row {
            grid-template-columns: 1fr;
            gap: 0;
          }

          .faq-grid {
            grid-template-columns: 1fr;
          }

          .map-container {
            min-height: 280px;
          }

        }

      `}</style>

      <div className="contact-page">

        <section className="contact-hero">

          <p className="contact-label">
            ESTAMOS AQUI PARA SI
          </p>

          <h1 className="contact-title">
            Fale connosco
          </h1>

          <p className="contact-description">
            Tem uma dúvida, quer fazer uma encomenda personalizada
            ou simplesmente quer saber mais sobre os nossos doces?
            Envie-nos uma mensagem. Teremos todo o gosto em falar consigo.
          </p>

        </section>

        <main className="contact-container">

          <section className="contact-grid">

            <div className="contact-info">

              <h2 className="contact-info-title">
                Entre em contacto
              </h2>

              <p className="contact-info-description">
                Escolha a forma que preferir para falar connosco.
                Para encomendas urgentes, recomendamos o contacto
                direto através do WhatsApp.
              </p>

              <div className="contact-cards">

                <div className="contact-card">

                  <div className="contact-icon">
                    ☎
                  </div>

                  <div>
                    <h3>
                      Telefone
                    </h3>

                    <p>
                      +244 9XX XXX XXX
                    </p>

                    <p>
                      +244 9XX XXX XXX
                    </p>
                  </div>

                </div>

                <div className="contact-card">

                  <div className="contact-icon">
                    ✉
                  </div>

                  <div>
                    <h3>
                      E-mail
                    </h3>

                    <p>
                      contacto@docestentacoes.ao
                    </p>
                  </div>

                </div>

                <div className="contact-card">

                  <div className="contact-icon">
                    📍
                  </div>

                  <div>
                    <h3>
                      Endereço
                    </h3>

                    <p>
                      Luanda, Angola
                    </p>

                    <p>
                      Consulte a nossa localização no mapa.
                    </p>
                  </div>

                </div>

                <div className="contact-card">

                  <div className="contact-icon">
                    🕐
                  </div>

                  <div>
                    <h3>
                      Horário de atendimento
                    </h3>

                    <p>
                      Segunda a Sexta: 08:00 — 18:00
                    </p>

                    <p>
                      Sábado: 08:00 — 15:00
                    </p>
                  </div>

                </div>

              </div>

              <a
                href="https://wa.me/244900000000"
                target="_blank"
                rel="noreferrer"
                className="whatsapp-button"
              >
                💬 Falar pelo WhatsApp
              </a>

              <div className="social-section">

                <h3 className="social-title">
                  Siga-nos nas redes sociais
                </h3>

                <div className="social-links">

                  <a href="#" className="social-link">
                    f
                  </a>

                  <a href="#" className="social-link">
                    ◎
                  </a>

                  <a href="#" className="social-link">
                    ▶
                  </a>

                  <a href="#" className="social-link">
                    ♪
                  </a>

                </div>

              </div>

            </div>

            <div className="contact-form-container">

              <h2 className="form-title">
                Envie uma mensagem
              </h2>

              <p className="form-subtitle">
                Preencha o formulário e entraremos em contacto consigo.
              </p>

              {enviado && (

                <div className="success-message">
                  ✓ Mensagem enviada com sucesso!
                  Entraremos em contacto consigo em breve.
                </div>

              )}

              <form onSubmit={handleSubmit}>

                <div className="form-row">

                  <div className="form-group">

                    <label className="form-label">
                      Nome
                    </label>

                    <input
                      className="form-input"
                      type="text"
                      name="nome"
                      placeholder="O seu nome"
                      value={formulario.nome}
                      onChange={handleChange}
                      required
                    />

                  </div>

                  <div className="form-group">

                    <label className="form-label">
                      E-mail
                    </label>

                    <input
                      className="form-input"
                      type="email"
                      name="email"
                      placeholder="O seu e-mail"
                      value={formulario.email}
                      onChange={handleChange}
                      required
                    />

                  </div>

                </div>

                <div className="form-row">

                  <div className="form-group">

                    <label className="form-label">
                      Telefone
                    </label>

                    <input
                      className="form-input"
                      type="tel"
                      name="telefone"
                      placeholder="+244 9XX XXX XXX"
                      value={formulario.telefone}
                      onChange={handleChange}
                    />

                  </div>

                  <div className="form-group">

                    <label className="form-label">
                      Assunto
                    </label>

                    <select
                      className="form-select"
                      name="assunto"
                      value={formulario.assunto}
                      onChange={handleChange}
                      required
                    >

                      <option value="">
                        Seleccione um assunto
                      </option>

                      <option value="encomenda">
                        Fazer uma encomenda
                      </option>

                      <option value="personalizado">
                        Bolo personalizado
                      </option>

                      <option value="orcamento">
                        Pedir orçamento
                      </option>

                      <option value="duvida">
                        Dúvida
                      </option>

                      <option value="outro">
                        Outro assunto
                      </option>

                    </select>

                  </div>

                </div>

                <div className="form-group">

                  <label className="form-label">
                    Data pretendida para a encomenda
                  </label>

                  <input
                    className="form-input"
                    type="date"
                    name="dataEncomenda"
                    value={formulario.dataEncomenda}
                    onChange={handleChange}
                  />

                </div>

                <div className="form-group">

                  <label className="form-label">
                    Mensagem
                  </label>

                  <textarea
                    className="form-textarea"
                    name="mensagem"
                    placeholder="Escreva aqui a sua mensagem..."
                    value={formulario.mensagem}
                    onChange={handleChange}
                    required
                  />

                </div>

                <button
                  type="submit"
                  className="form-button"
                >
                  Enviar mensagem
                </button>

                <p className="response-info">
                  Normalmente respondemos às mensagens em até 24 horas.
                </p>

              </form>

            </div>

          </section>

          <section className="map-section">

            <div className="section-heading">

              <p className="section-label">
                VISITE-NOS
              </p>

              <h2 className="section-title">
                Onde estamos
              </h2>

            </div>

            <div className="map-container">

              <div className="map-content">

                <div className="map-pin">
                  📍
                </div>

                <h3>
                  Confeitaria da Lisandra
                </h3>

                <p>
                  Luanda, Angola
                </p>

                <a
                  href="https://www.google.com/maps"
                  target="_blank"
                  rel="noreferrer"
                  className="map-button"
                >
                  Abrir no Google Maps
                </a>

              </div>

            </div>

          </section>

          <section className="faq-section">

            <div className="section-heading">

              <p className="section-label">
                DÚVIDAS FREQUENTES
              </p>

              <h2 className="section-title">
                Antes de entrar em contacto
              </h2>

            </div>

            <div className="faq-grid">

              <div className="faq-card">

                <h3>
                  Com quanto tempo devo fazer uma encomenda?
                </h3>

                <p>
                  Recomendamos que faça a sua encomenda com pelo
                  menos 48 horas de antecedência. Para bolos
                  personalizados, pode ser necessário mais tempo.
                </p>

              </div>

              <div className="faq-card">

                <h3>
                  Fazem entregas?
                </h3>

                <p>
                  Sim. A disponibilidade e o custo da entrega
                  dependem da localização e do tipo de encomenda.
                </p>

              </div>

              <div className="faq-card">

                <h3>
                  Posso personalizar o meu bolo?
                </h3>

                <p>
                  Sim. Pode enviar a sua ideia, referência ou tema
                  através do formulário ou falar directamente
                  connosco pelo WhatsApp.
                </p>

              </div>

            </div>

          </section>

        </main>

        <section className="contact-bottom">

          <h2>
            Tem uma ideia doce?
          </h2>

          <p>
            Conte-nos o que está a imaginar e vamos transformar
            a sua ideia em algo especial.
          </p>

          <a
            href="https://wa.me/244900000000"
            target="_blank"
            rel="noreferrer"
            className="bottom-button"
          >
            Começar uma conversa
          </a>

        </section>

      </div>
    </>
  );
}