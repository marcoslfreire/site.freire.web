import React from 'react';
import './Portfolio.css';
import mobileImage from '../imagens/projeto-aedes.jpeg'; 
import front from '../imagens/proff.jpeg'; 
import backEnd from '../imagens/artificial-intelligence-3382507_1280.jpg';
import bancoDeDados from '../imagens/pizza-img-entrada.jpg'; 
import doc from '../imagens/bacgroudtest.jpg'; 
import testeDeSoft from '../imagens/apple-touch-icon.png'; 

const Portfolio = () => {
  const projects = [
    {
      id: 1,
      title: 'Mobile',
      description: 'Aplicativos móveis que oferecem soluções inovadoras.',
      imageUrl: mobileImage, 
      link: 'https://github.com/marcoslfreire/projeto_aeds', // Link para o repositório do projeto
    },
    {
      id: 2,
      title: 'Front-end',
      description: 'Desenvolvimento de interfaces web responsivas e interativas, focadas na experiência do usuário.',
      imageUrl: front, 
      link: 'https://github.com/marcoslfreire/proffy-rocketseat', // Link para o repositório do projeto
    },
    {
      id: 3,
      title: 'Back-end',
      description: 'Construção de sistemas robustos e escaláveis para suportar operações e lógica de negócios.',
      imageUrl: backEnd, 
      link: 'https://github.com/marcoslfreire/api_products', // Link para o repositório do projeto
    },
    {
      id: 4,
      title: 'Banco de dados',
      description: 'Gerenciamento e otimização de dados com soluções de banco de dados eficientes.',
      imageUrl: bancoDeDados, 
      link: 'https://github.com/marcoslfreire/site.freire.web', // Link para o repositório do projeto
    },
    {
      id: 5,
      title: 'Doc',
      description: 'Documentação técnica clara e acessível para suportar o desenvolvimento e uso de software.',
      imageUrl: doc, 
      link: 'https://github.com/marcoslfreire/projeto_aeds', // Link para o repositório do projeto
    },
    {
      id: 6,
      title: 'Qualidade de software',
      description: 'Garantia da qualidade de software com testes rigorosos e práticas de controle de qualidade.',
      imageUrl: testeDeSoft, 
      link: 'https://github.com/marcoslfreire/TecnicasDeGerenciamentoDeMassa', // Link para o repositório do projeto
    },
  ];

  return (
    <div className="portfolio-container">
      {projects.map((project) => (
        <a href={project.link} key={project.id} className="portfolio-item-link" target="_blank" rel="noopener noreferrer">
          <div className="portfolio-item">
            <div className="portfolio-image-container">
              <img src={project.imageUrl} alt={project.title} className="portfolio-image" />
            </div>
            <div className="portfolio-info">
              <h3>{project.title}</h3>
              <p>{project.description}</p>
            </div>
          </div>
        </a>
      ))}
    </div>
  );
};

export default Portfolio;
