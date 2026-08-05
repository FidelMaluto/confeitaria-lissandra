import { Routes, Route } from 'react-router-dom';
import Header from './components/Header';
import Footer from './components/Footer';
import { RequireAuth, RequireAdmin } from './components/ProtectedRoute';

import Home from './pages/Home';
import Catalogo from './pages/Catalogo';
import Contatos from './pages/Contatos';
import ProdutoDetalhe from './pages/ProdutoDetalhe';
import Carrinho from './pages/Carrinho';
import Checkout from './pages/Checkout';
import Login from './pages/Login';
import Cadastro from './pages/Cadastro';
import MeusPedidos from './pages/MeusPedidos';

import AdminDashboard from './pages/admin/AdminDashboard';
import AdminProdutos from './pages/admin/AdminProdutos';
import AdminPedidos from './pages/admin/AdminPedidos';
import Sobre from './pages/Sobre';

export default function App() {
  return (
    <div style={{ display: 'flex', flexDirection: 'column', minHeight: '100vh' }}>
      <Header />
      <main style={{ flex: 1 }}>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/catalogo" element={<Catalogo />} />
          <Route path="/contatos" element={<Contatos />} />
          <Route path="/sobre" element={<Sobre />} />
          <Route path="/produto/:slug" element={<ProdutoDetalhe />} />
          <Route path="/carrinho" element={<Carrinho />} />
          <Route path="/checkout" element={<Checkout />} />
          <Route path="/login" element={<Login />} />
          <Route path="/cadastro" element={<Cadastro />} />
          <Route
            path="/meus-pedidos"
            element={
              <RequireAuth>
                <MeusPedidos />
              </RequireAuth>
            }
          />

          <Route
            path="/admin"
            element={
              <RequireAdmin>
                <AdminDashboard />
              </RequireAdmin>
            }
          />
          <Route
            path="/admin/produtos"
            element={
              <RequireAdmin>
                <AdminProdutos />
              </RequireAdmin>
            }
          />
          <Route
            path="/admin/pedidos"
            element={
              <RequireAdmin>
                <AdminPedidos />
              </RequireAdmin>
            }
          />
        </Routes>
      </main>
      <Footer />
    </div>
  );
}
