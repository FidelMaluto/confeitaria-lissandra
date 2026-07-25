import ScallopDivider from './ScallopDivider';

export default function Footer() {
  return (
    <footer style={{ marginTop: 80 }}>
      <ScallopDivider color="var(--color-baby-pink)" />
      <div style={{ background: 'var(--color-baby-pink)', padding: '36px 24px' }}>
        <div
          className="container"
          style={{ display: 'flex', justifyContent: 'space-between', flexWrap: 'wrap', gap: 20 }}
        >
          <div>
            <h3 style={{ fontSize: '1.2rem' }}>Doce Encanto</h3>
            <p style={{ color: 'var(--color-cocoa-soft)', maxWidth: 320 }}>
              Bolos, doces finos e tortas feitos à mão, todos os dias, com ingredientes selecionados.
            </p>
          </div>
          <div>
            <p style={{ fontWeight: 700, marginBottom: 6 }}>Contato</p>
            <p style={{ color: 'var(--color-cocoa-soft)' }}>WhatsApp: (00) 00000-0000</p>
            <p style={{ color: 'var(--color-cocoa-soft)' }}>Seg a Sáb, 9h às 19h</p>
          </div>
        </div>
        <p style={{ textAlign: 'center', marginTop: 24, fontSize: '0.85rem', color: 'var(--color-cocoa-soft)' }}>
          © {new Date().getFullYear()} Doce Encanto. Feito com carinho.
        </p>
      </div>
    </footer>
  );
}
