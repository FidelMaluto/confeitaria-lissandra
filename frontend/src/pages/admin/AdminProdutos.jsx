import { useEffect, useState } from 'react';
import { api } from '../../lib/api';

const FORM_VAZIO = {
  id: null,
  name: '',
  slug: '',
  description: '',
  price: '',
  image_url: '',
  image_file: null,
  stock: 0,
  category_id: '',
  active: true,
};

export default function AdminProdutos() {
  const [produtos, setProdutos] = useState([]);
  const [categorias, setCategorias] = useState([]);
  const [form, setForm] = useState(FORM_VAZIO);
  const [editando, setEditando] = useState(false);
  const [erro, setErro] = useState(null);

  function carregar() {
    api.listAllProductsAdmin()
      .then(setProdutos)
      .catch((e) => setErro(e.message));

    api.listCategories()
      .then(setCategorias)
      .catch(() => {});
  }

  useEffect(carregar, []);

  function handleChange(e) {
    const { name, value, type, checked } = e.target;

    setForm((f) => ({
      ...f,
      [name]: type === 'checkbox' ? checked : value,
    }));
  }

  function handleImageChange(e) {
    const file = e.target.files[0];

    if (!file) return;

    // Verifica se é realmente uma imagem
    if (!file.type.startsWith('image/')) {
      setErro('Por favor, selecione um ficheiro de imagem válido.');
      return;
    }

    // Limite de 5 MB
    if (file.size > 5 * 1024 * 1024) {
      setErro('A imagem não pode ter mais de 5 MB.');
      return;
    }

    setErro(null);

    setForm((f) => ({
      ...f,
      image_file: file,
    }));
  }

  function gerarSlug(name) {
    return name
      .toLowerCase()
      .normalize('NFD')
      .replace(/[\u0300-\u036f]/g, '')
      .replace(/[^a-z0-9]+/g, '-')
      .replace(/(^-|-$)/g, '');
  }

  async function handleSubmit(e) {
    e.preventDefault();
    setErro(null);

    try {
      let imageUrl = form.image_url || null;

      // Se foi escolhida uma nova imagem,
      // faz o upload antes de criar/atualizar o produto.
      if (form.image_file) {
        imageUrl = await api.uploadProductImage(form.image_file);
      }

      const payload = {
        name: form.name,
        slug: form.slug || gerarSlug(form.name),
        description: form.description,
        price: Number(form.price),
        image_url: imageUrl,
        stock: Number(form.stock) || 0,
        category_id: form.category_id || null,
        active: form.active,
      };

      if (editando) {
        await api.updateProduct(form.id, payload);
      } else {
        await api.createProduct(payload);
      }

      setForm(FORM_VAZIO);
      setEditando(false);

      carregar();
    } catch (err) {
      setErro(err.message);
    }
  }

  function editar(produto) {
    setForm({
      id: produto.id,
      name: produto.name,
      slug: produto.slug,
      description: produto.description || '',
      price: produto.price,
      image_url: produto.image_url || '',
      image_file: null,
      stock: produto.stock,
      category_id: produto.category_id || '',
      active: produto.active,
    });

    setEditando(true);

    window.scrollTo({
      top: 0,
      behavior: 'smooth',
    });
  }

  async function excluir(id) {
    if (!confirm('Remover este produto permanentemente?')) return;

    try {
      await api.deleteProduct(id);
      carregar();
    } catch (err) {
      setErro(err.message);
    }
  }

  function cancelarEdicao() {
    setForm(FORM_VAZIO);
    setEditando(false);
    setErro(null);
  }

  return (
    <div className="container" style={{ padding: '48px 24px' }}>
      <h1>Produtos</h1>

      <form
        onSubmit={handleSubmit}
        className="card"
        style={{
          padding: 24,
          margin: '24px 0',
          display: 'grid',
          gridTemplateColumns: '1fr 1fr',
          gap: '0 20px',
        }}
      >
        <div className="field">
          <label>Nome</label>

          <input
            name="name"
            required
            value={form.name}
            onChange={handleChange}
          />
        </div>

        <div className="field">
          <label>Slug (URL)</label>

          <input
            name="slug"
            placeholder="gerado automaticamente"
            value={form.slug}
            onChange={handleChange}
          />
        </div>

        <div
          className="field"
          style={{ gridColumn: '1 / -1' }}
        >
          <label>Descrição</label>

          <textarea
            name="description"
            rows={2}
            value={form.description}
            onChange={handleChange}
          />
        </div>

        <div className="field">
          <label>Preço (KZ$)</label>

          <input
            name="price"
            type="number"
            min="0"
            step="0.01"
            required
            value={form.price}
            onChange={handleChange}
          />
        </div>

        <div className="field">
          <label>Estoque</label>

          <input
            name="stock"
            type="number"
            min="0"
            value={form.stock}
            onChange={handleChange}
          />
        </div>

        <div className="field">
          <label>Categoria</label>

          <select
            name="category_id"
            value={form.category_id}
            onChange={handleChange}
          >
            <option value="">Sem categoria</option>

            {categorias.map((c) => (
              <option key={c.id} value={c.id}>
                {c.name}
              </option>
            ))}
          </select>
        </div>

        {/* IMAGEM */}
        <div className="field">
          <label>Imagem do produto</label>

          <input
            type="file"
            name="image_file"
            accept="image/*"
            onChange={handleImageChange}
          />

          {form.image_file && (
            <p
              style={{
                marginTop: 8,
                fontSize: 14,
              }}
            >
              Imagem selecionada: <strong>{form.image_file.name}</strong>
            </p>
          )}

          {/* Pré-visualização da nova imagem */}
          {form.image_file && (
            <img
              src={URL.createObjectURL(form.image_file)}
              alt="Pré-visualização"
              style={{
                width: 120,
                height: 120,
                objectFit: 'cover',
                marginTop: 10,
                borderRadius: 8,
              }}
            />
          )}

          {/* Imagem atual durante edição */}
          {!form.image_file && form.image_url && (
            <div style={{ marginTop: 10 }}>
              <p
                style={{
                  fontSize: 13,
                  marginBottom: 6,
                }}
              >
                Imagem atual:
              </p>

              <img
                src={form.image_url}
                alt={form.name}
                style={{
                  width: 120,
                  height: 120,
                  objectFit: 'cover',
                  borderRadius: 8,
                }}
              />
            </div>
          )}
        </div>

        {/* STATUS */}
        <label
          style={{
            display: 'flex',
            alignItems: 'center',
            gap: 8,
            gridColumn: '1 / -1',
            marginBottom: 16,
          }}
        >
          <input
            type="checkbox"
            name="active"
            checked={form.active}
            onChange={handleChange}
          />

          Produto ativo (visível na loja)
        </label>

        {/* ERRO */}
        {erro && (
          <p
            style={{
              color: '#b23b3b',
              gridColumn: '1 / -1',
            }}
          >
            {erro}
          </p>
        )}

        {/* BOTÕES */}
        <div
          style={{
            gridColumn: '1 / -1',
            display: 'flex',
            gap: 12,
          }}
        >
          <button
            className="btn btn-primary"
            type="submit"
          >
            {editando
              ? 'Salvar alterações'
              : 'Adicionar produto'}
          </button>

          {editando && (
            <button
              type="button"
              className="btn btn-ghost"
              onClick={cancelarEdicao}
            >
              Cancelar
            </button>
          )}
        </div>
      </form>

      {/* LISTA DE PRODUTOS */}
      <table
        className="card"
        style={{ padding: 8 }}
      >
        <thead>
          <tr>
            <th>Nome</th>
            <th>Categoria</th>
            <th>Preço</th>
            <th>Estoque</th>
            <th>Status</th>
            <th></th>
          </tr>
        </thead>

        <tbody>
          {produtos.map((p) => (
            <tr key={p.id}>
              <td>{p.name}</td>

              <td>
                {p.categories?.name || '—'}
              </td>

              <td>
                KZ$ {Number(p.price).toFixed(2)}
              </td>

              <td>
                {p.stock}
              </td>

              <td>
                <span className="badge">
                  {p.active ? 'Ativo' : 'Inativo'}
                </span>
              </td>

              <td
                style={{
                  display: 'flex',
                  gap: 8,
                }}
              >
                <button
                  className="btn btn-ghost"
                  onClick={() => editar(p)}
                >
                  Editar
                </button>

                <button
                  className="btn btn-ghost"
                  onClick={() => excluir(p.id)}
                >
                  Excluir
                </button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}
