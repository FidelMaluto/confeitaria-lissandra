import { useEffect, useState } from 'react';
import { useParams, Link } from 'react-router-dom';
import { api } from '../lib/api';
import { useCart } from '../context/CartContext';

export default function ProdutoDetalhe() {
  const { slug } = useParams();
  const [produto, setProduto] = useState(null);
  const [quantidade, setQuantidade] = useState(1);
  const [erro, setErro] = useState(null);
  const { addItem } = useCart();

  useEffect(() => {
    api.getProduct(slug).then(setProduto).catch(() => setErro('Produto não encontrado.'));
  }, [slug]);

  if (erro) {
    return (
      <div className="container" style={{ padding: '60px 24px', textAlign: 'center' }}>
        <h2>{erro}</h2>
        <p style={{ color: 'var(--color-cocoa-soft)', marginBottom: 20 }}>
          O produto que você procurou não foi encontrado ou está indisponível.
        </p>
        <Link to="/catalogo" className="btn btn-secondary">Voltar ao catálogo</Link>
      </div>
    );
  }

  if (!produto) return <p className="container" style={{ padding: 60, textAlign: 'center' }}>Carregando produto...</p>;

  return (
    <>
      <style>{`
        .product-detail-container {
          padding: 48px 24px;
          display: grid;
          grid-template-columns: 1fr 1fr;
          gap: 48px;
          align-items: start;
        }
    <div className="container produto-grid fade-in-up" style={{ padding: '48px 24px', display: 'grid', gridTemplateColumns: '1fr 1fr', gap: 48 }}>
      <div
        style={{
          aspectRatio: '1',
          borderRadius: 'var(--radius-lg)',
          background: produto.image_url
            ? `url(${produto.image_url}) center/cover`
            : 'linear-gradient(135deg, var(--color-baby-pink), var(--color-blush))',
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
          fontSize: '5rem',
        }}
      >
        {!produto.image_url && '🍰'}
      </div>

        .product-detail-image-wrapper {
          width: 100%;
          aspect-ratio: 1;
          border-radius: var(--radius-lg);
          overflow: hidden;
          background: var(--color-blush);
          display: flex;
          align-items: center;
          justify-content: center;
          box-shadow: var(--shadow-soft);
          border: 1px solid var(--color-border);
        }

        .product-detail-img {
          width: 100%;
          height: 100%;
          object-fit: cover;
        }

        @media (max-width: 768px) {
          .product-detail-container {
            padding: 24px 16px;
            grid-template-columns: 1fr;
            gap: 24px;
          }
        }
      `}</style>

      <div className="container product-detail-container">
        <div className="product-detail-image-wrapper">
          {produto.image_url ? (
            <img className="product-detail-img" src={produto.image_url} alt={produto.name} />
          ) : (
            <span style={{ fontSize: '5rem' }}>🍰</span>
          )}
        </div>

        <div>
          {produto.categories?.name && <span className="badge">{produto.categories.name}</span>}
          <h1 style={{ marginTop: 12 }}>{produto.name}</h1>
          <p style={{ color: 'var(--color-cocoa-soft)', fontSize: '1.05rem', lineHeight: 1.6 }}>{produto.description}</p>
          <p style={{ fontSize: '1.8rem', color: 'var(--color-rose-deep)', fontWeight: 800, margin: '20px 0' }}>
            KZ$ {Number(produto.price).toFixed(2)}
          </p>

          <div style={{ display: 'flex', alignItems: 'center', flexWrap: 'wrap', gap: 16, marginBottom: 24 }}>
            <div style={{ display: 'flex', alignItems: 'center', border: '1.5px solid var(--color-border)', borderRadius: 999, background: 'white' }}>
              <button className="btn btn-ghost" onClick={() => setQuantidade((q) => Math.max(1, q - 1))}>−</button>
              <span style={{ minWidth: 32, textAlign: 'center', fontWeight: 700 }}>{quantidade}</span>
              <button className="btn btn-ghost" onClick={() => setQuantidade((q) => q + 1)}>+</button>
            </div>
            <button className="btn btn-primary" onClick={() => addItem(produto, quantidade)}>
              Adicionar ao carrinho
            </button>
          </div>

          <p style={{ fontSize: '0.88rem', color: 'var(--color-cocoa-soft)' }}>
            {produto.stock > 0 ? `✓ Disponível para encomenda` : 'Sob encomenda — consulte o prazo via WhatsApp'}
          </p>
        </div>
      </div>
    </>
  );
}
