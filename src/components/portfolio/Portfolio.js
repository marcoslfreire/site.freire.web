import React from 'react';
import './Portfolio.css';

const Portfolio = () => {
  const projects = [
    {
      id: 1,
      title: 'Projeto 1',
      description: 'Descrição do Projeto 1',
      imageUrl: 'caminho/para/imagem1.jpg',
    },
    {
      id: 2,
      title: 'Projeto 2',
      description: 'Descrição do Projeto 2',
      imageUrl: 'caminho/para/imagem2.jpg',
    },
    {
      id: 3,
      title: 'Projeto 3',
      description: 'Descrição do Projeto 2',
      imageUrl: 'caminho/para/imagem2.jpg',
    },
    // Adicione mais projetos conforme necessário
  ];

  return (
    <div className="portfolio-container">
      {projects.map((project) => (
        <div key={project.id} className="portfolio-item">
          <img src={project.imageUrl} alt={project.title} className="portfolio-image" />
          <div className="portfolio-info">
            <h3>{project.title}</h3>
            <p>{project.description}</p>
          </div>
        </div>
      ))}
    </div>
  );
};

export default Portfolio;
