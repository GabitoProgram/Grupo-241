import React from 'react';
import { HashRouter as Router, Routes, Route, Link } from 'react-router-dom';
import logo from './imagenes/logo.png';
import './App.css';
import AE from './componentes/AE';
import Orientado from './componentes/orientado';
import MT from './componentes/MT';
import VI from './componentes/VI';
import Footer from './componentes/footer';

function Home() {
  return (
    <div className="home-content">
      <h1 className="home-title">ADMINISTRACION DE UN SUPERMERCADO</h1>
      <p className="home-description">Bienvenido a nuestra plataforma de gestión de supermercados.</p>
    </div>
  );
}

function App() {
  return (
    <Router>
      <div className="App">
        {/* Menú de navegación común para todas las páginas */}
        <header className="App-header">
          <div className="header-content">
            <img src={logo} className="App-logo" alt="logo" />
            <nav className="nav-bar">
              <ul className="nav-menu">
                <li><Link to="/">Inicio</Link></li>
                <li><Link to="/AE">AE</Link></li>
                <li><Link to="/Orientado">OO</Link></li>
                <li><Link to="/MT">MT</Link></li>
                <li><Link to="/VI">VI</Link></li>
              </ul>
            </nav>
          </div>
        </header>

        {/* Contenido de las rutas */}
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/AE" element={<AE />} />
          <Route path="/Orientado" element={<Orientado />} />
          <Route path="/MT" element={<MT />} />
          <Route path="/VI" element={<VI />} />
        </Routes>

        <Footer />
      </div>
    </Router>
  );
}

export default App;

