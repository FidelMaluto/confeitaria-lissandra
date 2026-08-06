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
      <div className="container" style={{ padding: 60 }}>
        <p>{erro}</p>
        <Link to="/catalogo" className="btn btn-secondary">Voltar ao catálogo</Link>
      </div>
    );
  }

  if (!produto) return <p className="container" style={{ padding: 60 }}>Carregando...</p>;

  return (
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

      <div>
        {produto.categories?.name && <span className="badge">{produto.categories.name}</span>}
        <h1 style={{ marginTop: 12 }}>{produto.name}</h1>
        <p style={{ color: 'var(--color-cocoa-soft)', fontSize: '1.05rem' }}>{produto.description}</p>
        <p style={{ fontSize: '1.8rem', color: 'var(--color-rose-deep)', fontWeight: 700, margin: '20px 0' }}>
          KZ$ {Number(produto.price).toFixed(2)}
        </p>

        <div style={{ display: 'flex', alignItems: 'center', gap: 16, marginBottom: 24 }}>
          <div style={{ display: 'flex', alignItems: 'center', border: '1.5px solid var(--color-border)', borderRadius: 999 }}>
            <button className="btn btn-ghost" onClick={() => setQuantidade((q) => Math.max(1, q - 1))}>−</button>
            <span style={{ minWidth: 30, textAlign: 'center' }}>{quantidade}</span>
            <button className="btn btn-ghost" onClick={() => setQuantidade((q) => q + 1)}>+</button>
          </div>
          <button className="btn btn-primary" onClick={() => addItem(produto, quantidade)}>
            Adicionar ao carrinho
          </button>
        </div>

        <p style={{ fontSize: '0.85rem', color: 'var(--color-cocoa-soft)' }}>
          {produto.stock > 0 ? `Disponível para encomenda` : 'Sob encomenda — consulte o prazo'}
        </p>
      </div>
    </div>
  );
}
