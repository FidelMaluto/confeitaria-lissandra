export default function LuxuryMarquee() {
  const items = [
    '✦ 100% Manteiga Pura & Cacau Belga',
    '★ Receitas de Família & Técnicas Francesas',
    '✦ Bolos Esculturais Sob Encomenda',
    '★ Entregas Especiais em Toda Luanda',
    '✦ Ingredientes Frescos & Selecionados',
    '★ Decorações Feitas à Mão',
    '✦ Mais de 5.000 Celebrações Adoçadas',
    '★ Degustações Exclusivas',
  ];

  return (
    <div className="luxury-marquee-container" aria-hidden="true">
      <div className="luxury-marquee-track">
        {items.concat(items).map((item, index) => (
          <div key={index} className="luxury-marquee-item">
            <span>{item}</span>
          </div>
        ))}
      </div>
    </div>
  );
}
