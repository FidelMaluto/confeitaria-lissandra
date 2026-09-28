import { useState, useMemo, useEffect, useRef } from 'react';
import * as THREE from 'three';

const MASSAS = [
  {
    id: 'red-velvet',
    nome: 'Red Velvet Aveludado',
    desc: 'Massa aveludada com toque suave de cacau e cor rubi intensa.',
    colorHex: 0x8e1b2f,
    roughness: 0.6,
    preco: 4500,
  },
  {
    id: 'cacau-70',
    nome: 'Cacau Black 70% Belga',
    desc: 'Intensidade profunda de chocolate nobre com umidade irresistível.',
    colorHex: 0x2c1810,
    roughness: 0.5,
    preco: 5000,
  },
  {
    id: 'baunilha-bourbon',
    nome: 'Baunilha de Bourbon Real',
    desc: 'Pão de ló aerado e perfumado com favas naturais de baunilha.',
    colorHex: 0xe9d7b4,
    roughness: 0.7,
    preco: 3500,
  },
  {
    id: 'nozes-amendoas',
    nome: 'Nozes & Amêndoas Tostadas',
    desc: 'Textura rica e crocância suave com farinha de amêndoas puras.',
    colorHex: 0xd4b483,
    roughness: 0.8,
    preco: 5500,
  },
];

const RECHEIOS = [
  {
    id: 'ninho-frutas',
    nome: 'Ninho Trufado com Frutas Vermelhas',
    desc: 'Creme aveludado de leite ninho combinado com geleia artesanal de morangos e framboesas.',
    colorHex: 0xfcedea,
    roughness: 0.3,
    preco: 6000,
  },
  {
    id: 'pistache-siciliano',
    nome: 'Pistache Siciliano Puro',
    desc: 'Ganache nobre feita com pasta 100% pistache importado da Itália.',
    colorHex: 0x8da865,
    roughness: 0.4,
    preco: 8500,
  },
  {
    id: 'brigadeiro-54',
    nome: 'Brigadeiro Gourmet 54%',
    desc: 'Ponto perfeito de colher feito com chocolate nobre e manteiga extra.',
    colorHex: 0x3d1e15,
    roughness: 0.25,
    preco: 5000,
  },
  {
    id: 'caramelo-salgado',
    nome: 'Caramelo Salgado & Praliné',
    desc: 'Caramelo toffee com flor de sal e crocante de castanhas caramelizadas.',
    colorHex: 0xd89743,
    roughness: 0.2,
    preco: 6500,
  },
];

const COBERTURAS = [
  {
    id: 'chantininho-floral',
    nome: 'Chantininho Espatulado Sedoso',
    desc: 'Acabamento leve e suave que derrete na boca com textura impecável.',
    colorHex: 0xfaf4f0,
    metalness: 0.05,
    roughness: 0.5,
    topoIcon: '🌸',
    preco: 3000,
  },
  {
    id: 'ganache-espelhada',
    nome: 'Ganache Espelhada Dourada 24k',
    desc: 'Efeito vitrificado de alta confeitaria com acabamento metálico reluzente.',
    colorHex: 0xb38634,
    metalness: 0.75,
    roughness: 0.15,
    topoIcon: '✨',
    preco: 6000,
  },
  {
    id: 'drip-chocolate',
    nome: 'Drip Cake Chocolate & Macarons',
    desc: 'Gotas escorridas artesanais e coroação com mini macarons feitos no dia.',
    colorHex: 0x4a1f29,
    metalness: 0.2,
    roughness: 0.3,
    topoIcon: '🧁',
    preco: 5000,
  },
  {
    id: 'naked-rustico',
    nome: 'Naked Cake Rústico',
    desc: 'Estilo rústico chique revelando as camadas de massa e recheio.',
    isNaked: true,
    topoIcon: '🍓',
    preco: 2500,
  },
];

const EXTRAS = [
  { id: 'ouro-24k', nome: 'Folhas de Ouro 24k Comestíveis', preco: 4000, icon: '🌟' },
  { id: 'macarons', nome: 'Trio de Macarons Artesanais', preco: 3500, icon: '🍬' },
  { id: 'flores-naturais', nome: 'Arranjo de Flores Orgânicas', preco: 5000, icon: '🌺' },
  { id: 'placa-chocolate', nome: 'Placa com Nome em Chocolate Belga', preco: 2500, icon: '🍫' },
];

