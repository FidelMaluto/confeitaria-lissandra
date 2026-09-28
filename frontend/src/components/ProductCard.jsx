import { useState } from 'react';
import { Link } from 'react-router-dom';
import { useCart } from '../context/CartContext';

export default function ProductCard({ product }) {
  const { addItem } = useCart();
  const [addedAnimation, setAddedAnimation] = useState(false);

  function handleAddToCart(e) {
    e.preventDefault();
    e.stopPropagation();
    addItem(product);
    setAddedAnimation(true);
    setTimeout(() => setAddedAnimation(false), 1200);
  }

  return (
    <div className="product-card-luxury">
      <Link to={`/produto/${product.slug}`} className="product-card-image-wrap">
        <div
          className="product-card-image"
          style={{
            backgroundImage: product.image_url ? `url(${product.image_url})` : undefined,
          }}
        >
          {!product.image_url && (
            <div className="product-placeholder-icon">
              <span>🎂</span>
            </div>
          )}
        </div>

        <div className="product-image-overlay" />

        {product.categories?.name && (
          <span className="product-category-tag">
            {product.categories.name}
          </span>
        )}

        <span className="product-quick-view-badge">
          <span>Ver Detalhes</span>
          <i className="fa-solid fa-arrow-right" />
        </span>
      </Link>

      <div className="product-card-content">
        <div className="product-card-meta">
          <span className="product-rating-stars">
            ★★★★★ <span className="product-rating-num">(4.9)</span>
          </span>
        </div>

        <Link to={`/produto/${product.slug}`}>
          <h3 className="product-card-name">{product.name}</h3>
        </Link>

        <p className="product-card-desc">
          {product.description || 'Elaborado artesanalmente com ingredientes selecionados e técnicas de alta gastronomia.'}
        </p>

        <div className="product-card-footer">
          <div className="product-price-block">
            <span className="product-price-currency">KZ$</span>
            <strong className="product-price-amount">
              {Number(product.price).toLocaleString('pt-PT', {
                minimumFractionDigits: 2,
                maximumFractionDigits: 2,
              })}
            </strong>
          </div>

          <button
            type="button"
            className={`btn-add-cart-luxury ${addedAnimation ? 'added' : ''}`}
            onClick={handleAddToCart}
            title="Adicionar ao Carrinho"
          >
            {addedAnimation ? (
              <>
                <i className="fa-solid fa-check" />
                <span>Adicionado!</span>
              </>
            ) : (
              <>
                <i className="fa-solid fa-bag-shopping" />
                <span>Adicionar</span>
              </>
            )}
          </button>
        </div>
      </div>
    </div>
  );
}
