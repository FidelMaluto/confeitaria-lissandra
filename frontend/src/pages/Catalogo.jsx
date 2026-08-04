import { useState, useEffect } from 'react';
import { NavLink } from 'react-router-dom';
import { useCart } from "../context/CartContext.jsx";
import logo from "../images/logo.png";

const produtos = [
  {
    id: 1,
    nome: 'Bolo de Chocolate',
    categoria: 'Bolos',
    descricao: 'Massa fofinha com recheio cremoso e cobertura de brigadeiro.',
    preco: 8500,
    imagem:
      'https://images.unsplash.com/photo-1578985545062-69928b1d9587?auto=format&fit=crop&w=800&q=80',
  },
  {
    id: 2,
    nome: 'Bolo de Morango',
    categoria: 'Bolos',
    descricao: 'Massa branca com recheio de creme e morangos frescos.',
    preco: 9000,
    imagem:
      'https://images.unsplash.com/photo-1565958011703-44f9829ba187?auto=format&fit=crop&w=800&q=80',
  },
  {
    id: 3,
    nome: 'Bolo de Cenoura',
    categoria: 'Bolos',
    descricao: 'Massa de cenoura com deliciosa cobertura de chocolate.',
    preco: 7500,
    imagem:
      'https://images.unsplash.com/photo-1602351447937-745cb720612f?auto=format&fit=crop&w=800&q=80',
  },
  {
    id: 4,
    nome: 'Docinhos Finos',
    categoria: 'Doces Finos',
    descricao: 'Brigadeiro, beijinho, casadinho e muito mais.',
    preco: 2500,
    unidade: '10 un.',
    imagem:
      'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS71PMVOIF4NyewGytCg9rLmiYwAAKt20MaWxdRliHsPg&s=10',
  },
  {
    id: 5,
    nome: 'Torta de Limão',
    categoria: 'Tortas',
    descricao: 'Base crocante com creme de limão e merengue suíço.',
    preco: 7000,
    imagem:
      'https://images.unsplash.com/photo-1519915028121-7d3463d20b13?auto=format&fit=crop&w=800&q=80',
  },
  {
    created_at: '2026-01-15',
    sales: 80,
  },
  {
    id: 'p6',
    name: 'Red Velvet da Casa',
    slug: 'red-velvet-da-casa',
    categories: { name: 'Bolos', slug: 'bolos' },
    category_name: 'Bolos',
    description: 'Clássico red velvet aveludado com leve toque de baunilha e cobertura suave de cream cheese.',
    price: 9500,
    image_url:
      'https://images.unsplash.com/photo-1586788680434-30d324b2d46f?auto=format&fit=crop&w=800&q=80',
    created_at: '2026-01-18',
    sales: 110,
  },
  {
    id: 'p7',
    name: 'Cupcakes Decorados Variados',
    slug: 'cupcakes-decorados-variados',
    categories: { name: 'Cupcakes', slug: 'cupcakes' },
    category_name: 'Cupcakes',
    description: 'Cupcakes individuais recheados com ganache de chocolate e cobertura cremosa.',
    price: 2000,
    unidade: 'un.',
    image_url:
      'https://images.unsplash.com/photo-1587668178277-295251f900ce?auto=format&fit=crop&w=800&q=80',
    created_at: '2026-01-20',
    sales: 175,
  },
  {
    id: 'p8',
    name: 'Kit Cesta Festiva Luxo',
    slug: 'kit-cesta-festiva-luxo',
    categories: { name: 'Kits e Cestas', slug: 'kits-e-cestas' },
    category_name: 'Kits e Cestas',
    description: 'Seleção especial com 1 mini bolo, 6 docinhos finos, 2 cupcakes e cartão personalizado.',
    price: 15000,
    image_url:
      'https://images.unsplash.com/photo-1549007994-cb92caebd54b?auto=format&fit=crop&w=800&q=80',
    created_at: '2026-01-22',
    sales: 65,
  },
];

