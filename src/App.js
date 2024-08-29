import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Header from './components/Header';
import Home from './components/home/Home';
import About from './components/about/About'; // Importando o novo componente
import Portfolio from './components/portfolio/Portfolio'; // Importando o novo componente

function App() {
  return (
    <Router>
      <Header />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} /> {/* Adicionando a rota para "Sobre Mim" */}
        <Route path="/portfolio" element={<Portfolio />} /> {/* Adicionando a rota para "Sobre Mim" */}
        {/* Adicione outras rotas conforme necessário */}
      </Routes>
    </Router>
  );
}

export default App;
