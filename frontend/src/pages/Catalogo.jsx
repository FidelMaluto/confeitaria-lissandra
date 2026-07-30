import { useState } from 'react';
import { NavLink } from 'react-router-dom';

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
    id: 6,
    nome: 'Red Velvet',
    categoria: 'Bolos',
    descricao: 'Clássico red velvet com cream cheese e toque especial.',
    preco: 9500,
    imagem:
      'data:image/jpeg;base64,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',
  },
  {
    id: 7,
    nome: 'Cupcakes Variados',
    categoria: 'Cupcakes',
    descricao: 'Sabores variados para deixar seu dia mais doce.',
    preco: 2000,
    unidade: 'un.',
    imagem:
      'https://images.unsplash.com/photo-1587668178277-295251f900ce?auto=format&fit=crop&w=800&q=80',
  },
  {
    id: 8,
    nome: 'Kit Presente',
    categoria: 'Kits e Cestas',
    descricao: 'Seleção especial de doces para presentear com amor.',
    preco: 15000,
    imagem:
      'https://images.unsplash.com/photo-1549007994-cb92caebd54b?auto=format&fit=crop&w=800&q=80',
  },
];

const categorias = [
  'Todos',
  'Bolos',
  'Tortas',
  'Doces Finos',
  'Cupcakes',
  'Salgados',
  'Kits e Cestas',
];

