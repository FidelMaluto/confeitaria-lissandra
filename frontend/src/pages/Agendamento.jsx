import { useState, useMemo } from 'react';
import { Link } from 'react-router-dom';

// Importa fotos reais dos projetos e eventos da confeitaria
import sobre1 from '../images/sobre1.jpeg';
import sobre2 from '../images/sobre2.jpeg';
import sobre5 from '../images/sobre5.jpeg';
import img7 from '../images/IMG-20260802-WA0007.jpg';
import img8 from '../images/IMG-20260802-WA0008.jpg';
import img11 from '../images/IMG-20260802-WA0011.jpg';

const EVENT_PROJECTS = [
  {
    id: 1,
    title: 'Mesa Escultural de Casamento Real',
    categoria: 'Casamento',
    local: 'Talatona, Luanda',
    img: sobre1,
    desc: 'Bolo de 3 andares com flores de açúcar artesanais, acompanhado por 300 doces finos e macarons gourmet.',
    tags: ['3 Andares', 'Flores Naturais', 'Ouro 24k'],
  },
  {
    id: 2,
    title: 'Celebração de Aniversário VIP',
    categoria: 'Aniversário',
    local: 'Miramar, Luanda',
    img: img8,
    desc: 'Design moderno espatulado com ganache aveludada, drip de chocolate nobre e brigadeiros belgas.',
    tags: ['Red Velvet', 'Pistache Siciliano', 'Personalizado'],
  },
  {
    id: 3,
    title: 'Lounge Corporativo & Coquetel',
    categoria: 'Corporativo',
    local: 'Centro de Luanda',
    img: sobre5,
    desc: 'Verrines contemporâneas, mini tortas e lembranças de alta confeitaria para recepção de executivos.',
    tags: ['Doces em Taça', 'Degustação', 'Até 250 Convidados'],
  },
  {
    id: 4,
    title: 'Bolo Artístico Red Velvet & Frutas',
    categoria: 'Aniversário',
    local: 'Nova Vida, Luanda',
    img: img11,
    desc: 'Equilíbrio sutil entre o frescor de frutas vermelhas silvestres e recheio sedoso de leite ninho.',
    tags: ['Frutas Frescas', 'Ninho Trufado', 'Design Floral'],
  },
];

const EVENT_TYPES = [
  { id: 'aniversario', title: 'Aniversário Inesquecível', icon: '🎂', desc: 'Bolos temáticos, doces finos e torre de macarons.' },
  { id: 'casamento', title: 'Casamento & Noivado', icon: '💍', desc: 'Bolo escultural de múltiplos andares e mesa de doces finos.' },
  { id: 'corporativo', title: 'Evento Corporativo VIP', icon: '🥂', desc: 'Coffee break gourmet e lembranças personalizadas com logo.' },
  { id: 'cha-bebe', title: 'Chá de Bebê / Revelação', icon: '👶', desc: 'Cores pastéis, recheios suaves e modelagem artística.' },
  { id: 'degustacao', title: 'Sessão de Degustação VIP', icon: '🍷', desc: 'Experiência sensorial privada para noivas e organizadores.' },
];

const TIME_SLOTS = [
  { id: '10:00', label: '10:00', periodo: 'Manhã' },
  { id: '11:30', label: '11:30', periodo: 'Manhã' },
  { id: '14:00', label: '14:00', periodo: 'Tarde' },
  { id: '15:30', label: '15:30', periodo: 'Tarde' },
  { id: '17:00', label: '17:00', periodo: 'Tarde' },
  { id: '18:30', label: '18:30', periodo: 'Noite' },
];

const LUANDA_LOCATIONS = [
  'Retirada no Atelier (Zango 0 / Condomínio Vida Pacífica)',
  'Entrega em Talatona',
  'Entrega em Miramar & Alvalade',
  'Entrega no Kilamba & Camama',
  'Entrega na Maianga & Maculusso',
  'Entrega no Morro Bento & Samba',
  'Outro endereço em Luanda (a combinar)',
];

