import { Link } from 'react-router-dom';
import { useCart } from '../context/CartContext';

export default function ProductCard({ product }) {
  const { addItem } = useCart();

  return (
    <div className="card" style={{ overflow: 'hidden', display: 'flex', flexDirection: 'column' }}>
      <Link to={`/produto/${product.slug}`}>
        <div
          style={{
            aspectRatio: '4 / 3',
            background: product.image_url
              ? `url(${product.image_url}) center/cover`
              : 'linear-gradient(135deg, var(--color-baby-pink), var(--color-blush))',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            color: 'var(--color-rose-deep)',
            fontFamily: 'var(--font-display)',
          }}
        >
          {!product.image_url && '🧁'}
        </div>
      </Link>
      <div style={{ padding: 18, display: 'flex', flexDirection: 'column', gap: 8, flex: 1 }}>
        {product.categories?.name && <span className="badge">{product.categories.name}</span>}
        <Link to={`/produto/${product.slug}`}>
          <h3 style={{ fontSize: '1.1rem', margin: 0 }}>{product.name}</h3>
        </Link>
        <p style={{ color: 'var(--color-cocoa-soft)', fontSize: '0.9rem', flex: 1 }}>
          {product.description}
        </p>
        <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between' }}>
          <strong style={{ color: 'var(--color-rose-deep)', fontSize: '1.15rem' }}>
            R$ {Number(product.price).toFixed(2)}
          </strong>
          <button className="btn btn-primary" onClick={() => addItem(product)}>
            Adicionar
          </button>
        </div>
      </div>
    </div>
  );
}
