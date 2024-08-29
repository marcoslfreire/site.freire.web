import React from 'react';
import './Contact.css';

const Contact = () => {
  return (
    <div className="contact-container">
      <div className="contact-header">
        <h1>Contato</h1>
        <p>Envie suas mensagens e sugestões. Estou sempre aberto a feedbacks!</p>
      </div>
      <form className="contact-form">
        <input type="text" placeholder="Seu Nome" required />
        <input type="email" placeholder="Seu Email" required />
        <textarea rows="6" placeholder="Sua Mensagem" required></textarea>
        <button type="submit">Enviar Mensagem</button>
      </form>
      <div className="social-links">
        <a href="mailto:meuemail@example.com" title="Email">
          <i className="fa-solid fa-envelope"></i>
        </a>
        <a href="https://www.linkedin.com/in/seu-perfil/" target="_blank" rel="noopener noreferrer" title="LinkedIn">
          <i className="fa-brands fa-linkedin"></i>
        </a>
        <a href="https://twitter.com/seu-perfil" target="_blank" rel="noopener noreferrer" title="Twitter">
          <i className="fa-brands fa-twitter"></i>
        </a>
        <a href="https://www.instagram.com/seu-perfil/" target="_blank" rel="noopener noreferrer" title="Instagram">
          <i className="fa-brands fa-instagram"></i>
        </a>
        <a href="https://github.com/seu-perfil" target="_blank" rel="noopener noreferrer" title="GitHub">
          <i className="fa-brands fa-github"></i>
        </a>
      </div>
    </div>
  );
};

export default Contact;
