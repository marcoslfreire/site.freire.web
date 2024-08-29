import React from 'react';
import './Portfolio.css';
import profilePic from '../imagens/perfil.jpg';

const Portfolio = () => {
  const projects = [
    {
      id: 1,
      title: 'Mobile',
      description: 'Aplicativos móveis que oferecem soluções inovadoras para gestão, entretenimento e produtividade.',
      imageUrl: 'caminho/para/imagem1.jpg',
    },
    {
      id: 2,
      title: 'Front-end',
      description: 'Desenvolvimento de interfaces web responsivas e interativas, focadas na experiência do usuário.',
      imageUrl: 'caminho/para/imagem2.jpg',
    },
    {
      id: 3,
      title: 'Back-end',
      description: 'Construção de sistemas robustos e escaláveis para suportar operações e lógica de negócios.',
      imageUrl: 'caminho/para/imagem3.jpg',
    },
    {
      id: 4,
      title: 'Banco de dados',
      description: 'Gerenciamento e otimização de dados com soluções de banco de dados eficientes e seguras.',
      imageUrl: 'caminho/para/imagem4.jpg',
    },
    {
      id: 5,
      title: 'Doc',
      description: 'Documentação técnica clara e acessível para suportar o desenvolvimento e uso de software.',
      imageUrl: 'caminho/para/imagem5.jpg',
    },
    {
      id: 6,
      title: 'Qualidade de software',
      description: 'Garantia da qualidade de software com testes rigorosos e práticas de controle de qualidade.',
      imageUrl: 'caminho/para/imagem6.jpg',
    }]

  return (
    <div className="portfolio-container">
      {projects.map((project) => (
        <div key={project.id} className="portfolio-item">
          <img src={profilePic} alt="Perfil" className="profile-pic" />
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
