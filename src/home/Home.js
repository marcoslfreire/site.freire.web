import React from 'react';
import './Home.css';
import profilePic from '../imagens/perfil.jpg'; // Caminho relativo para a imagem

const Home = () => {
  return (
    <div className="home">
      <div className="sidebar">
        <img src={profilePic} alt="Perfil" className="profile-pic" />
        <h2>Luciano Freire</h2>
        <p>Desenvolvedor FULLSTACK</p>
        <ul className="sidebar-links">
          <li><a href="/repos">Repositórios</a></li>
        </ul>
      </div>
      <div className="main-content">
        <h1>Bem-vindo ao Meu Site Web</h1>
        <p>Aqui você pode ver meus projetos e contribuições.</p>
        <p>Olá, sou Luciano. Prazer em conhecê-lo.
        Desde que comecei minha jornada como designer freelancer há 5 anos, fiz trabalho remoto para agências, dei consultoria para startups e colaborei com pessoas talentosas para criar produtos digitais para uso comercial e de consumidor. Sou silenciosamente confiante, naturalmente curioso e estou sempre trabalhando para melhorar minhas habilidades.</p>
      </div>
    </div>
  );
};

export default Home;