export default function Catalogo() {
  const [categoriaAtiva, setCategoriaAtiva] = useState('Todos');
  const [pesquisa, setPesquisa] = useState('');

  const produtosFiltrados = produtos.filter((produto) => {
    const correspondeCategoria =
      categoriaAtiva === 'Todos' ||
      produto.categoria === categoriaAtiva;

    const correspondePesquisa = produto.nome
      .toLowerCase()
      .includes(pesquisa.toLowerCase());

    return correspondeCategoria && correspondePesquisa;
  });

  const formatarPreco = (preco) => {
    return new Intl.NumberFormat('pt-AO').format(preco);
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
          color: #4a3033;
        }

        .catalogo-page {
          min-height: 100vh;
          background: #fffaf7;
        }

        .catalogo-hero {
          position: relative;
          overflow: hidden;
          background: #fff0f0;
          min-height: 238px;
        }

        .hero-container {
          max-width: 1180px;
          min-height: 238px;
          margin: 0 auto;
          padding: 35px 24px;

          display: flex;
          align-items: center;
          justify-content: space-between;
        }

        .hero-content {
          max-width: 540px;
        }

        .hero-label {
          margin: 0 0 10px;
          color: #d99425;
          font-size: 0.75rem;
          font-weight: 800;
          letter-spacing: 2px;
          text-transform: uppercase;
        }

        .hero-title {
          margin: 0;
          color: #4b3033;
          font-family: Georgia, serif;
          font-size: clamp(2rem, 4vw, 3rem);
          line-height: 1.05;
        }

        .hero-description {
          max-width: 480px;
          margin: 15px 0 0;
          color: #795d61;
          font-size: 0.95rem;
          line-height: 1.6;
        }

        .hero-image {
          width: 185px;
          height: 185px;
          margin-right: 100px;
          border-radius: 50%;
          object-fit: cover;
          border: 10px solid rgba(255, 255, 255, 0.35);
          box-shadow: 0 10px 30px rgba(116, 65, 76, 0.12);
        }

        .scallop {
          position: absolute;
          left: 0;
          bottom: -1px;
          width: 100%;
          height: 15px;
          background:
            radial-gradient(
              circle at 50% 0,
              transparent 10px,
              #fffaf7 11px
            ) 0 0 / 40px 20px repeat-x;
        }

        .catalogo-content {
          max-width: 1180px;
          margin: 0 auto;
          padding: 30px 24px 50px;
        }

        .catalogo-toolbar {
          display: flex;
          align-items: center;
          justify-content: space-between;
          gap: 20px;
          margin-bottom: 28px;
        }

        .categories {
          display: flex;
          flex-wrap: wrap;
          gap: 10px;
        }

        .category-button {
          padding: 10px 20px;
          border: 1px solid #eee1e2;
          border-radius: 25px;
          background: #fff;
          color: #6a5054;
          font-weight: 700;
          cursor: pointer;
          transition: 0.2s ease;
        }

        .category-button:hover {
          border-color: #e8899e;
          color: #d96882;
        }

        .category-button.active {
          border-color: #e4839a;
          background: #e4839a;
          color: #fff;
        }

        .sort-area {
          display: flex;
          align-items: center;
          gap: 10px;
          color: #80696d;
          font-size: 0.85rem;
          white-space: nowrap;
        }

        .sort-select {
          padding: 10px 14px;
          border: 1px solid #eee1e2;
          border-radius: 10px;
          background: #fff;
          color: #4a3033;
          outline: none;
        }

        .products-grid {
          display: grid;
          grid-template-columns: repeat(4, 1fr);
          gap: 24px;
        }

        .product-card {
          overflow: hidden;
          border: 1px solid #f0e5e4;
          border-radius: 12px;
          background: #fff;
          box-shadow: 0 5px 20px rgba(88, 54, 60, 0.06);
          transition: transform 0.2s ease, box-shadow 0.2s ease;
        }

        .product-card:hover {
          transform: translateY(-4px);
          box-shadow: 0 12px 28px rgba(88, 54, 60, 0.12);
        }

        .product-image {
          width: 100%;
          height: 190px;
          display: block;
          object-fit: cover;
        }

        .product-info {
          padding: 17px 14px 14px;
        }

        .product-name {
          margin: 0;
          color: #4b3033;
          font-family: Georgia, serif;
          font-size: 1rem;
        }

        .product-description {
          min-height: 42px;
          margin: 7px 0 14px;
          color: #8a7074;
          font-size: 0.78rem;
          line-height: 1.5;
        }

        .product-bottom {
          display: flex;
          align-items: center;
          justify-content: space-between;
          gap: 10px;
        }

        .product-price {
          color: #4b3033;
          font-size: 0.9rem;
          font-weight: 800;
        }

        .add-button {
          width: 32px;
          height: 32px;
          border: none;
          border-radius: 50%;
          background: #e98299;
          color: #fff;
          font-size: 1.2rem;
          line-height: 1;
          cursor: pointer;
          transition: 0.2s ease;
        }

        .add-button:hover {
          background: #d96882;
          transform: scale(1.08);
        }

        .empty-products {
          padding: 60px 20px;
          text-align: center;
          color: #80696d;
        }

        .pagination {
          display: flex;
          justify-content: center;
          gap: 8px;
          margin-top: 35px;
        }

        .page-button {
          width: 36px;
          height: 36px;
          border: 1px solid #eee1e2;
          border-radius: 9px;
          background: #fff;
          color: #6a5054;
          cursor: pointer;
        }

        .page-button.active {
          border-color: #e4839a;
          background: #e4839a;
          color: #fff;
        }

        .benefits {
          background: #fff0f0;
          border-top: 1px solid #f4dfe2;
          border-bottom: 1px solid #f4dfe2;
        }

        .benefits-container {
          max-width: 1180px;
          margin: 0 auto;
          padding: 28px 24px;

          display: grid;
          grid-template-columns: repeat(4, 1fr);
          gap: 25px;
        }

        .benefit {
          display: flex;
          align-items: center;
          gap: 12px;
        }

        .benefit-icon {
          width: 38px;
          height: 38px;
          display: grid;
          place-items: center;
          border: 2px solid #e8899e;
          border-radius: 50%;
          color: #df718b;
          font-size: 1.1rem;
        }

        .benefit-title {
          margin: 0 0 4px;
          color: #4b3033;
          font-size: 0.85rem;
          font-weight: 800;
        }

        .benefit-text {
          margin: 0;
          color: #8a7074;
          font-size: 0.75rem;
        }

        @media (max-width: 1100px) {
          .main-nav {
            gap: 15px;
          }

          .hero-image {
            margin-right: 30px;
          }

          .products-grid {
            grid-template-columns: repeat(3, 1fr);
          }
        }

        @media (max-width: 900px) {
          .header-container {
            flex-wrap: wrap;
            padding-top: 15px;
            padding-bottom: 15px;
          }

          .main-nav {
            order: 3;
            width: 100%;
            justify-content: center;
            overflow-x: auto;
          }

          .nav-link {
            padding: 10px 0;
          }

          .nav-link.active::after {
            bottom: 3px;
          }

          .header-actions {
            margin-left: auto;
          }

          .hero-image {
            width: 150px;
            height: 150px;
            margin-right: 0;
          }

          .products-grid {
            grid-template-columns: repeat(2, 1fr);
          }

          .benefits-container {
            grid-template-columns: repeat(2, 1fr);
          }
        }

        @media (max-width: 650px) {
          .header-container {
            justify-content: center;
          }

          .logo {
            width: 100%;
            text-align: center;
          }

          .header-actions {
            width: 100%;
            justify-content: center;
            flex-wrap: wrap;
          }

          .search-box {
            width: 100%;
          }

          .main-nav {
            justify-content: flex-start;
          }

          .hero-container {
            flex-direction: column;
            align-items: flex-start;
            padding-top: 40px;
            padding-bottom: 30px;
          }

          .hero-image {
            align-self: center;
            margin-top: 25px;
          }

          .catalogo-toolbar {
            flex-direction: column;
            align-items: flex-start;
          }

          .sort-area {
            width: 100%;
          }

          .sort-select {
            flex: 1;
          }

          .products-grid {
            grid-template-columns: 1fr;
          }

          .benefits-container {
            grid-template-columns: 1fr;
          }
        }

      `}</style>

      <div className="catalogo-page">

        <section className="catalogo-hero">
          <div className="hero-container">

            <div className="hero-content">
              <p className="hero-label">
                Nosso catálogo
              </p>

              <h1 className="hero-title">
                Tudo o que a gente
                <br />
                faz de melhor
              </h1>

              <p className="hero-description">
                Bolos, tortas, doces finos e muito mais,
                feitos com carinho para adoçar seus momentos.
              </p>
            </div>

            <img
              className="hero-image"
              src='.././images/logo.png'
              alt="Bolo de chocolate"
            />

          </div>

          <div className="scallop" />
        </section>

        <main className="catalogo-content">

          <div className="catalogo-toolbar">

            <div className="categories">
              {categorias.map((categoria) => (
                <button
                  key={categoria}
                  className={`category-button ${
                    categoriaAtiva === categoria ? 'active' : ''
                  }`}
                  onClick={() => setCategoriaAtiva(categoria)}
                >
                  {categoria}
                </button>
              ))}
            </div>

            <div className="sort-area">
              <span>Ordenar por:</span>

              <select className="sort-select">
                <option>Mais vendidos</option>
                <option>Menor preço</option>
                <option>Maior preço</option>
                <option>Mais recentes</option>
              </select>
            </div>

          </div>

          {produtosFiltrados.length > 0 ? (

            <div className="products-grid">

              {produtosFiltrados.map((produto) => (

                <article
                  className="product-card"
                  key={produto.id}
                >

                  <img
                    className="product-image"
                    src={produto.imagem}
                    alt={produto.nome}
                  />

                  <div className="product-info">

                    <h2 className="product-name">
                      {produto.nome}
                    </h2>

                    <p className="product-description">
                      {produto.descricao}
                    </p>

                    <div className="product-bottom">

                      <span className="product-price">
                        AOA {formatarPreco(produto.preco)}
                        {produto.unidade && ` / ${produto.unidade}`}
                      </span>

                      <button
                        className="add-button"
                        title="Adicionar ao carrinho"
                      >
                        +
                      </button>

                    </div>

                  </div>

                </article>

              ))}

            </div>

          ) : (

            <div className="empty-products">
              Nenhum produto encontrado nesta categoria.
            </div>

          )}

          <div className="pagination">
            <button className="page-button active">1</button>
            <button className="page-button">2</button>
            <button className="page-button">3</button>
            <button className="page-button">...</button>
            <button className="page-button">›</button>
          </div>

        </main>

        <section className="benefits">

          <div className="benefits-container">

            <div className="benefit">
              <div className="benefit-icon">🚚</div>
              <div>
                <p className="benefit-title">Entrega rápida</p>
                <p className="benefit-text">
                  Receba em casa com carinho
                </p>
              </div>
            </div>

            <div className="benefit">
              <div className="benefit-icon">✿</div>
              <div>
                <p className="benefit-title">Ingredientes selecionados</p>
                <p className="benefit-text">
                  Qualidade que você sente
                </p>
              </div>
            </div>

            <div className="benefit">
              <div className="benefit-icon">♡</div>
              <div>
                <p className="benefit-title">Feito com amor</p>
                <p className="benefit-text">
                  Cada detalhe importa
                </p>
              </div>
            </div>

            <div className="benefit">
              <div className="benefit-icon">◉</div>
              <div>
                <p className="benefit-title">Atendimento via WhatsApp</p>
                <p className="benefit-text">
                  Fale com a gente
                </p>
              </div>
            </div>

          </div>

        </section>

      </div>
    </>
  );
}