
import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Navbar from './componentes/navbar/Navbar';
import Login from './pages/login/Login';
import Home from './pages/home/home';
import CadastroUsuario from './pages/cadastroUsuario/CadastroUsuario';
import ListaTema from './componentes/temas/listaatema/ListaTema';
import ListaPostagem from './componentes/postagens/listapostagem/ListaPostagem';
import Footer from './componentes/footer/Footer';
import './App.css';

function App() {
  return (
    <Router>
      <Navbar />
      <Routes>

        <Route path="/" element={<Login  />} />

        <Route path="/home" element={<Home />} />

        <Route path="/login" element={<Login />} />

        <Route path="/cadastrousuario" element={<CadastroUsuario/>} />

        <Route path="/temas" element={<ListaTema />} />

        <Route path="/posts" element={<ListaPostagem />} />


      </Routes>
      <Footer />
    </Router>

  );
}

export default App;