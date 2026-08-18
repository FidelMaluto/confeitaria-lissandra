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
    <div className="contact-page fade-in-up">

        <section className="contact-hero">

          <p className="contact-label">ESTAMOS AQUI PARA SI</p>

          <h1 className="contact-title">Fale connosco</h1>

          <p className="contact-description">
            Tem uma dúvida, quer fazer uma encomenda personalizada
            ou simplesmente quer saber mais sobre os nossos doces?
            Envie-nos uma mensagem. Teremos todo o gosto em falar consigo.
          </p>

        </section>

        <main className="contact-container">

          <section className="contact-grid">

            <div className="contact-info">

              <h2 className="contact-info-title">Entre em contacto</h2>

              <p className="contact-info-description">
                Escolha a forma que preferir para falar connosco.
                Para encomendas urgentes, recomendamos o contacto
                direto através do WhatsApp.
              </p>

              <div className="contact-cards">

                <div className="contact-card">

                  <div className="contact-icon">☎</div>

                  <div>
                    <h3>Telefone</h3>

                    <p>+244 935 956 349</p>
                  </div>

                </div>

                <div className="contact-card">

                  <div className="contact-icon">✉</div>

                  <div>
                    <h3>E-mail</h3>

                    <p> lissandradocestentacoes@hotmail.com</p>
                  </div>

                </div>

                <div className="contact-card">

                  <div className="contact-icon">📍</div>

                  <div>
                    <h3>Endereço</h3>

                    <p>Zango 0, Icolo e Bengo, Angola</p>

                    <p>Consulte a nossa localização no mapa.</p>
                  </div>

                </div>

                <div className="contact-card">

                  <div className="contact-icon">🕐</div>

                  <div>
                    <h3>Horário de atendimento</h3>

                    <p>Terça - Sexta: 12:00 - 19:00,</p>

                    <p>Sábado: 12:00 - 20:00</p>
                  </div>

                </div>

              </div>

              <a
                href="https://wa.me/244935956349"
                target="_blank"
                rel="noreferrer"
                className="whatsapp-button">
                Falar pelo WhatsApp
              </a>

              <div className="social-section">

                <h3 className="social-title">Siga-nos nas redes sociais</h3>

                <div className="social-links">

                  <a href="https://www.facebook.com/profile.php?id=61562974170346" className="social-link" target='_blank'>
                    <i className="fa-brands fa-facebook"></i>
                  </a>

                  <a href="https://www.instagram.com/lissandra_docestentacoes/" className="social-link" target='_blank'>
                    <i className="fa-brands fa-instagram"></i>
                  </a>

                  <a href="https://www.tiktok.com/@lissandra_docestentacoes" className="social-link" target='_blank'>
                    <i className="fa-brands fa-tiktok"></i>
                  </a>

                </div>

              </div>

            </div>

            <div className="contact-form-container">

              <h2 className="form-title">Envie uma mensagem</h2>

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

                    <label className="form-label">Nome</label>

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

                    <label className="form-label">E-mail</label>

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

                    <label className="form-label">Telefone</label>

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

                    <label className="form-label">Assunto</label>

                    <select
                      className="form-select"
                      name="assunto"
                      value={formulario.assunto}
                      onChange={handleChange}
                      required
                    >

                      <option value="">Seleccione um assunto</option>

                      <option value="encomenda">Fazer uma encomenda</option>

                      <option value="personalizado">Bolo personalizado</option>

                      <option value="orcamento">Pedir orçamento</option>

                      <option value="duvida">Dúvida</option>

                      <option value="outro">Outro assunto</option>

                    </select>

                  </div>

                </div>

                <div className="form-group">

                  <label className="form-label">Data pretendida para a encomenda</label>

                  <input
                    className="form-input"
                    type="date"
                    name="dataEncomenda"
                    value={formulario.dataEncomenda}
                    onChange={handleChange}
                  />

                </div>

                <div className="form-group">

                  <label className="form-label">Mensagem</label>

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
                  className="form-button">
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

              <p className="section-label">VISITE-NOS</p>

              <h2 className="section-title">Onde estamos</h2>

            </div>

            <div className="map-container">

              <div className="map-content">

                <div className="map-pin">📍</div>

                <h3>Confeitaria da Lisandra</h3>

                <p>Luanda, Angola</p>

                <a
                  href="https://maps.app.goo.gl/bMdEPNDLdTLJrnuHA"
                  target="_blank"
                  rel="noreferrer"
                  className="map-button">
                  Abrir no Google Maps
                </a>

              </div>

            </div>

          </section>

          <section className="faq-section">

            <div className="section-heading">

              <p className="section-label">DÚVIDAS FREQUENTES</p>

              <h2 className="section-title">Antes de entrar em contacto</h2>

            </div>

            <div className="faq-grid">

              <div className="faq-card">

                <h3>Com quanto tempo devo fazer uma encomenda?</h3>

                <p>
                  Recomendamos que faça a sua encomenda com pelo
                  menos 48 horas de antecedência. Para bolos
                  personalizados, pode ser necessário mais tempo.
                </p>

              </div>

              <div className="faq-card">

                <h3>Fazem entregas?</h3>

                <p>
                  Sim. A disponibilidade e o custo da entrega
                  dependem da localização e do tipo de encomenda.
                </p>

              </div>

              <div className="faq-card">

                <h3>Posso personalizar o meu bolo?</h3>

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

          <h2>Tem uma ideia doce?</h2>

          <p>
            Conte-nos o que está a imaginar e vamos transformar
            a sua ideia em algo especial.
          </p>

          <a
            href="https://wa.me/244935956349"
            target="_blank"
            rel="noreferrer"
            className="bottom-button">
            Começar uma conversa
          </a>

        </section>

      </div>
  );
}
