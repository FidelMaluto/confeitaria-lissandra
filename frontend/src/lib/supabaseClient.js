import { createClient } from '@supabase/supabase-js';

const rawUrl = import.meta.env.VITE_SUPABASE_URL || '';
const rawKey = import.meta.env.VITE_SUPABASE_ANON_KEY || '';

const isValidUrl = rawUrl.startsWith('http://') || rawUrl.startsWith('https://');

const supabaseUrl = isValidUrl ? rawUrl : 'https://placeholder-project.supabase.co';
const supabaseAnonKey = rawKey || 'placeholder-anon-key';

if (!isValidUrl) {
  console.warn(
    '[aviso] VITE_SUPABASE_URL ou VITE_SUPABASE_ANON_KEY ausentes ou com placeholder. Configure no arquivo .env se for utilizar o banco do Supabase.'
  );
}

// Cliente público (anon key): respeita as políticas de RLS do banco.
export const supabase = createClient(supabaseUrl, supabaseAnonKey);