export default function Agendamento() {
  const [currentDate, setCurrentDate] = useState(new Date());
  const [selectedDay, setSelectedDay] = useState(new Date().getDate() + 3);
  const [selectedTime, setSelectedTime] = useState('14:00');
  const [selectedEvent, setSelectedEvent] = useState(EVENT_TYPES[0]);
  const [guestsCount, setGuestsCount] = useState(30);
  const [location, setLocation] = useState(LUANDA_LOCATIONS[0]);
  const [observations, setObservations] = useState('');
  const [clientName, setClientName] = useState('');
  const [clientPhone, setClientPhone] = useState('');
  const [confirmed, setConfirmed] = useState(false);
  const [projectCategory, setProjectCategory] = useState('Todos');

  // Geração do calendário do mês atual
  const year = currentDate.getFullYear();
  const month = currentDate.getMonth();

  const monthNames = [
    'Janeiro', 'Fevereiro', 'Março', 'Abril', 'Maio', 'Junho',
    'Julho', 'Agosto', 'Setembro', 'Outubro', 'Novembro', 'Dezembro'
  ];

  const daysInMonth = new Date(year, month + 1, 0).getDate();
  const firstDayIndex = new Date(year, month, 1).getDay();

  const calendarDays = useMemo(() => {
    const days = [];
    for (let i = 0; i < firstDayIndex; i++) {
      days.push({ day: null, isCurrentMonth: false });
    }
    for (let d = 1; d <= daysInMonth; d++) {
      days.push({ day: d, isCurrentMonth: true });
    }
    return days;
  }, [year, month, daysInMonth, firstDayIndex]);

  const filteredProjects = useMemo(() => {
    if (projectCategory === 'Todos') return EVENT_PROJECTS;
    return EVENT_PROJECTS.filter((p) => p.categoria === projectCategory);
  }, [projectCategory]);

  function nextMonth() {
    setCurrentDate(new Date(year, month + 1, 1));
  }

  function prevMonth() {
    setCurrentDate(new Date(year, month - 1, 1));
  }

  function handleSendWhatsApp(e) {
    e.preventDefault();
    const dataFormatada = `${selectedDay} de ${monthNames[month]} de ${year}`;
    
    const msg = `👑 *SOLICITAÇÃO DE AGENDAMENTO VIP - LISSANDRA DOCES TENTAÇÕES*
👤 *Cliente:* ${clientName || 'Não informado'}
📞 *Contacto:* ${clientPhone || 'Não informado'}
📅 *Data Desejada:* ${dataFormatada}
⏰ *Horário:* ${selectedTime}
✨ *Tipo de Evento:* ${selectedEvent.title} (${selectedEvent.icon})
👥 *Estimativa de Convidados:* ${guestsCount} pessoas
📍 *Localização / Entrega:* ${location}
📝 *Observações / Tema:* ${observations || 'Nenhuma observação'}

Gostaria de confirmar a disponibilidade da data e agendar o atendimento!`;

    const url = `https://wa.me/244935956349?text=${encodeURIComponent(msg)}`;
    window.open(url, '_blank');
    setConfirmed(true);
  }

  return (
    <div className="agendamento-page-wrapper">
      {/* 1. Header Hero com Efeito Liquid Glass */}
      <section className="agendamento-hero-section">
        <div className="liquid-glass-orb orb-a" />
        <div className="liquid-glass-orb orb-b" />

        <div className="container text-center">
          <div className="liquid-glass-pill-badge">
            <span className="sparkle-gold">✦</span>
            <span>Atelier & Encomendas de Alta Gastronomia</span>
            <span className="atelier-vip-tag">Atendimento Exclusivo</span>
          </div>

          <h1 className="agendamento-main-title">
            Agendamento de <span className="text-gradient-gold">Encomendas & Eventos</span>
          </h1>
          <p className="agendamento-main-desc">
            Reserve sua data com antecedência para garantir criações exclusivas, consultoria de sabor
            e degustação privativa no nosso atelier em Luanda.
          </p>
        </div>
      </section>

      {/* 2. Showcase de Projetos & Cenários Reais de Celebração */}
      <section className="container event-showcase-section">
        <div className="event-showcase-card">
          <div className="showcase-card-top">
            <div className="showcase-card-titles">
              <span className="showcase-pill-badge">
                <span className="live-dot" /> Galeria de Eventos & Mesas de Doces
              </span>
              <h2 className="showcase-card-title">Conceitos & Cenários Exclusivos</h2>
              <p className="showcase-card-desc">
                Inspire-se em algumas de nossas mesas de casamento, aniversários e recepções
                conduzidas em Luanda.
              </p>
            </div>

            {/* Filtros de Categoria de Projeto */}
            <div className="project-category-filters">
              {['Todos', 'Casamento', 'Aniversário', 'Corporativo'].map((cat) => (
                <button
                  key={cat}
                  type="button"
                  className={`filter-tab-btn ${projectCategory === cat ? 'active' : ''}`}
                  onClick={() => setProjectCategory(cat)}
                >
                  {cat}
                </button>
              ))}
            </div>
          </div>

          {/* Grid de Projetos Reais */}
          <div className="projects-showcase-grid">
            {filteredProjects.map((project) => (
              <div key={project.id} className="project-showcase-item">
                <div className="project-image-wrap">
                  <img src={project.img} alt={project.title} className="project-img" />
                  <span className="project-badge-cat">{project.categoria}</span>
                </div>
                <div className="project-info-body">
                  <span className="project-location">
                    <i className="fa-solid fa-location-dot text-gold" /> {project.local}
                  </span>
                  <h4 className="project-item-title">{project.title}</h4>
                  <p className="project-item-desc">{project.desc}</p>
                  <div className="project-tags-row">
                    {project.tags.map((tag, i) => (
                      <span key={i} className="project-tag-pill">#{tag}</span>
                    ))}
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 3. Formulário & Calendário Interativo Liquid Glass */}
      <section className="container agendamento-content-grid">
        {/* LADO ESQUERDO: Calendário e Horários */}
        <div className="liquid-glass-card calendar-card">
          <div className="card-header-flex">
            <div>
              <span className="step-label">Passo 01</span>
              <h3 className="card-section-title">Escolha a Data & Horário</h3>
            </div>
            <div className="calendar-nav-controls">
              <button type="button" onClick={prevMonth} className="btn-cal-nav" aria-label="Mês anterior">
                <i className="fa-solid fa-chevron-left" />
              </button>
              <span className="current-month-display">
                {monthNames[month]} {year}
              </span>
              <button type="button" onClick={nextMonth} className="btn-cal-nav" aria-label="Próximo mês">
                <i className="fa-solid fa-chevron-right" />
              </button>
            </div>
          </div>

          {/* Grid de Dias da Semana */}
          <div className="calendar-weekdays-row">
            {['Dom', 'Seg', 'Ter', 'Qua', 'Qui', 'Sex', 'Sáb'].map((w, idx) => (
              <span key={idx} className="weekday-col">{w}</span>
            ))}
          </div>

          {/* Grid de Dias do Mês */}
          <div className="calendar-days-grid">
            {calendarDays.map((item, idx) => {
              if (!item.day) {
                return <div key={idx} className="cal-day-empty" />;
              }

              const isSelected = selectedDay === item.day;
              const isToday = item.day === new Date().getDate() && month === new Date().getMonth();

              return (
                <button
                  key={idx}
                  type="button"
                  className={`cal-day-btn ${isSelected ? 'selected' : ''} ${isToday ? 'today' : ''}`}
                  onClick={() => setSelectedDay(item.day)}
                >
                  <span className="day-number">{item.day}</span>
                  {isSelected && <span className="day-dot" />}
                </button>
              );
            })}
          </div>

          <div className="time-slots-section">
            <h4 className="time-slots-title">
              <i className="fa-regular fa-clock text-gold" /> Horários Disponíveis para Atendimento
            </h4>
            <div className="time-slots-grid">
              {TIME_SLOTS.map((slot) => (
                <button
                  key={slot.id}
                  type="button"
                  className={`time-slot-btn ${selectedTime === slot.id ? 'selected' : ''}`}
                  onClick={() => setSelectedTime(slot.id)}
                >
                  <span className="slot-time">{slot.label}</span>
                  <span className="slot-period">{slot.periodo}</span>
                </button>
              ))}
            </div>
          </div>
        </div>

        {/* LADO DIREITO: Detalhes do Evento & Confirmação */}
        <div className="liquid-glass-card details-card">
          <span className="step-label">Passo 02</span>
          <h3 className="card-section-title">Detalhes da Sua Celebração</h3>

          {/* Tipo de Evento */}
          <div className="form-group-block">
            <label className="input-group-label">Tipo de Ocasião</label>
            <div className="event-types-list">
              {EVENT_TYPES.map((ev) => (
                <div
                  key={ev.id}
                  className={`event-type-pill ${selectedEvent.id === ev.id ? 'active' : ''}`}
                  onClick={() => setSelectedEvent(ev)}
                >
                  <span className="event-pill-icon">{ev.icon}</span>
                  <div className="event-pill-text">
                    <strong>{ev.title}</strong>
                    <span>{ev.desc}</span>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Quantidade de Convidados */}
          <div className="form-group-block">
            <div className="slider-label-wrap">
              <label className="input-group-label">Estimativa de Convidados / Fatias</label>
              <strong className="guests-counter-badge">{guestsCount} Pessoas</strong>
            </div>
            <input
              type="range"
              min="10"
              max="250"
              step="5"
              value={guestsCount}
              onChange={(e) => setGuestsCount(Number(e.target.value))}
              className="liquid-range-slider"
            />
            <div className="slider-scale-points">
              <span>10 (Íntimo)</span>
              <span>100 (Médio)</span>
              <span>250+ (Grande Porte)</span>
            </div>
          </div>

          {/* Local de Entrega em Luanda */}
          <div className="form-group-block">
            <label className="input-group-label">Localização ou Retirada</label>
            <select
              value={location}
              onChange={(e) => setLocation(e.target.value)}
              className="liquid-select-input"
            >
              {LUANDA_LOCATIONS.map((loc, idx) => (
                <option key={idx} value={loc}>{loc}</option>
              ))}
            </select>
          </div>

          {/* Nome e Contacto */}
          <div className="form-two-cols">
            <div className="form-group-block">
              <label className="input-group-label">Seu Nome Completo</label>
              <input
                type="text"
                placeholder="Ex: Maria Fernandes"
                value={clientName}
                onChange={(e) => setClientName(e.target.value)}
                className="liquid-text-input"
                required
              />
            </div>

            <div className="form-group-block">
              <label className="input-group-label">Contacto WhatsApp</label>
              <input
                type="tel"
                placeholder="Ex: 935 956 349"
                value={clientPhone}
                onChange={(e) => setClientPhone(e.target.value)}
                className="liquid-text-input"
                required
              />
            </div>
          </div>

          {/* Observações */}
          <div className="form-group-block">
            <label className="input-group-label">Observações Especiais ou Tema da Festa</label>
            <textarea
              placeholder="Descreva detalhes como cores desejadas, restrições alimentares ou referências..."
              value={observations}
              onChange={(e) => setObservations(e.target.value)}
              rows={3}
              className="liquid-textarea-input"
            />
          </div>

          {/* Botão de Agendamento */}
          <button
            type="button"
            onClick={handleSendWhatsApp}
            className="btn btn-primary btn-shine w-full btn-schedule-submit"
          >
            <i className="fa-brands fa-whatsapp" style={{ fontSize: '1.2rem' }} />
            <span>Confirmar Agendamento no WhatsApp</span>
          </button>

          {confirmed && (
            <div className="confirmation-toast-banner fade-in">
              <i className="fa-solid fa-circle-check text-success" />
              <span>Pedido de agendamento enviado com sucesso! Nosso concierge responderá em instantes.</span>
            </div>
          )}
        </div>
      </section>
    </div>
  );
}
