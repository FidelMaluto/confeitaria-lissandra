const { createClient } = require('@supabase/supabase-js');
require('dotenv').config();

if (!process.env.SUPABASE_URL || !process.env.SUPABASE_SERVICE_ROLE_KEY) {
  console.warn(
    '[aviso] SUPABASE_URL ou SUPABASE_SERVICE_ROLE_KEY não configurados. Copie backend/.env.example para backend/.env e preencha os valores.'
  );
}

// Cliente com a service_role key: usado só no backend, nunca no frontend.
// Ele ignora as políticas de RLS, então toda regra de permissão (ex: "só admin")
// precisa ser validada manualmente nas rotas (ver middleware/auth.js).
const supabaseAdmin = createClient(
  process.env.SUPABASE_URL,
  process.env.SUPABASE_SERVICE_ROLE_KEY,
  { auth: { autoRefreshToken: false, persistSession: false } }
);

module.exports = { supabaseAdmin };
