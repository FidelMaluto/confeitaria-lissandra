import { useEffect, useState } from 'react';
import { api } from '../lib/api';
import ProductCard from '../components/ProductCard';

export default function Catalogo() {
  const [categorias, setCategorias] = useState([]);
  const [categoriaAtiva, setCategoriaAtiva] = useState(null);
  const [produtos, setProdutos] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    api.listCategories().then(setCategorias).catch(() => { });
  }, []);

  useEffect(() => {
    setLoading(true);
    api
      .listProducts(categoriaAtiva)
      .then(setProdutos)
      .catch(() => setProdutos([]))
      .finally(() => setLoading(false));
  }, [categoriaAtiva]);

  return (
    <div className="container" style={{ padding: '48px 24px' }}>
      <span className="eyebrow">Nosso catálogo</span>
      <h1 style={{ marginBottom: 24 }}>Tudo o que a gente faz de melhor</h1>

      <div style={{ display: 'flex', gap: 10, flexWrap: 'wrap', marginBottom: 32 }}>
        <button
          className="btn"
          onClick={() => setCategoriaAtiva(null)}
          style={{
            background: categoriaAtiva === null ? 'var(--color-rose)' : 'var(--color-white)',
            color: categoriaAtiva === null ? 'var(--color-white)' : 'var(--color-cocoa)',
            border: '1.5px solid var(--color-rose)',
          }}
        >
          Todos
        </button>
        {categorias.map((c) => (
          <button
            key={c.id}
            className="btn"
            onClick={() => setCategoriaAtiva(c.slug)}
            style={{
              background: categoriaAtiva === c.slug ? 'var(--color-rose)' : 'var(--color-white)',
              color: categoriaAtiva === c.slug ? 'var(--color-white)' : 'var(--color-cocoa)',
              border: '1.5px solid var(--color-rose)',
            }}
          >
            {c.name}
          </button>
        ))}
      </div>

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
