const express = require('express');
const cors = require('cors');
require('dotenv').config();

const { attachUser } = require('./middleware/auth');
const productsRoutes = require('./routes/products.routes');
const categoriesRoutes = require('./routes/categories.routes');
const ordersRoutes = require('./routes/orders.routes');

const app = express();

app.use(cors({ origin: process.env.FRONTEND_URL || '*' }));
app.use(express.json());
app.use(attachUser); // popula req.user / req.profile a partir do token Supabase, quando presente

app.get('/api/health', (_req, res) => res.json({ status: 'ok' }));

app.use('/api/products', productsRoutes);
app.use('/api/categories', categoriesRoutes);
app.use('/api/orders', ordersRoutes);

app.use((err, _req, res, _next) => {
  console.error(err);
  res.status(500).json({ error: 'Erro interno do servidor.' });
});

const PORT = process.env.PORT || 3333;
app.listen(PORT, () => {
  console.log(`🎂 API da confeitaria rodando em http://localhost:${PORT}`);
});
