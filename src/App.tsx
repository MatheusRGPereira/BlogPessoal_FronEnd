import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Home from './paginas/home/Home';
import Login from './paginas/login/Login';
import Navbar from './components/estaticos/Navbar/Navbar';
import Footer from './components/estaticos/Footer/Footer';
import CadastroUsuario from './paginas/cadastroUsuario/CadastroUsuario';
import './App.css';
import ListaTema from './components/temas/listatema/ListaTema';
import ListaPostagem from './components/postagens/listapostagem/ListaPostagem';


function App() {
  return (
    <Router>
      <Navbar />
      <div style={{ minHeight: '100vh' }}>
      <Routes>
      <Route path="/" element={<Login />} />
      <Route path="/login" element={<Login />} />
        <Route path="/home" element={<Home />} />
        <Route path="/cadastrousuario" element={<CadastroUsuario />} />
        <Route path="/temas" element={<ListaTema />} />
        <Route path="/post" element={<ListaPostagem />} />
      </Routes>
      </div>
      <Footer />
    </Router>
  );
}

export default App;
