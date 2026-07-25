import { createClient } from '@supabase/supabase-js';

const supabaseUrl = import.meta.env.VITE_SUPABASE_URL;
const supabaseAnonKey = import.meta.env.VITE_SUPABASE_ANON_KEY;

if (!supabaseUrl || !supabaseAnonKey) {
  console.warn(
    '[aviso] VITE_SUPABASE_URL ou VITE_SUPABASE_ANON_KEY não configurados. Copie frontend/.env.example para frontend/.env'
  );
}

// Cliente público (anon key): respeita as políticas de RLS do banco.
// Usado para autenticação e leitura direta de produtos/categorias.
export const supabase = createClient(supabaseUrl, supabaseAnonKey);
