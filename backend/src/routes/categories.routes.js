const express = require('express');
const { supabaseAdmin } = require('../config/supabase');
const { requireAdmin } = require('../middleware/auth');

const router = express.Router();

// GET /api/categories - lista todas as categorias (público)
router.get('/', async (_req, res) => {
  const { data, error } = await supabaseAdmin
    .from('categories')
    .select('*')
    .order('name');

  if (error) return res.status(500).json({ error: error.message });
  res.json(data);
});

// POST /api/categories - cria categoria (admin)
router.post('/', requireAdmin, async (req, res) => {
  const { name, slug } = req.body;
  if (!name || !slug) {
    return res.status(400).json({ error: 'name e slug são obrigatórios.' });
  }

  const { data, error } = await supabaseAdmin
    .from('categories')
    .insert({ name, slug })
    .select()
    .single();

  if (error) return res.status(400).json({ error: error.message });
  res.status(201).json(data);
});

// DELETE /api/categories/:id - remove categoria (admin)
router.delete('/:id', requireAdmin, async (req, res) => {
  const { error } = await supabaseAdmin
    .from('categories')
    .delete()
    .eq('id', req.params.id);

  if (error) return res.status(400).json({ error: error.message });
  res.status(204).send();
});

module.exports = router;
