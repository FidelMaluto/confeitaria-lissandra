import ScallopDivider from './ScallopDivider';
import { Link } from 'react-router-dom';

export default function Footer() {
  return (
    <footer className="footer" style={{ marginTop: 90 }}>
      <ScallopDivider color="var(--color-blush)" />
      <div style={{ background: 'var(--color-blush)', padding: '48px 20px 24px', borderTop: '1px solid var(--color-border-light)' }}>
        <div
          className="container"
          style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(260px, 1fr))', gap: 36, marginBottom: 36 }}
        >
          <div>
            <h3 style={{ fontSize: '1.35rem', marginBottom: 12 }}>Doces Tentações</h3>
            <p style={{ color: 'var(--color-cocoa-soft)', maxWidth: 340, fontSize: '0.95rem', lineHeight: 1.7 }}>
              Bolos, doces finos e tortas artesanais preparados com receita de família e os melhores ingredientes.
            </p>
            <p style={{ color: 'var(--color-cocoa-soft)', maxWidth: 340, fontSize: '0.88rem' }}>
              📍 Zango 0, Condomínio Vida Pacífica, Zona 2 - Bloco 14, Luanda.
            </p>
          </div>

          <div>
            <h4 style={{ fontSize: '1rem', fontWeight: 800, marginBottom: 14, color: 'var(--color-rose-deep)' }}>
              Navegação Rápida
            </h4>
            <div style={{ display: 'flex', flexDirection: 'column', gap: 8, fontSize: '0.92rem', fontWeight: 600 }}>
              <Link to="/">Início</Link>
              <Link to="/catalogo">Catálogo de Produtos</Link>
              <Link to="/sobre">Nossa História</Link>
              <Link to="/contatos">Fale Connosco</Link>
              <Link to="/perfil">Perfil da Loja</Link>
            </div>
          </div>

          <div>
            <h4 style={{ fontSize: '1rem', fontWeight: 800, marginBottom: 14, color: 'var(--color-rose-deep)' }}>
              Atendimento & Encomendas
            </h4>
            <p style={{ color: 'var(--color-cocoa-soft)', fontSize: '0.92rem', marginBottom: 6 }}>
              <strong>WhatsApp:</strong>{' '}
              <a href="https://wa.me/244935956349" target="_blank" rel="noreferrer" style={{ color: 'var(--color-rose-deep)', fontWeight: 700 }}>
                (+244) 935 956 349
              </a>
            </p>
            <p style={{ color: 'var(--color-cocoa-soft)', fontSize: '0.92rem', marginBottom: 6 }}>
              <strong>TikTok:</strong>{' '}
              <a href="https://www.tiktok.com/@lissandra_docestentacoes" target="_blank" rel="noreferrer" style={{ color: 'var(--color-rose-deep)' }}>
                @lissandra_docestentacoes
              </a>
            </p>
            <p style={{ color: 'var(--color-cocoa-soft)', fontSize: '0.92rem', marginBottom: 6 }}>
              <strong>E-mail:</strong>{' '}
              <a href="mailto:lissandradocestentacoes@hotmail.com" style={{ color: 'var(--color-rose-deep)' }}>
                lissandradocestentacoes@hotmail.com
              </a>
            </p>
            <p style={{ color: 'var(--color-cocoa-soft)', fontSize: '0.88rem', marginTop: 10 }}>
              🕒 Terça a Sábado: 12h às 19h (Sáb até 20h)
            </p>
          </div>
        </div>

        <div style={{ borderTop: '1px solid var(--color-border)', paddingTop: 20, textAlign: 'center' }}>
          <p style={{ margin: 0, fontSize: '0.85rem', color: 'var(--color-cocoa-soft)' }}>
            © {new Date().getFullYear()} Doces Tentações · Feito com amor e carinho. Todos os direitos reservados.
          </p>
        </div>
      </div>
    </footer>
  );
}
