import ScallopDivider from './ScallopDivider';

export default function Footer() {
  return (
    <footer className='footer' style={{ marginTop: 80 }}>
      <ScallopDivider color="var(--color-baby-pink)" />
      <div style={{ background: 'var(--color-baby-pink)', padding: '20px 18px' }}>
        <div
          className="container"
          style={{ display: 'flex', justifyContent: 'space-between', flexWrap: 'wrap', gap: 20 }}
        >
          <div>
            <h3 style={{ fontSize: '1.2rem' }}>Doces Tentações</h3>
            <p style={{ color: 'var(--color-cocoa-soft)', maxWidth: 320 }}>
              Bolos, doces finos e tortas feitos à mão, todos os dias, com ingredientes selecionados.
            </p>
            <p style={{ color: 'var(--color-cocoa-soft)', maxWidth: 320 }}>
              Estamos localizados no Zango 0, condomínio vida pacífica, Zona 2 - Bloco 14.
            </p>
          </div>
          <div>
            <p style={{ fontWeight: 700, marginBottom: 6 }}>Contatos</p>
            <p style={{ color: 'var(--color-cocoa-soft)' }}>WhatsApp: (+244) 935-956-349</p>
            <p style={{ color: 'var(--color-cocoa-soft)' }}>TIkTok: Lissandra_docesTentações</p>
            <p style={{ color: 'var(--color-cocoa-soft)' }}>E-mail: lissandradocestentacoes@hotmail.com</p>
            <p style={{ color: 'var(--color-cocoa-soft)' }}>Seg a sáb, 12h às 19h</p>
          </div>
        </div>
        <p style={{ textAlign: 'center', marginTop: 10, fontSize: '0.85rem', color: 'var(--color-cocoa-soft)' }}>
          © {new Date().getFullYear()} Doces Tentações. Feito com carinho.
        </p>
      </div>
    </footer>
  );
}
