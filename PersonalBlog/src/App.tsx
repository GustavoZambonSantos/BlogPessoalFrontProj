
import './App.css'
import { Grid } from '@material-ui/core'
import Home from './pages/home/home'
import Navbar from './componentes/navbar/Navbar';
import Footer from './componentes/footer/Footer';
import './App.css';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Login from './pages/login/Login';
import CadastroUsuario from './pages/cadastroUsuario/CadastroUsuario';

function App() {
  return (
    <BrowserRouter>
    <Navbar />
    <div style={{ minHeight: '60vh' }}>
    <Routes> // Antigo Switch
      
  <Route path="/" element={<Login />} />
    <Route path="/login" element={<Login />} />
    <Route path="/home" element={<Home />} />
    <Route path="/cadastro" element={<CadastroUsuario />} />
    </Routes>
    </div>
    <Footer />
    </BrowserRouter>
  );
}

export default App;