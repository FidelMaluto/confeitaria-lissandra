# Doce Encanto — Site de Confeitaria

Loja completa com carrinho, pedidos e painel administrativo.

**Stack:** React (Vite) · Node.js + Express · PostgreSQL via Supabase (banco + autenticação)

## Estrutura do projeto

```
confeitaria-app/
├── database/
│   └── schema.sql        → rode isso no SQL Editor do Supabase
├── backend/               → API Node.js/Express
└── frontend/               → aplicação React
```

## Como a stack se conecta

- **Supabase** hospeda o banco PostgreSQL, cuida da autenticação (login/cadastro) e aplica
  regras de segurança (RLS) direto no banco.
- **Frontend (React)** fala diretamente com o Supabase Auth para login/cadastro, e com o
  **backend Node.js** para tudo que envolve produtos, categorias e pedidos.
- **Backend (Node.js)** usa a *service role key* do Supabase para gravar dados e valida quem
  pode fazer o quê (ex: só admin pode cadastrar produto; preço do pedido é recalculado no
  servidor, nunca confiando no valor enviado pelo navegador).

## Passo a passo

### 1. Criar o projeto no Supabase

1. Crie uma conta em [supabase.com](https://supabase.com) e um novo projeto.
2. Vá em **SQL Editor**, cole o conteúdo de `database/schema.sql` e execute.
   Isso cria as tabelas (`products`, `categories`, `orders`, `order_items`, `profiles`),
   as políticas de segurança (RLS) e alguns produtos de exemplo.
3. Em **Settings → API**, anote:
   - `Project URL`
   - `anon public` key
   - `service_role` key ( nunca exponha essa no frontend)

### 2. Criar o primeiro usuário administrador

Depois de cadastrar um usuário pelo site (`/cadastro`), vá no **SQL Editor** do Supabase e rode:

```sql
update public.profiles set role = 'admin' where id =
  (select id from auth.users where email = 'seu-email@exemplo.com');
```

Esse usuário passa a enxergar o link **Painel Admin** no menu.

### 3. Rodar o backend

```bash
cd backend
cp .env.example .env
# edite o .env com SUPABASE_URL e SUPABASE_SERVICE_ROLE_KEY
npm install
npm run dev
```

A API sobe em `http://localhost:3333`.

### 4. Rodar o frontend

```bash
cd frontend
cp .env.example .env
# edite o .env com VITE_SUPABASE_URL e VITE_SUPABASE_ANON_KEY
npm install
npm run dev
```

O site abre em `http://localhost:5173`.

## Funcionalidades

- Catálogo com filtro por categoria
- Página de produto com carrinho (persistido no navegador)
- Checkout com pedido de convidado (sem obrigar login) ou logado
- Login/cadastro de cliente (Supabase Auth)
- Painel admin: cadastro/edição/remoção de produtos, gestão de status de pedidos

## Paleta de cores

| Uso | Cor |
|---|---|
| Fundo (leite) | `#fff8f4` |
| Fundo secundário (rosa claro) | `#fbeaea` |
| Rosa bebê (cartões) | `#f6c9d2` |
| Rosa primário (botões) | `#e28a9c` |
| Rosa escuro (hover/ênfase) | `#c25f74` |
| Texto principal (chocolate) | `#4a3238` |
| Detalhe dourado | `#cf9d4f` |

## Próximos passos sugeridos

- Upload de imagens de produto via Supabase Storage (hoje é só uma URL)
- Notificação por e-mail/WhatsApp quando o status do pedido mudar
- Deploy: frontend na Vercel/Netlify, backend em Render/Railway, banco já fica no Supabase
