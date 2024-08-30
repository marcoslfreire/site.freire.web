import React, { useState } from 'react';
import './Contact.css';

const Contact = () => {
  // Estados para armazenar os valores do formulário e a mensagem de status
  const [nome, setNome] = useState('');
  const [email, setEmail] = useState('');
  const [mensagem, setMensagem] = useState('');
  const [status, setStatus] = useState('');

  // Função para lidar com o envio do formulário
  const handleSubmit = async (event) => {
    event.preventDefault();

    // Envia os dados para o backend usando fetch
    try {
      const response = await fetch('http://localhost:5000/enviar-contato', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          nome,
          email,
          mensagem,
        }),
      });

      const result = await response.json();
      if (response.ok) {
        setStatus('Mensagem enviada com sucesso!');
        // Limpar os campos do formulário após o envio
        setNome('');
        setEmail('');
        setMensagem('');
      } else {
        setStatus(`Erro: ${result.error}`);
      }
    } catch (error) {
      console.error('Erro:', error);
      setStatus('Erro ao enviar a mensagem.');
    }
  };

  return (
    <div className="contact-container">
      <div className="contact-header">
        <h1>Contato</h1>
        <p>Envie suas mensagens e sugestões. Estou sempre aberto a feedbacks!</p>
      </div>
      <form className="contact-form" onSubmit={handleSubmit}>
        <input
          type="text"
          name="nome"
          placeholder="Seu Nome"
          value={nome}
          onChange={(e) => setNome(e.target.value)}
          required
        />
        <input
          type="email"
          name="email"
          placeholder="Seu Email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          required
        />
        <textarea
          name="mensagem"
          rows="6"
          placeholder="Sua Mensagem"
          value={mensagem}
          onChange={(e) => setMensagem(e.target.value)}
          required
        ></textarea>
        <button type="submit">Enviar Mensagem</button>
        {status && <p>{status}</p>}
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
