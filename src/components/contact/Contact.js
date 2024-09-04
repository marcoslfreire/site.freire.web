import React, { useState, useEffect } from 'react';
import './Contact.css';

const Contact = () => {
  const [nome, setNome] = useState('');
  const [email, setEmail] = useState('');
  const [mensagem, setMensagem] = useState('');
  const [status, setStatus] = useState('');
  const [showPopup, setShowPopup] = useState(false);
  const [isButtonEnabled, setIsButtonEnabled] = useState(false);
  const [isSubmitted, setIsSubmitted] = useState(false);

  // Verifica se todos os campos estão preenchidos
  useEffect(() => {
    if (nome && email && mensagem) {
      setIsButtonEnabled(true);
    } else {
      setIsButtonEnabled(false);
    }
  }, [nome, email, mensagem]);

  const handleSubmit = async (event) => {
    event.preventDefault();
    setIsSubmitted(true);

    try {
      const response = await fetch('http://localhost:5000/enviar-contato', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ nome, email, mensagem }),
      });

      const result = await response.json();
      if (response.ok) {
        setNome('');
        setEmail('');
        setMensagem('');
        showSuccessPopup();
      } else {
        setStatus(`Erro: ${result.error}`);
      }
    } catch (error) {
      console.error('Erro:', error);
      setStatus('Erro ao enviar a mensagem.');
    }
    setIsSubmitted(false);
  };

  const showSuccessPopup = () => {
    setShowPopup(true);
    setTimeout(() => {
      setShowPopup(false);
    }, 6000); // Oculta o pop-up após 6 segundos
  };

  return (
    <div className="contact-container">
      <div className="contact-header">
        <h1>Entre em Contato</h1>
        <p>Envie suas dúvidas, sugestões ou feedbacks. Estou ansioso para ouvir você!</p>
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
        <button
          type="submit"
          disabled={!isButtonEnabled || isSubmitted}
          className={isSubmitted ? 'submitted' : ''}
        >
          Enviar Mensagem
        </button>
        {status && <p className="status-message">{status}</p>}
      </form>
      {showPopup && (
        <div className="popup">
          <p>{`Obrigado, ${nome}! Sua mensagem foi enviada com sucesso. Entraremos em contato em breve.`}</p>
        </div>
      )}
      <div className="social-links">
        <a href={`mailto:${email}`} title="Email">
          <i className="fa-solid fa-envelope"></i>
        </a>
        <a href="https://www.linkedin.com/in/marcosffreire" target="_blank" rel="noopener noreferrer" title="LinkedIn">
          <i className="fa-brands fa-linkedin"></i>
        </a>
        <a href="https://github.com/marcoslfreire" target="_blank" rel="noopener noreferrer" title="GitHub">
          <i className="fa-brands fa-github"></i>
        </a>
      </div>
    </div>
  );
};

export default Contact;
