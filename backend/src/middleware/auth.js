const { supabaseAdmin } = require('../config/supabase');

/**
 * Lê o token Bearer enviado pelo frontend (sessão do Supabase Auth),
 * valida o usuário e anexa `req.user` e `req.profile`.
 * Não bloqueia a requisição caso não haja token (uso: pedidos de convidado).
 */
async function attachUser(req, _res, next) {
  try {
    const authHeader = req.headers.authorization || '';
    const token = authHeader.startsWith('Bearer ') ? authHeader.slice(7) : null;

    if (!token) {
      req.user = null;
      req.profile = null;
      return next();
    }

    const { data, error } = await supabaseAdmin.auth.getUser(token);
    if (error || !data?.user) {
      req.user = null;
      req.profile = null;
      return next();
    }

    req.user = data.user;

    const { data: profile } = await supabaseAdmin
      .from('profiles')
      .select('*')
      .eq('id', data.user.id)
      .single();

    req.profile = profile || null;
    next();
  } catch (err) {
    next(err);
  }
}

/** Exige um usuário autenticado */
function requireAuth(req, res, next) {
  if (!req.user) {
    return res.status(401).json({ error: 'Não autenticado. Faça login para continuar.' });
  }
  next();
}

/** Exige que o usuário autenticado tenha role = admin */
function requireAdmin(req, res, next) {
  if (!req.user || req.profile?.role !== 'admin') {
    return res.status(403).json({ error: 'Acesso restrito a administradores.' });
  }
  next();
}

module.exports = { attachUser, requireAuth, requireAdmin };
