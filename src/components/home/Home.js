import React from 'react';
import './Home.css';
import profilePic from '../imagens/WhatsApp Image 2024-09-05 at 21.58.08.jpeg'; // Caminho relativo para a imagem


const Home = () => {
  return (
    <div className="home">
      <div className="sidebar">
        <img src={profilePic} alt="Perfil" className="profile-pic" />
        <h2>Luciano Freire</h2>
        <p>Full Stack Developer</p>
        <ul className="sidebar-links">
        <li><a href="https://github.com/marcoslfreire" target="_blank" rel="noopener noreferrer">Repositórios</a></li>
        </ul>
      </div>
      <div className="main-content">
        <h1>Bem-vindo ao Meu Portfólio Online</h1>
        <p>Aqui você pode ver meus projetos e contribuições.</p>
        <p>Olá, sou Luciano Freire, apaixonado por criar soluções digitais inovadoras e funcionais. Com uma sólida experiência que abrange o desenvolvimento front-end e back-end, dedico-me a transformar ideias em produtos digitais impactantes.

Nos últimos 5 anos, tive a oportunidade de colaborar com diversas startups e agências, onde apliquei minhas habilidades para resolver problemas complexos e entregar resultados de alta qualidade. Minha jornada me levou a trabalhar em projetos desafiadores, desde o design e desenvolvimento de interfaces intuitivas até a implementação de arquiteturas robustas e escaláveis.

Sou movido pela curiosidade e pelo desejo constante de aprender. Cada novo desafio é uma chance de aprimorar minhas habilidades e expandir meu conhecimento. Valorizo a colaboração, a comunicação eficaz e a busca contínua pela excelência em tudo o que faço.

Sinta-se à vontade para explorar meus projetos e ver como posso contribuir para o sucesso do seu próximo empreendimento.</p>
      </div>
    </div>
  );
};

export default Home;
