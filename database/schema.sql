-- ============================================================
-- SCHEMA - Confeitaria (Supabase / PostgreSQL)
-- Execute este arquivo no SQL Editor do seu projeto Supabase
-- ============================================================

create extension if not exists "pgcrypto";

-- ------------------------------------------------------------
-- PROFILES (estende auth.users do Supabase)
-- ------------------------------------------------------------
create table if not exists public.profiles (
  id uuid primary key references auth.users(id) on delete cascade,
  full_name text,
  phone text,
  role text not null default 'cliente' check (role in ('cliente','admin')),
  created_at timestamptz not null default now()
);

-- Cria o profile automaticamente quando um novo usuário se cadastra
create or replace function public.handle_new_user()
returns trigger as $$
begin
  insert into public.profiles (id, full_name, role)
  values (new.id, new.raw_user_meta_data->>'full_name', 'cliente');
  return new;
end;
$$ language plpgsql security definer;

drop trigger if exists on_auth_user_created on auth.users;
create trigger on_auth_user_created
  after insert on auth.users
  for each row execute function public.handle_new_user();

-- Função auxiliar para checar se o usuário logado é admin (evita recursão em RLS)
create or replace function public.is_admin()
returns boolean as $$
  select exists (
    select 1 from public.profiles
    where id = auth.uid() and role = 'admin'
  );
$$ language sql security definer stable;

-- ------------------------------------------------------------
-- CATEGORIES
-- ------------------------------------------------------------
create table if not exists public.categories (
  id uuid primary key default gen_random_uuid(),
  name text not null,
  slug text not null unique,
  created_at timestamptz not null default now()
);

-- ------------------------------------------------------------
-- PRODUCTS
-- ------------------------------------------------------------
create table if not exists public.products (
  id uuid primary key default gen_random_uuid(),
  category_id uuid references public.categories(id) on delete set null,
  name text not null,
  slug text not null unique,
  description text,
  price numeric(10,2) not null check (price >= 0),
  image_url text,
  stock int not null default 0,
  active boolean not null default true,
  created_at timestamptz not null default now(),
  updated_at timestamptz not null default now()
);

create or replace function public.set_updated_at()
returns trigger as $$
begin
  new.updated_at = now();
  return new;
end;
$$ language plpgsql;

drop trigger if exists products_set_updated_at on public.products;
create trigger products_set_updated_at
  before update on public.products
  for each row execute function public.set_updated_at();

-- ------------------------------------------------------------
-- ORDERS (pedidos)
-- ------------------------------------------------------------
create table if not exists public.orders (
  id uuid primary key default gen_random_uuid(),
  user_id uuid references auth.users(id) on delete set null,
  customer_name text not null,
  customer_phone text not null,
  customer_address text,
  status text not null default 'pendente'
    check (status in ('pendente','confirmado','em_preparo','pronto','entregue','cancelado')),
  payment_method text,
  notes text,
  total numeric(10,2) not null default 0,
  created_at timestamptz not null default now(),
  updated_at timestamptz not null default now()
);

drop trigger if exists orders_set_updated_at on public.orders;
create trigger orders_set_updated_at
  before update on public.orders
  for each row execute function public.set_updated_at();

-- ------------------------------------------------------------
-- ORDER ITEMS
-- ------------------------------------------------------------
create table if not exists public.order_items (
  id uuid primary key default gen_random_uuid(),
  order_id uuid not null references public.orders(id) on delete cascade,
  product_id uuid references public.products(id) on delete set null,
  product_name text not null,
  unit_price numeric(10,2) not null,
  quantity int not null check (quantity > 0),
  subtotal numeric(10,2) not null
);

-- ============================================================
-- ROW LEVEL SECURITY
-- ============================================================
alter table public.profiles enable row level security;
alter table public.categories enable row level security;
alter table public.products enable row level security;
alter table public.orders enable row level security;
alter table public.order_items enable row level security;

-- PROFILES
create policy "Usuário vê o próprio perfil" on public.profiles
  for select using (auth.uid() = id or public.is_admin());
create policy "Usuário atualiza o próprio perfil" on public.profiles
  for update using (auth.uid() = id);

-- CATEGORIES (leitura pública, escrita só admin)
create policy "Categorias visíveis a todos" on public.categories
  for select using (true);
create policy "Admin gerencia categorias" on public.categories
  for all using (public.is_admin()) with check (public.is_admin());

-- PRODUCTS (leitura pública de produtos ativos, escrita só admin)
create policy "Produtos ativos visíveis a todos" on public.products
  for select using (active = true or public.is_admin());
create policy "Admin gerencia produtos" on public.products
  for all using (public.is_admin()) with check (public.is_admin());

-- ORDERS
create policy "Cliente cria pedido" on public.orders
  for insert with check (auth.uid() = user_id or user_id is null);
create policy "Cliente vê os próprios pedidos" on public.orders
  for select using (auth.uid() = user_id or public.is_admin());
create policy "Admin atualiza pedidos" on public.orders
  for update using (public.is_admin());

-- ORDER ITEMS
create policy "Itens seguem o pedido (insert)" on public.order_items
  for insert with check (
    exists (
      select 1 from public.orders o
      where o.id = order_id and (o.user_id = auth.uid() or o.user_id is null)
    )
  );
create policy "Itens seguem o pedido (select)" on public.order_items
  for select using (
    public.is_admin() or exists (
      select 1 from public.orders o
      where o.id = order_id and o.user_id = auth.uid()
    )
  );

-- ============================================================
-- SEED (dados de exemplo)
-- ============================================================
insert into public.categories (name, slug) values
  ('Bolos', 'bolos'),
  ('Doces Finos', 'doces-finos'),
  ('Cupcakes', 'cupcakes'),
  ('Tortas', 'tortas')
on conflict (slug) do nothing;

insert into public.products (category_id, name, slug, description, price, image_url, stock)
select c.id, v.name, v.slug, v.description, v.price, v.image_url, v.stock
from (values
  ('Bolo Red Velvet', 'bolo-red-velvet', 'Camadas macias de red velvet com cream cheese.', 89.90, '', 10, 'bolos'),
  ('Bolo de Ninho com Morango', 'bolo-ninho-morango', 'Leite ninho, morangos frescos e chantilly.', 94.90, '', 8, 'bolos'),
  ('Brigadeiro Gourmet (cx c/ 12)', 'brigadeiro-gourmet-12', 'Caixa com 12 brigadeiros gourmet sortidos.', 39.90, '', 20, 'doces-finos'),
  ('Cupcake de Baunilha', 'cupcake-baunilha', 'Massa fofinha com buttercream rosa.', 8.90, '', 30, 'cupcakes'),
  ('Torta de Limão', 'torta-limao', 'Base crocante, creme de limão e merengue.', 69.90, '', 6, 'tortas')
) as v(name, slug, description, price, image_url, stock, cat_slug)
join public.categories c on c.slug = v.cat_slug
on conflict (slug) do nothing;
