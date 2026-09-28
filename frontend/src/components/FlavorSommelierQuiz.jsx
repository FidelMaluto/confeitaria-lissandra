import { useState } from 'react';
import { Link } from 'react-router-dom';

const QUESTIONS = [
  {
    id: 1,
    titulo: 'Qual é a ocasião especial?',
    subtitulo: 'Cada celebração pede uma harmonia de texturas e presença única.',
    opcoes: [
      { id: 'aniversario', texto: 'Aniversário Inesquecível', icon: '🎂', desc: 'Presença marcante e sabor que encanta todas as idades.' },
      { id: 'casamento', texto: 'Casamento ou Noivado', icon: '💍', desc: 'Elegância escultural, refinamento e camadas sofisticadas.' },
      { id: 'cha-tarde', texto: 'Café da Tarde Gourmet', icon: '☕', desc: 'Doces delicados, tortas leves e frescor aromático.' },
      { id: 'presente', texto: 'Presente Surpresa VIP', icon: '🎁', desc: 'Embalagem de joalheria com seleção de doces finos.' },
    ],
  },
  {
    id: 2,
    titulo: 'Qual intensidade de sabor você mais aprecia?',
    subtitulo: 'Afinamos as notas doces ao seu paladar.',
    opcoes: [
      { id: 'chocolate', texto: 'Cacau Puro & Chocolate Belga', icon: '🍫', desc: 'Intenso, aveludado e rico em notas de chocolate nobre 70%.' },
      { id: 'frutas', texto: 'Frutas Vermelhas & Frescor Cítrico', icon: '🍓', desc: 'Equilíbrio sutil entre acidez natural e doçura perfumada.' },
      { id: 'pistache', texto: 'Pistache & Frutos Nobres', icon: '🌰', desc: 'Sofisticação aromática com castanhas e nozes selecionadas.' },
      { id: 'caramelo', texto: 'Caramelo Salgado & Toffee', icon: '🍯', desc: 'Contraste arrebatador com flor de sal e praliné crocante.' },
    ],
  },
];

const RECOMMENDATIONS = {
  'aniversario-chocolate': {
    titulo: 'Bolo Supreme Cacau 70% com Brigadeiro Belga',
    categoria: 'Bolo Escultural',
    desc: 'Três camadas de massa úmida de cacau nobre intercaladas com brigadeiro de colher e finalização com raspas puras.',
    harmonizacao: 'Perfeito com champanhe seco ou café arábica.',
    badge: '★ Mais Pedido para Festas',
    icon: '🎂',
    link: '/catalogo',
  },
  'aniversario-frutas': {
    titulo: 'Red Velvet Real com Mousse de Ninho & Frutas',
    categoria: 'Bolo de Festa',
    desc: 'Massa rubi aveludada com compota artesanal de morangos, amoras e mirtilos frescos.',
    harmonizacao: 'Combina com espumante rosé e tardes ensolaradas.',
    badge: '✦ Campeão de Elogios',
    icon: '🍓',
    link: '/catalogo',
  },
  'casamento-pistache': {
    titulo: 'Bolo Imperial de Pistache Siciliano & Flores',
    categoria: 'Edição de Casamento',
    desc: 'Ganache pura de pistache importado da Itália com cobertura espatulada em chantininho de seda.',
    harmonizacao: 'A escolha definitiva para celebrações inesquecíveis.',
    badge: '👑 Haute Confeitaria',
    icon: '✨',
    link: '/checkout',
  },
  default: {
    titulo: 'Box Degustação Lissandra Ouro',
    categoria: 'Seleção Especial',
    desc: 'Um conjunto de 12 doces finos com trufas douradas, mini macarons e verrines de alta gastronomia.',
    harmonizacao: 'Ideal para compartilhar e se apaixonar por cada criação.',
    badge: '🌟 Experiência Completa',
    icon: '🎁',
    link: '/catalogo',
  },
};

export default function FlavorSommelierQuiz() {
  const [step, setStep] = useState(0);
  const [answers, setAnswers] = useState({});
  const [result, setResult] = useState(null);

  function handleSelect(optionId) {
    const currentQ = QUESTIONS[step];
    const newAnswers = { ...answers, [currentQ.id]: optionId };
    setAnswers(newAnswers);

    if (step < QUESTIONS.length - 1) {
      setStep(step + 1);
    } else {
      // Calcular Recomendação
      const key = `${newAnswers[1]}-${newAnswers[2]}`;
      const rec = RECOMMENDATIONS[key] || RECOMMENDATIONS['aniversario-chocolate'] || RECOMMENDATIONS.default;
      setResult(rec);
    }
  }

  function resetQuiz() {
    setStep(0);
    setAnswers({});
    setResult(null);
  }

  return (
    <section className="sommelier-quiz-section">
      <div className="container">
        <div className="sommelier-container">
          <div className="sommelier-header text-center">
            <span className="eyebrow" style={{ color: 'var(--color-gold-deep)' }}>
              🍷 Sommelier de Doces
            </span>
            <h2 className="sommelier-title">
              Descubra seu <span className="text-gradient-gold">Momento Perfeito</span>
            </h2>
            <p className="sommelier-subtitle">
              Responda a 2 perguntas rápidas e nosso algoritmo de harmonização encontrará
              a criação ideal para o seu paladar e ocasião.
            </p>
          </div>

          {!result ? (
            <div className="quiz-card">
              {/* Barra de Progresso */}
              <div className="quiz-progress-bar">
                <div
                  className="quiz-progress-fill"
                  style={{ width: `${((step + 1) / QUESTIONS.length) * 100}%` }}
                />
              </div>

              <div className="quiz-step-counter">
                Passo {step + 1} de {QUESTIONS.length}
              </div>

              <h3 className="quiz-question-title">{QUESTIONS[step].titulo}</h3>
              <p className="quiz-question-subtitle">{QUESTIONS[step].subtitulo}</p>

              <div className="quiz-options-grid">
                {QUESTIONS[step].opcoes.map((opt) => (
                  <button
                    key={opt.id}
                    type="button"
                    className="quiz-option-btn"
                    onClick={() => handleSelect(opt.id)}
                  >
                    <span className="quiz-opt-icon">{opt.icon}</span>
                    <div className="quiz-opt-info">
                      <strong className="quiz-opt-title">{opt.texto}</strong>
                      <span className="quiz-opt-desc">{opt.desc}</span>
                    </div>
                  </button>
                ))}
              </div>
            </div>
          ) : (
            <div className="quiz-result-card fade-in">
              <span className="result-badge">{result.badge}</span>
              <div className="result-icon-hero">{result.icon}</div>
              <span className="result-category">{result.categoria}</span>
              <h3 className="result-title">{result.titulo}</h3>
              <p className="result-desc">{result.desc}</p>
              
              <div className="result-pairing-box">
                <i className="fa-solid fa-sparkles text-gold" />
                <span><strong>Harmonização recomendada:</strong> {result.harmonizacao}</span>
              </div>

              <div className="result-actions">
                <Link to={result.link} className="btn btn-primary btn-shine">
                  Explorar Criação
                </Link>
                <button type="button" className="btn btn-secondary" onClick={resetQuiz}>
                  Refazer Harmonização
                </button>
              </div>
            </div>
          )}
        </div>
      </div>
    </section>
  );
}
