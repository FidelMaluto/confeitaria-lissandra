import { useEffect, useState } from 'react';
import { Routes, Route, useLocation } from 'react-router-dom';
import Header from './components/Header';
import Footer from './components/Footer';
import ParticleCanvas from './components/ParticleCanvas';
import { RequireAuth, RequireAdmin } from './components/ProtectedRoute';

import Home from './pages/Home';
import Catalogo from './pages/Catalogo';
import Contatos from './pages/Contatos';
import Sobre from './pages/Sobre';
import Perfil from './pages/Perfil';

import ProdutoDetalhe from './pages/ProdutoDetalhe';
import Carrinho from './pages/Carrinho';
import Checkout from './pages/Checkout';
import Login from './pages/Login';
import Cadastro from './pages/Cadastro';
import MeusPedidos from './pages/MeusPedidos';

import AdminDashboard from './pages/admin/AdminDashboard';
import AdminProdutos from './pages/admin/AdminProdutos';
import AdminPedidos from './pages/admin/AdminPedidos';

export default function App() {
  const location = useLocation();
  const [cursorPos, setCursorPos] = useState({ x: -1000, y: -1000 });

  useEffect(() => {
    function handleMouseMove(e) {
      setCursorPos({ x: e.clientX, y: e.clientY });
    }
    window.addEventListener('mousemove', handleMouseMove);
    return () => window.removeEventListener('mousemove', handleMouseMove);
  }, []);

  return (
    <div style={{ display: 'flex', flexDirection: 'column', minHeight: '100vh', position: 'relative' }}>
      <ParticleCanvas />
      <div
        className="cursor-spotlight-follower"
        style={{ left: `${cursorPos.x}px`, top: `${cursorPos.y}px` }}
      />
      <Header />
      <main style={{ flex: 1, overflow: 'hidden' }}>
        <div key={location.pathname} className="page-transition-wrapper">
          <Routes location={location}>
          <Route path="/" element={<Home />} />
          <Route path="/catalogo" element={<Catalogo />} />

          <Route path="/contatos" element={<Contatos />} />
          <Route path="/contactos" element={<Contatos />} />
          <Route path="/sobre" element={<Sobre />} />
          <Route path="/perfil" element={<Perfil />} />

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
        </div>
      </main>
      <Footer />
    </div>
  );
}