export default function Catalogo() {
  const { addItem } = useCart();
  const [categoriaAtiva, setCategoriaAtiva] = useState('Todos');
  const [ordenacao, setOrdenacao] = useState('mais-vendidos');
  const [pesquisa, setPesquisa] = useState('');
  const [produtos, setProdutos] = useState([]);
  const [categorias, setCategorias] = useState(['Todos']);
  const [loading, setLoading] = useState(true);
  const [mensagemSucesso, setMensagemSucesso] = useState('');

 useEffect(() => {
  setProdutos(produtos);

  const cats = [
    'Todos',
    ...new Set(
      produtos.map(
        (p) =>
          p.categories?.name ||
          p.category_name ||
          p.categoria ||
          'Outros'
      )
    ),
  ];

  setCategorias(cats);
  setLoading(false);
}, []);

  const handleAddToCart = (produto) => {
  addItem({
    id: produto.id,
    name: produto.name || produto.nome,
    price: produto.price || produto.preco,
    image_url: produto.image_url || produto.imagem,
  });

  setMensagemSucesso(
    `"${produto.name || produto.nome}" adicionado ao carrinho!`
  );

  setTimeout(() => {
    setMensagemSucesso('');
  }, 2500);
};

  const produtosFiltrados = produtos
    .filter((produto) => {
      const nomeCat = produto.categories?.name || produto.category_name || produto.categoria || '';
      const correspondeCategoria =
        categoriaAtiva === 'Todos' || nomeCat.toLowerCase() === categoriaAtiva.toLowerCase();

      const nomeProd = produto.name || produto.nome || '';
      const descProd = produto.description || produto.descricao || '';
      const correspondePesquisa =
        nomeProd.toLowerCase().includes(pesquisa.toLowerCase()) ||
        descProd.toLowerCase().includes(pesquisa.toLowerCase());

      return correspondeCategoria && correspondePesquisa;
    })
    .sort((a, b) => {
      const precoA = Number(a.price || a.preco || 0);
      const precoB = Number(b.price || b.preco || 0);
      const vendasA = Number(a.sales || a.vendas || 0);
      const vendasB = Number(b.sales || b.vendas || 0);
      const dataA = new Date(a.created_at || 0).getTime();
      const dataB = new Date(b.created_at || 0).getTime();

      if (ordenacao === 'menor-preco') return precoA - precoB;
      if (ordenacao === 'maior-preco') return precoB - precoA;
      if (ordenacao === 'recentes') return dataB - dataA;
      return vendasB - vendasA; // mais-vendidos default
    });

  const formatarPreco = (preco) => {
    return new Intl.NumberFormat('pt-AO', {
      minimumFractionDigits: 2,
      maximumFractionDigits: 2,
    }).format(Number(preco || 0));
  };

  return (
    <>
      <style>{`
        .catalogo-page {
          min-height: 100vh;
          background: var(--color-cream);
        }

        .catalogo-hero {
          position: relative;
          overflow: hidden;
          background: var(--color-blush);
          padding: 40px 0 50px;
        }

        .hero-container {
          max-width: 1140px;
          margin: 0 auto;
          padding: 0 24px;
          display: flex;
          align-items: center;
          justify-content: space-between;
          gap: 30px;
        }

        .hero-content {
          max-width: 580px;
        }

        .hero-label {
          margin: 0 0 10px;
          color: var(--color-gold);
          font-size: 0.78rem;
          font-weight: 800;
          letter-spacing: 2px;
          text-transform: uppercase;
        }

        .hero-title {
          margin: 0;
          color: var(--color-cocoa);
          font-family: var(--font-display);
          font-size: clamp(2.1rem, 4.5vw, 3.2rem);
          line-height: 1.1;
        }

        .hero-description {
          max-width: 480px;
          margin: 15px 0 0;
          color: var(--color-cocoa-soft);
          font-size: 1rem;
          line-height: 1.6;
        }

        .hero-image-wrapper {
          width: 170px;
          height: 170px;
          flex-shrink: 0;
          border-radius: 50%;
          overflow: hidden;
          border: 8px solid rgba(255, 255, 255, 0.6);
          box-shadow: var(--shadow-soft);
          background: radial-gradient(circle at 35% 30%, var(--color-baby-pink), var(--color-rose));
          display: flex;
          align-items: center;
          justify-content: center;
        }

        .hero-image {
          width: 100%;
          height: 100%;
          object-fit: cover;
        }

        .toast-notification {
          position: fixed;
          bottom: 24px;
          right: 24px;
          background: var(--color-rose-deep);
          color: white;
          padding: 14px 22px;
          border-radius: 999px;
          font-weight: 700;
          box-shadow: 0 10px 30px rgba(0,0,0,0.2);
          z-index: 9999;
          animation: slideUp 0.3s ease;
        }

        @keyframes slideUp {
          from { transform: translateY(100%); opacity: 0; }
          to { transform: translateY(0); opacity: 1; }
        }

        .catalogo-content {
          max-width: 1140px;
          margin: 0 auto;
          padding: 40px 24px 60px;
        }

        .search-row {
          margin-bottom: 24px;
        }

        .search-input {
          width: 100%;
          max-width: 400px;
          padding: 12px 18px;
          border-radius: 999px;
          border: 1.5px solid var(--color-border);
          font-size: 0.95rem;
          background: white;
          outline: none;
        }

        .search-input:focus {
          border-color: var(--color-rose);
          box-shadow: 0 0 0 3px rgba(226, 138, 156, 0.2);
        }

        .catalogo-toolbar {
          display: flex;
          align-items: center;
          justify-content: space-between;
          gap: 20px;
          margin-bottom: 32px;
          flex-wrap: wrap;
        }

        .categories {
          display: flex;
          flex-wrap: wrap;
          gap: 10px;
        }

        .category-button {
          padding: 10px 20px;
          border: 1px solid var(--color-border);
          border-radius: 25px;
          background: #fff;
          color: var(--color-cocoa-soft);
          font-weight: 700;
          font-size: 0.9rem;
          cursor: pointer;
          transition: all 0.2s ease;
        }

        .category-button:hover {
          border-color: var(--color-rose);
          color: var(--color-rose-deep);
        }

        .category-button.active {
          border-color: var(--color-rose);
          background: var(--color-rose);
          color: #fff;
        }

        .sort-area {
          display: flex;
          align-items: center;
          gap: 10px;
          color: var(--color-cocoa-soft);
          font-size: 0.9rem;
          font-weight: 700;
          white-space: nowrap;
        }

        .sort-select {
          padding: 10px 16px;
          border: 1.5px solid var(--color-border);
          border-radius: 12px;
          background: #fff;
          color: var(--color-cocoa);
          font-weight: 600;
          outline: none;
          cursor: pointer;
        }

        .products-grid {
          display: grid;
          grid-template-columns: repeat(auto-fill, minmax(250px, 1fr));
          gap: 24px;
        }

        .product-card {
          overflow: hidden;
          border: 1px solid var(--color-border);
          border-radius: var(--radius-md);
          background: #fff;
          box-shadow: var(--shadow-soft);
          display: flex;
          flex-direction: column;
          transition: transform 0.2s ease, box-shadow 0.2s ease;
        }

        .product-card:hover {
          transform: translateY(-4px);
          box-shadow: 0 12px 28px rgba(194, 95, 116, 0.18);
        }

        .product-image-link {
          display: block;
          width: 100%;
          aspect-ratio: 4 / 3;
          overflow: hidden;
          background: var(--color-blush);
        }

        .product-image {
          width: 100%;
          height: 100%;
          object-fit: cover;
          transition: transform 0.3s ease;
        }

        .product-card:hover .product-image {
          transform: scale(1.04);
        }

        .product-info {
          padding: 18px;
          display: flex;
          flex-direction: column;
          flex: 1;
        }

        .product-badge {
          margin-bottom: 8px;
          align-self: flex-start;
        }

        .product-name {
          margin: 0;
          color: var(--color-cocoa);
          font-family: var(--font-display);
          font-size: 1.1rem;
          line-height: 1.3;
        }

        .product-description {
          margin: 8px 0 16px;
          color: var(--color-cocoa-soft);
          font-size: 0.88rem;
          line-height: 1.5;
          flex: 1;
        }

        .product-bottom {
          display: flex;
          align-items: center;
          justify-content: space-between;
          gap: 12px;
          margin-top: auto;
        }

        .product-price {
          color: var(--color-rose-deep);
          font-size: 1.1rem;
          font-weight: 800;
        }

        .add-button {
          padding: 8px 16px;
          border: none;
          border-radius: 999px;
          background: var(--color-rose);
          color: #fff;
          font-weight: 700;
          font-size: 0.9rem;
          cursor: pointer;
          transition: background 0.2s ease, transform 0.15s ease;
          display: inline-flex;
          align-items: center;
          gap: 6px;
        }

        .add-button:hover {
          background: var(--color-rose-deep);
          transform: scale(1.03);
        }

        .empty-products {
          padding: 60px 20px;
          text-align: center;
          color: var(--color-cocoa-soft);
          font-size: 1.1rem;
          background: white;
          border-radius: var(--radius-md);
          border: 1px solid var(--color-border);
        }

        .benefits {
          background: var(--color-blush);
          border-top: 1px solid var(--color-border);
          padding: 40px 0;
        }

        .benefits-container {
          max-width: 1140px;
          margin: 0 auto;
          padding: 0 24px;
          display: grid;
          grid-template-columns: repeat(auto-fit, minmax(220px, 1fr));
          gap: 24px;
        }

        .benefit {
          display: flex;
          align-items: center;
          gap: 14px;
          background: white;
          padding: 16px 20px;
          border-radius: var(--radius-md);
          border: 1px solid var(--color-border);
        }

        .benefit-icon {
          width: 44px;
          height: 44px;
          display: grid;
          place-items: center;
          border: 2px solid var(--color-rose);
          border-radius: 50%;
          color: var(--color-rose-deep);
          font-size: 1.2rem;
          flex-shrink: 0;
        }

        .benefit-title {
          margin: 0 0 4px;
          color: var(--color-cocoa);
          font-size: 0.9rem;
          font-weight: 800;
        }

        .benefit-text {
          margin: 0;
          color: var(--color-cocoa-soft);
          font-size: 0.8rem;
        }

        @media (max-width: 900px) {
          .hero-container {
            flex-direction: column-reverse;
            text-align: center;
            padding-top: 20px;
          }

          .hero-content {
            margin: 0 auto;
          }

          .hero-description {
            margin: 15px auto 0;
          }

          .hero-image-wrapper {
            width: 140px;
            height: 140px;
          }

          .catalogo-toolbar {
            flex-direction: column;
            align-items: stretch;
          }

          .categories {
            justify-content: center;
          }

          .sort-area {
            justify-content: center;
            width: 100%;
          }

          .sort-select {
            flex: 1;
            max-width: 250px;
          }

          .search-input {
            max-width: 100%;
          }
        }

        @media (max-width: 600px) {
          .catalogo-content {
            padding: 24px 16px 40px;
          }

          .products-grid {
            grid-template-columns: 1fr;
          }

          .category-button {
            padding: 8px 16px;
            font-size: 0.85rem;
          }
        }
      `}</style>

      <div className="catalogo-page">
        {mensagemSucesso && (
          <div className="toast-notification">
            ✓ {mensagemSucesso}
          </div>
        )}

        <section className="catalogo-hero">
          <div className="hero-container">
            <div className="hero-content">
              <p className="hero-label">Nosso Catálogo</p>
              <h1 className="hero-title">
                Doces artesanais <br /> feitos especialmente para você
              </h1>
              <p className="hero-description">
                Bolos, tortas, doces finos e delícias preparadas do zero, todos os dias com ingredientes selecionados.
              </p>
            </div>

            <div className="hero-image-wrapper">
              <img className="hero-image" src={logo} alt="Confeitaria Logo" />
            </div>
          </div>
        </section>

        <main className="catalogo-content">
          <div className="search-row">
            <input
              type="text"
              className="search-input"
              placeholder="🔍 Buscar doce, bolo ou sobremesa..."
              value={pesquisa}
              onChange={(e) => setPesquisa(e.target.value)}
            />
          </div>

          <div className="catalogo-toolbar">
            <div className="categories">
              {categorias.map((cat) => (
                <button
                  key={cat}
                  className={`category-button ${
                    categoriaAtiva.toLowerCase() === cat.toLowerCase() ? 'active' : ''
                  }`}
                  onClick={() => setCategoriaAtiva(cat)}
                >
                  {cat}
                </button>
              ))}
            </div>

            <div className="sort-area">
              <label htmlFor="sort-select">Ordenar por:</label>
              <select
                id="sort-select"
                className="sort-select"
                value={ordenacao}
                onChange={(e) => setOrdenacao(e.target.value)}
              >
                <option value="mais-vendidos">Mais vendidos</option>
                <option value="menor-preco">Menor preço</option>
                <option value="maior-preco">Maior preço</option>
                <option value="recentes">Mais recentes</option>
              </select>
            </div>
          </div>

          {loading ? (
            <div className="empty-products">Carregando catálogo com carinho...</div>
          ) : produtosFiltrados.length > 0 ? (
            <div className="products-grid">
              {produtosFiltrados.map((produto) => {
                const prodName = produto.name || produto.nome;
                const prodPrice = produto.price || produto.preco;
                const prodDesc = produto.description || produto.descricao;
                const prodCategory = produto.categories?.name || produto.category_name || produto.categoria;
                const prodImage = produto.image_url || produto.imagem;
                const prodSlug = produto.slug || produto.id;

                return (
                  <article className="product-card" key={produto.id}>
                    <NavLink to={`/produto/${prodSlug}`} className="product-image-link">
                      <img
                        className="product-image"
                        src={prodImage}
                        alt={prodName}
                        loading="lazy"
                      />
                    </NavLink>

                    <div className="product-info">
                      {prodCategory && <span className="badge product-badge">{prodCategory}</span>}

                      <h2 className="product-name">
                        <a href={`/produto/${prodSlug}`}>{prodName}</a>
                      </h2>

                      <p className="product-description">{prodDesc}</p>

                      <div className="product-bottom">
                        <span className="product-price">
                          KZ$ {formatarPreco(prodPrice)}
                        </span>

                        <button
                          className="add-button"
                          title="Adicionar ao carrinho"
                          onClick={() => handleAddToCart(produto)}
                        >
                          + Adicionar
                        </button>
                      </div>
                    </div>
                  </article>
                );
              })}
            </div>
          ) : (
            <div className="empty-products">
              Nenhum doce encontrado com essa busca ou categoria.
            </div>
          )}
        </main>

        <section className="benefits">
          <div className="benefits-container">
            <div className="benefit">
              <div className="benefit-icon">🚚</div>
              <div>
                <p className="benefit-title">Entrega Rápida</p>
                <p className="benefit-text">Receba em casa com carinho</p>
              </div>
            </div>

            <div className="benefit">
              <div className="benefit-icon">✿</div>
              <div>
                <p className="benefit-title">Ingredientes Selecionados</p>
                <p className="benefit-text">Qualidade que você sente</p>
              </div>
            </div>

            <div className="benefit">
              <div className="benefit-icon">♡</div>
              <div>
                <p className="benefit-title">Feito com Amor</p>
                <p className="benefit-text">Cada detalhe importa</p>
              </div>
            </div>

            <div className="benefit">
              <div className="benefit-icon">💬</div>
              <div>
                <p className="benefit-title">Atendimento via WhatsApp</p>
                <p className="benefit-text">Fale com a gente</p>
              </div>
            </div>
          </div>
        </section>
      </div>
    </>
      {loading ? (
        <p>Carregando produtos...</p>
      ) : produtos.length === 0 ? (
        <p style={{ color: 'var(--color-cocoa-soft)' }}>Nenhum produto encontrado nesta categoria.</p>
      ) : (
        <div className="stagger-grid" style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(240px, 1fr))', gap: 24 }}>
          {produtos.map((p) => (
            <ProductCard key={p.id} product={p} />
          ))}
        </div>
      )}
    </div>
  );
}