export default function CakeStudioVisualizer() {
  const mountRef = useRef(null);
  const [andares, setAndares] = useState(2);
  const [massaSel, setMassaSel] = useState(MASSAS[0]);
  const [recheioSel, setRecheioSel] = useState(RECHEIOS[0]);
  const [coberturaSel, setCoberturaSel] = useState(COBERTURAS[0]);
  const [extrasSel, setExtrasSel] = useState(['ouro-24k', 'macarons']);
  const [activeTab, setActiveTab] = useState('massa');
  const [isAutoRotate, setIsAutoRotate] = useState(true);

  // Referências para Three.js
  const sceneRef = useRef(null);
  const cakeGroupRef = useRef(null);
  const cameraRef = useRef(null);
  const goldParticlesRef = useRef([]);

  // Ângulos orbitais da Câmera (Theta = horizontal, Phi = vertical)
  const orbitRef = useRef({
    radius: 7.2,
    theta: 0,
    phi: Math.PI / 3.2, // Ângulo de visão elevado para maquete 3D
    target: new THREE.Vector3(0, 0.8, 0),
  });

  // Inicialização do Three.js com Orbit 3D Completo (Horizontal & Vertical)
  useEffect(() => {
    const container = mountRef.current;
    if (!container) return;

    const width = container.clientWidth || 440;
    const height = container.clientHeight || 500;

    // 1. Cena, Câmera e Renderizador
    const scene = new THREE.Scene();
    sceneRef.current = scene;

    const camera = new THREE.PerspectiveCamera(38, width / height, 0.1, 100);
    cameraRef.current = camera;

    function updateCameraPosition() {
      const { radius, theta, phi, target } = orbitRef.current;
      camera.position.x = target.x + radius * Math.sin(phi) * Math.sin(theta);
      camera.position.y = target.y + radius * Math.cos(phi);
      camera.position.z = target.z + radius * Math.sin(phi) * Math.cos(theta);
      camera.lookAt(target);
    }
    updateCameraPosition();

    const renderer = new THREE.WebGLRenderer({ antialias: true, alpha: true });
    renderer.setSize(width, height);
    renderer.setPixelRatio(Math.min(window.devicePixelRatio, 2));
    renderer.shadowMap.enabled = true;
    renderer.shadowMap.type = THREE.PCFSoftShadowMap;
    renderer.toneMapping = THREE.ACESFilmicToneMapping;
    renderer.toneMappingExposure = 1.15;

    container.innerHTML = '';
    container.appendChild(renderer.domElement);

    // 2. Luzes de Estúdio de Alta Gastronomia
    const ambientLight = new THREE.AmbientLight(0xfff5ea, 1.25);
    scene.add(ambientLight);

    const mainLight = new THREE.DirectionalLight(0xffffff, 2.3);
    mainLight.position.set(4, 9, 5);
    mainLight.castShadow = true;
    mainLight.shadow.mapSize.width = 1024;
    mainLight.shadow.mapSize.height = 1024;
    mainLight.shadow.bias = -0.0001;
    scene.add(mainLight);

    const fillLight = new THREE.DirectionalLight(0xf1e3e2, 0.9);
    fillLight.position.set(-5, 4, -3);
    scene.add(fillLight);

    const goldLight = new THREE.PointLight(0xd8c08a, 1.6, 12);
    goldLight.position.set(0, 4.5, 3);
    scene.add(goldLight);

    // 3. Grupo Principal do Bolo
    const cakeGroup = new THREE.Group();
    cakeGroupRef.current = cakeGroup;
    scene.add(cakeGroup);

    // 4. Prato de Porcelana e Pedestal Dourado
    const pedestalGroup = new THREE.Group();

    // Prato
    const plateGeo = new THREE.CylinderGeometry(2.35, 2.15, 0.1, 64);
    const plateMat = new THREE.MeshStandardMaterial({
      color: 0xffffff,
      roughness: 0.1,
      metalness: 0.05,
    });
    const plateMesh = new THREE.Mesh(plateGeo, plateMat);
    plateMesh.position.y = -0.05;
    plateMesh.receiveShadow = true;
    pedestalGroup.add(plateMesh);

    // Borda Dourada do Prato
    const goldRingGeo = new THREE.TorusGeometry(2.33, 0.045, 16, 64);
    const goldMat = new THREE.MeshStandardMaterial({
      color: 0xd8c08a,
      metalness: 0.88,
      roughness: 0.18,
    });
    const goldRingMesh = new THREE.Mesh(goldRingGeo, goldMat);
    goldRingMesh.rotation.x = Math.PI / 2;
    goldRingMesh.position.y = -0.02;
    pedestalGroup.add(goldRingMesh);

    // Haste do Pedestal
    const standGeo = new THREE.CylinderGeometry(0.65, 0.95, 0.5, 32);
    const standMesh = new THREE.Mesh(standGeo, goldMat);
    standMesh.position.y = -0.35;
    standMesh.castShadow = true;
    pedestalGroup.add(standMesh);

    const baseStandGeo = new THREE.CylinderGeometry(1.25, 1.35, 0.1, 32);
    const baseStandMesh = new THREE.Mesh(baseStandGeo, goldMat);
    baseStandMesh.position.y = -0.6;
    baseStandMesh.receiveShadow = true;
    pedestalGroup.add(baseStandMesh);

    cakeGroup.add(pedestalGroup);

    // 5. Partículas Douradas Flutuantes (Gold Dust)
    const goldParticles = [];
    const particleGeo = new THREE.SphereGeometry(0.035, 8, 8);
    for (let i = 0; i < 22; i++) {
      const pMesh = new THREE.Mesh(particleGeo, goldMat);
      pMesh.position.set(
        (Math.random() - 0.5) * 4.2,
        Math.random() * 3.5 + 0.2,
        (Math.random() - 0.5) * 4.2
      );
      scene.add(pMesh);
      goldParticles.push({
        mesh: pMesh,
        speedY: Math.random() * 0.005 + 0.002,
        initialY: pMesh.position.y,
      });
    }
    goldParticlesRef.current = goldParticles;

    // 6. Controle de Rotação Orbital Livre 360° (Horizontal + Vertical)
    let isDragging = false;
    let previousMousePosition = { x: 0, y: 0 };

    const handleMouseDown = (e) => {
      isDragging = true;
      previousMousePosition = { x: e.clientX, y: e.clientY };
    };

    const handleMouseMove = (e) => {
      if (!isDragging) return;
      const deltaX = e.clientX - previousMousePosition.x;
      const deltaY = e.clientY - previousMousePosition.y;

      // Atualiza ângulos orbitais
      orbitRef.current.theta -= deltaX * 0.008;
      // Clampa o ângulo vertical Phi (visão de cima até visão de baixo)
      orbitRef.current.phi = THREE.MathUtils.clamp(
        orbitRef.current.phi - deltaY * 0.006,
        0.15, // Visão quase 90° de cima para baixo
        Math.PI / 2 + 0.25 // Visão levemente de baixo para cima
      );

      updateCameraPosition();
      previousMousePosition = { x: e.clientX, y: e.clientY };
    };

    const handleMouseUp = () => {
      isDragging = false;
    };

    const domEl = renderer.domElement;
    domEl.addEventListener('mousedown', handleMouseDown);
    window.addEventListener('mousemove', handleMouseMove);
    window.addEventListener('mouseup', handleMouseUp);

    // Suporte ao Touch com Drag Vertical e Horizontal
    const handleTouchStart = (e) => {
      if (e.touches.length === 1) {
        isDragging = true;
        previousMousePosition = { x: e.touches[0].clientX, y: e.touches[0].clientY };
      }
    };
    const handleTouchMove = (e) => {
      if (!isDragging || e.touches.length !== 1) return;
      const deltaX = e.touches[0].clientX - previousMousePosition.x;
      const deltaY = e.touches[0].clientY - previousMousePosition.y;

      orbitRef.current.theta -= deltaX * 0.008;
      orbitRef.current.phi = THREE.MathUtils.clamp(
        orbitRef.current.phi - deltaY * 0.006,
        0.15,
        Math.PI / 2 + 0.25
      );

      updateCameraPosition();
      previousMousePosition = { x: e.touches[0].clientX, y: e.touches[0].clientY };
    };
    const handleTouchEnd = () => {
      isDragging = false;
    };

    domEl.addEventListener('touchstart', handleTouchStart, { passive: true });
    window.addEventListener('touchmove', handleTouchMove, { passive: true });
    window.addEventListener('touchend', handleTouchEnd);

    // 7. Loop de Animação estilo GSAP
    let animationFrameId;
    const clock = new THREE.Clock();

    const animate = () => {
      animationFrameId = requestAnimationFrame(animate);

      // Giro automático orbital se ativado
      if (isAutoRotate && !isDragging) {
        orbitRef.current.theta += 0.004;
        updateCameraPosition();
      }

      // Animação das partículas douradas
      goldParticlesRef.current.forEach((p) => {
        p.mesh.position.y += p.speedY;
        p.mesh.rotation.y += 0.02;
        if (p.mesh.position.y > p.initialY + 1.2) {
          p.mesh.position.y = p.initialY - 0.5;
        }
      });

      renderer.render(scene, camera);
    };

    animate();

    // Redimensionamento
    const handleResize = () => {
      if (!container) return;
      const w = container.clientWidth || 440;
      const h = container.clientHeight || 500;
      camera.aspect = w / h;
      camera.updateProjectionMatrix();
      renderer.setSize(w, h);
    };
    window.addEventListener('resize', handleResize);

    return () => {
      cancelAnimationFrame(animationFrameId);
      window.removeEventListener('resize', handleResize);
      domEl.removeEventListener('mousedown', handleMouseDown);
      window.removeEventListener('mousemove', handleMouseMove);
      window.removeEventListener('mouseup', handleMouseUp);
      domEl.removeEventListener('touchstart', handleTouchStart);
      window.removeEventListener('touchmove', handleTouchMove);
      window.removeEventListener('touchend', handleTouchEnd);
      if (container.contains(domEl)) {
        container.removeChild(domEl);
      }
    };
  }, [isAutoRotate]);

  // Atualizar a estrutura 3D do bolo dinamicamente
  useEffect(() => {
    const cakeGroup = cakeGroupRef.current;
    if (!cakeGroup) return;

    // Limpar andares antigos mantendo o pedestal
    while (cakeGroup.children.length > 1) {
      cakeGroup.remove(cakeGroup.children[1]);
    }

    const tiersData = [
      { radius: 1.8, height: 0.7, yPos: 0 },
      ...(andares >= 2 ? [{ radius: 1.35, height: 0.65, yPos: 0.75 }] : []),
      ...(andares >= 3 ? [{ radius: 0.95, height: 0.6, yPos: 1.45 }] : []),
    ];

    // Materiais
    const spongeMat = new THREE.MeshStandardMaterial({
      color: massaSel.colorHex,
      roughness: massaSel.roughness,
    });

    const fillingMat = new THREE.MeshStandardMaterial({
      color: recheioSel.colorHex,
      roughness: recheioSel.roughness,
    });

    let frostingMat;
    if (!coberturaSel.isNaked) {
      frostingMat = new THREE.MeshStandardMaterial({
        color: coberturaSel.colorHex,
        metalness: coberturaSel.metalness || 0.05,
        roughness: coberturaSel.roughness || 0.4,
      });
    }

    const goldMat = new THREE.MeshStandardMaterial({
      color: 0xd8c08a,
      metalness: 0.9,
      roughness: 0.15,
    });

    // Construir cada andar
    tiersData.forEach((tier) => {
      const tierGroup = new THREE.Group();

      if (coberturaSel.isNaked) {
        const sponge1 = new THREE.Mesh(
          new THREE.CylinderGeometry(tier.radius, tier.radius, tier.height * 0.42, 48),
          spongeMat
        );
        sponge1.position.y = tier.height * 0.21;
        sponge1.castShadow = true;
        sponge1.receiveShadow = true;
        tierGroup.add(sponge1);

        const fillMesh = new THREE.Mesh(
          new THREE.CylinderGeometry(tier.radius * 0.97, tier.radius * 0.97, tier.height * 0.16, 48),
          fillingMat
        );
        fillMesh.position.y = tier.height * 0.5;
        tierGroup.add(fillMesh);

        const sponge2 = new THREE.Mesh(
          new THREE.CylinderGeometry(tier.radius, tier.radius, tier.height * 0.42, 48),
          spongeMat
        );
        sponge2.position.y = tier.height * 0.79;
        sponge2.castShadow = true;
        sponge2.receiveShadow = true;
        tierGroup.add(sponge2);
      } else {
        const outerMesh = new THREE.Mesh(
          new THREE.CylinderGeometry(tier.radius, tier.radius, tier.height, 48),
          frostingMat
        );
        outerMesh.position.y = tier.height / 2;
        outerMesh.castShadow = true;
        outerMesh.receiveShadow = true;
        tierGroup.add(outerMesh);

        if (coberturaSel.id === 'drip-chocolate') {
          const dripRing = new THREE.Mesh(
            new THREE.TorusGeometry(tier.radius + 0.02, 0.04, 16, 48),
            new THREE.MeshStandardMaterial({ color: 0x2c1810, roughness: 0.2 })
          );
          dripRing.rotation.x = Math.PI / 2;
          dripRing.position.y = tier.height;
          tierGroup.add(dripRing);
        }
      }

      tierGroup.position.y = tier.yPos;
      cakeGroup.add(tierGroup);
    });

    // Decorações no Topo do Bolo
    const topY = tiersData[tiersData.length - 1].yPos + tiersData[tiersData.length - 1].height;
    const topRadius = tiersData[tiersData.length - 1].radius;

    const topperGroup = new THREE.Group();
    topperGroup.position.y = topY;

    if (extrasSel.includes('macarons')) {
      const macaronMat1 = new THREE.MeshStandardMaterial({ color: 0xe7c9cb, roughness: 0.4 });
      const macaronMat2 = new THREE.MeshStandardMaterial({ color: 0xcfdfb6, roughness: 0.4 });

      for (let i = 0; i < 3; i++) {
        const angle = (i * Math.PI * 2) / 3;
        const macaron = new THREE.Mesh(
          new THREE.SphereGeometry(0.18, 16, 16),
          i % 2 === 0 ? macaronMat1 : macaronMat2
        );
        macaron.scale.set(1, 0.6, 1);
        macaron.position.set(Math.cos(angle) * (topRadius * 0.5), 0.12, Math.sin(angle) * (topRadius * 0.5));
        macaron.castShadow = true;
        topperGroup.add(macaron);
      }
    }

    if (extrasSel.includes('ouro-24k')) {
      for (let i = 0; i < 6; i++) {
        const flake = new THREE.Mesh(new THREE.BoxGeometry(0.08, 0.01, 0.08), goldMat);
        flake.position.set((Math.random() - 0.5) * topRadius, 0.02, (Math.random() - 0.5) * topRadius);
        flake.rotation.set(Math.random(), Math.random(), Math.random());
        topperGroup.add(flake);
      }
    }

    cakeGroup.add(topperGroup);
  }, [andares, massaSel, recheioSel, coberturaSel, extrasSel]);

  function toggleExtra(id) {
    setExtrasSel((prev) =>
      prev.includes(id) ? prev.filter((item) => item !== id) : [...prev, id]
    );
  }

  // Preço total estimado
  const precoTotal = useMemo(() => {
    const baseAndar = andares === 1 ? 14000 : andares === 2 ? 22000 : 32000;
    const extraMassa = massaSel.preco * (andares * 0.8);
    const extraRecheio = recheioSel.preco * (andares * 0.8);
    const extraCobertura = coberturaSel.preco;
    const totalExtras = extrasSel.reduce((sum, extraId) => {
      const found = EXTRAS.find((e) => e.id === extraId);
      return sum + (found ? found.preco : 0);
    }, 0);

    return Math.round(baseAndar + extraMassa + extraRecheio + extraCobertura + totalExtras);
  }, [andares, massaSel, recheioSel, coberturaSel, extrasSel]);

  function gerarMensagemWhatsApp() {
    const nomesExtras = extrasSel
      .map((id) => EXTRAS.find((e) => e.id === id)?.nome)
      .filter(Boolean)
      .join(', ');

    const texto = `Olá Lissandra! Gostaria de encomendar um bolo exclusivo criado no Atelier 3D:
🎂 Formato: ${andares} Andar(es)
🍞 Massa: ${massaSel.nome}
🍯 Recheio: ${recheioSel.nome}
✨ Cobertura: ${coberturaSel.nome}
🌟 Acabamentos: ${nomesExtras || 'Nenhum extra'}
💰 Estimativa: KZ$ ${precoTotal.toLocaleString('pt-PT')}

Podem me confirmar a disponibilidade de data?`;

    const url = `https://wa.me/244923456789?text=${encodeURIComponent(texto)}`;
    window.open(url, '_blank');
  }

  return (
    <section className="cake-studio-section">
      <div className="container">
        {/* Cabeçalho da Seção */}
        <div className="cake-studio-header text-center">
          <span className="eyebrow" style={{ display: 'inline-flex', alignItems: 'center', gap: 6 }}>
            <span>✨</span> O Atelier de Alta Confeitaria
          </span>
          <h2 className="cake-studio-title">
            Personalize seu Bolo em <span className="text-gradient-gold">3D Interativo</span>
          </h2>
          <p className="cake-studio-subtitle">
            Explore a maquete tridimensional. Arraste para os lados, de cima para baixo ou de baixo
            para cima para visualizar todos os ângulos da sua criação.
          </p>
        </div>

        {/* Grid Principal */}
        <div className="cake-studio-grid">
          {/* LADO ESQUERDO: Canvas 3D Interativo */}
          <div className="cake-3d-stage">
            <div className="cake-stage-backdrop" />

            <div className="cake-floating-pill top-left">
              <span className="pill-dot" />
              <span>Visualizador 3D Realista</span>
            </div>

            <div className="cake-floating-pill top-right">
              <span>{coberturaSel.topoIcon} {coberturaSel.nome.split(' ')[0]}</span>
            </div>

            {/* Canvas WebGL de Alta Precisão */}
            <div
              ref={mountRef}
              style={{
                width: '100%',
                height: '430px',
                cursor: 'grab',
                position: 'relative',
                zIndex: 2,
              }}
            />

            {/* Dica visual de controle orbital */}
            <div className="cake-orbit-hint">
              <i className="fa-solid fa-arrows-up-down-left-right" />
              <span>Arraste em qualquer direção (360° & Tilt)</span>
            </div>

            {/* Controle de Giro */}
            <button
              type="button"
              className={`cake-rotate-btn ${isAutoRotate ? 'active' : ''}`}
              onClick={() => setIsAutoRotate(!isAutoRotate)}
              title="Alternar rotação automática 360°"
            >
              <i className="fa-solid fa-rotate" />
              <span>{isAutoRotate ? 'Pausar Rotação' : 'Girar 360°'}</span>
            </button>

            {/* Resumo Sensorial Inferior */}
            <div className="cake-sensory-summary">
              <div className="summary-col">
                <span className="summary-label">Massa Nobre</span>
                <strong className="summary-value">{massaSel.nome}</strong>
              </div>
              <div className="summary-divider" />
              <div className="summary-col">
                <span className="summary-label">Recheio Gourmet</span>
                <strong className="summary-value">{recheioSel.nome}</strong>
              </div>
            </div>
          </div>

          {/* LADO DIREITO: Painel de Controle de Personalização */}
          <div className="cake-controls-panel">
            {/* Seletor de Andares */}
            <div className="control-group">
              <label className="control-group-title">
                <span>01.</span> Escolha o Formato & Andares
              </label>
              <div className="tiers-button-group">
                {[
                  { num: 1, label: '1 Andar (15-20 fatias)' },
                  { num: 2, label: '2 Andares (35-45 fatias)' },
                  { num: 3, label: '3 Andares Real (70+ fatias)' },
                ].map((tier) => (
                  <button
                    key={tier.num}
                    type="button"
                    className={`tier-btn ${andares === tier.num ? 'selected' : ''}`}
                    onClick={() => setAndares(tier.num)}
                  >
                    <span className="tier-icon">🎂</span>
                    <span className="tier-text">{tier.label}</span>
                  </button>
                ))}
              </div>
            </div>

            {/* Abas de Personalização */}
            <div className="studio-tabs-nav">
              {[
                { id: 'massa', label: '🍞 Massa', count: massaSel.nome.split(' ')[0] },
                { id: 'recheio', label: '🍯 Recheio', count: recheioSel.nome.split(' ')[0] },
                { id: 'cobertura', label: '✨ Cobertura', count: coberturaSel.nome.split(' ')[0] },
                { id: 'extras', label: '🌟 Toques Finais', count: `${extrasSel.length} sel.` },
              ].map((tab) => (
                <button
                  key={tab.id}
                  type="button"
                  className={`studio-tab-btn ${activeTab === tab.id ? 'active' : ''}`}
                  onClick={() => setActiveTab(tab.id)}
                >
                  <span className="tab-title">{tab.label}</span>
                  <span className="tab-mini-preview">{tab.count}</span>
                </button>
              ))}
            </div>

            {/* Conteúdo da Aba Ativa */}
            <div className="studio-tab-content">
              {/* ABA MASSA */}
              {activeTab === 'massa' && (
                <div className="options-grid">
                  {MASSAS.map((m) => (
                    <div
                      key={m.id}
                      className={`option-card ${massaSel.id === m.id ? 'active' : ''}`}
                      onClick={() => setMassaSel(m)}
                    >
                      <div className="option-card-header">
                        <span className="color-swatch" style={{ backgroundColor: `#${m.colorHex.toString(16).padStart(6, '0')}` }} />
                        <h4 className="option-name">{m.nome}</h4>
                      </div>
                      <p className="option-desc">{m.desc}</p>
                      <div className="option-footer">
                        <span className="option-badge">+KZ$ {m.preco.toLocaleString()}</span>
                        {massaSel.id === m.id && <span className="option-check">✓ Selecionado</span>}
                      </div>
                    </div>
                  ))}
                </div>
              )}

              {/* ABA RECHEIO */}
              {activeTab === 'recheio' && (
                <div className="options-grid">
                  {RECHEIOS.map((r) => (
                    <div
                      key={r.id}
                      className={`option-card ${recheioSel.id === r.id ? 'active' : ''}`}
                      onClick={() => setRecheioSel(r)}
                    >
                      <div className="option-card-header">
                        <span className="color-swatch" style={{ backgroundColor: `#${r.colorHex.toString(16).padStart(6, '0')}` }} />
                        <h4 className="option-name">{r.nome}</h4>
                      </div>
                      <p className="option-desc">{r.desc}</p>
                      <div className="option-footer">
                        <span className="option-badge">+KZ$ {r.preco.toLocaleString()}</span>
                        {recheioSel.id === r.id && <span className="option-check">✓ Selecionado</span>}
                      </div>
                    </div>
                  ))}
                </div>
              )}

              {/* ABA COBERTURA */}
              {activeTab === 'cobertura' && (
                <div className="options-grid">
                  {COBERTURAS.map((c) => (
                    <div
                      key={c.id}
                      className={`option-card ${coberturaSel.id === c.id ? 'active' : ''}`}
                      onClick={() => setCoberturaSel(c)}
                    >
                      <div className="option-card-header">
                        <span className="option-icon-large">{c.topoIcon}</span>
                        <h4 className="option-name">{c.nome}</h4>
                      </div>
                      <p className="option-desc">{c.desc}</p>
                      <div className="option-footer">
                        <span className="option-badge">+KZ$ {c.preco.toLocaleString()}</span>
                        {coberturaSel.id === c.id && <span className="option-check">✓ Selecionado</span>}
                      </div>
                    </div>
                  ))}
                </div>
              )}

              {/* ABA EXTRAS */}
              {activeTab === 'extras' && (
                <div className="options-grid">
                  {EXTRAS.map((ex) => {
                    const isChecked = extrasSel.includes(ex.id);
                    return (
                      <div
                        key={ex.id}
                        className={`option-card ${isChecked ? 'active' : ''}`}
                        onClick={() => toggleExtra(ex.id)}
                      >
                        <div className="option-card-header">
                          <span className="option-icon-large">{ex.icon}</span>
                          <h4 className="option-name">{ex.nome}</h4>
                        </div>
                        <div className="option-footer">
                          <span className="option-badge">+KZ$ {ex.preco.toLocaleString()}</span>
                          <span className={`option-check ${isChecked ? 'active' : ''}`}>
                            {isChecked ? '✓ Incluso' : '+ Adicionar'}
                          </span>
                        </div>
                      </div>
                    );
                  })}
                </div>
              )}
            </div>

            {/* Resumo Final de Preço e Ação */}
            <div className="cake-order-action-card">
              <div className="price-container">
                <span className="price-tag-label">Investimento Estimado</span>
                <div className="price-number-wrapper">
                  <span className="price-currency">KZ$</span>
                  <span className="price-value">{precoTotal.toLocaleString('pt-PT')}</span>
                </div>
                <span className="price-note">*Inclui consultoria de design e embalagem protetora</span>
              </div>

              <button
                type="button"
                className="btn btn-primary btn-shine btn-order-wa"
                onClick={gerarMensagemWhatsApp}
              >
                <i className="fa-brands fa-whatsapp" style={{ fontSize: '1.25rem' }} />
                <span>Encomendar Criação no WhatsApp</span>
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
