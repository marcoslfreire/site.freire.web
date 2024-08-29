import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Header from './components/Header';
import Home from './home/Home';

function App() {
  return (
    <Router>
      <Header />
      <Routes>
        <Route path="/" element={<Home />} />
        {/* Adicione outras rotas conforme necessário */}
      </Routes>
    </Router>
  );
}

export default App;
