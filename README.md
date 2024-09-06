# Getting Started with Create React App

This project was bootstrapped with [Create React App](https://github.com/facebook/create-react-app).

## Available Scripts

In the project directory, you can run:

### `npm start`

Runs the app in the development mode.\
Open [http://localhost:3000](http://localhost:3000) to view it in your browser.

The page will reload when you make changes.\
You may also see any lint errors in the console.

### `npm test`

Launches the test runner in the interactive watch mode.\
See the section about [running tests](https://facebook.github.io/create-react-app/docs/running-tests) for more information.

### `npm run build`


Meu Projeto de Portfólio e Formulário de Contato
Este é um projeto de portfólio e formulário de contato desenvolvido em React.js, onde você pode exibir seus trabalhos e receber mensagens através de um formulário interativo.

Funcionalidades Principais
Cards de Portfólio Responsivos: Exibem projetos de forma adaptativa, mantendo tamanhos uniformes e ajustando-se a diferentes dispositivos.
Formulário de Contato: Um formulário que permite enviar uma mensagem, com botões que só são ativados após o preenchimento de todos os campos obrigatórios.
Pop-up de Sucesso: Após o envio da mensagem, um pop-up é exibido confirmando o sucesso da operação.
Botão Dinâmico: O botão "Enviar" só é habilitado quando os campos de nome, e-mail e mensagem estão preenchidos corretamente.
Tecnologias Utilizadas
Frontend: React.js
Estilos: CSS
Backend: Node.js com Express (opcional para envio de mensagens)
Como Rodar o Projeto Localmente
1. Clonar o Repositório
bash
Copiar código
git clone https://github.com/seu-usuario/seu-repositorio.git
cd seu-repositorio
2. Instalar as Dependências
bash
Copiar código
npm install
3. Rodar o Projeto
bash
Copiar código
npm start
A aplicação será iniciada em http://localhost:3000.

Estrutura de Arquivos
bash
Copiar código
.
├── public
│   ├── index.html
├── src
│   ├── components
│   │   └── Contact.js    # Componente principal do formulário de contato
│   ├── App.js            # Componente raiz do projeto
│   ├── index.js          # Ponto de entrada do React
│   ├── styles
│   │   └── Contact.css   # Estilos relacionados ao formulário de contato
├── package.json          # Dependências do projeto
└── README.md             # Este arquivo de documentação
Detalhes dos Componentes
Contact.js
O componente Contact.js contém a lógica para o formulário de contato.
Ele captura os valores de nome, email e mensagem.
Possui validação que habilita o botão "Enviar Mensagem" somente quando todos os campos estão preenchidos.
Após o envio bem-sucedido, um pop-up é exibido por 6 segundos confirmando o envio da mensagem.
Contact.css
Estilização Responsiva para o formulário de contato.
Inclui animações ao focar nos campos de input.
Estilos para desabilitar o botão até a validação e mudar a cor do botão ao ser clicado.
Contém estilos para o pop-up de confirmação de envio de mensagem.
Estilos (CSS)
Aqui estão os principais estilos para o projeto, incluindo o layout responsivo dos cards de portfólio e o estilo do formulário:

css
Copiar código
/* Container principal do portfólio */
.portfolio-container {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
  gap: 30px;
  padding: 50px 20px;
  max-width: 1200px;
  margin: 0 auto;
}

/* Estilo dos itens do portfólio */
.portfolio-item {
  background-color: #ffffff;
  border-radius: 15px;
  overflow: hidden;
  box-shadow: 0 4px 15px rgba(0, 0, 0, 0.1);
  transition: transform 0.3s ease, box-shadow 0.3s ease;
  position: relative;
}

.portfolio-item:hover {
  transform: translateY(-10px);
  box-shadow: 0 12px 30px rgba(0, 0, 0, 0.2);
}

.portfolio-image {
  width: 100%;
  height: 250px;
  object-fit: cover;
  transition: transform 0.3s ease;
}

.portfolio-item:hover .portfolio-image {
  transform: scale(1.1);
}

/* Formulário de Contato */
.contact-container {
  padding: 60px 20px;
  max-width: 700px;
  margin: 0 auto;
  background-color: #ffffff;
  border-radius: 10px;
  box-shadow: 0 4px 10px rgba(0, 0, 0, 0.1);
}

.contact-form {
  display: flex;
  flex-direction: column;
  gap: 1rem;
}

.contact-form input, .contact-form textarea {
  width: 100%;
  padding: 0.9rem;
  border: 1px solid #ddd;
  border-radius: 5px;
  font-size: 1rem;
}

.contact-form button {
  padding: 0.9rem;
  background-color: #e24b4b;
  color: white;
  border: none;
  border-radius: 5px;
  font-size: 1rem;
  cursor: pointer;
  transition: background-color 0.3s ease;
}

.contact-form button:disabled {
  background-color: #ccc; /* Cor para o botão desabilitado */
}

.contact-form button:enabled:hover {
  background-color: #00b35c;
}

/* Pop-up de sucesso */
.popup {
  position: fixed;
  top: 10%;
  left: 50%;
  transform: translateX(-50%);
  background-color: #4CAF50;
  color: #fff;
  padding: 1rem;
  border-radius: 5px;
  box-shadow: 0 4px 10px rgba(0, 0, 0, 0.2);
  z-index: 1000;
  text-align: center;
  font-size: 1rem;
}
Como Personalizar
Você pode ajustar a cor do botão de envio alterando os estilos dentro de Contact.css.
O tempo do pop-up pode ser modificado no componente Contact.js, dentro da função setTimeout.
As fontes e os tamanhos dos cards podem ser alterados diretamente na seção de estilos CSS.
Backend (Opcional)
Para lidar com o envio das mensagens do formulário, você pode configurar um backend simples com Node.js e Express. Aqui está um exemplo básico de como seria o backend para receber os dados do formulário:

js
Copiar código
const express = require('express');
const app = express();
const cors = require('cors');

app.use(cors());
app.use(express.json());

app.post('/enviar-contato', (req, res) => {
  const { nome, email, mensagem } = req.body;
  console.log(`Mensagem recebida de ${nome} (${email}): ${mensagem}`);
  
  // Simulação de envio bem-sucedido
  res.status(200).json({ message: 'Mensagem enviada com sucesso!' });
});

app.listen(5000, () => {
  console.log('Servidor rodando na porta 5000');
});
Licença
Este projeto está licenciado sob a Licença MIT.



Builds the app for production to the `build` folder.\
It correctly bundles React in production mode and optimizes the build for the best performance.

The build is minified and the filenames include the hashes.\
Your app is ready to be deployed!

See the section about [deployment](https://facebook.github.io/create-react-app/docs/deployment) for more information.

