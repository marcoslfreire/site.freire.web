import React from 'react';
import './About.css';
import profilePic from '../imagens/perfil.jpg'; // 

const About = () => {
  return (
    <div className="about-container">
      <div className="sidebar">
      <img src={profilePic} alt="Perfil" className="profile-pic" />
        <h2>Sobre Mim</h2>
        <p>Software Engineer | BACKEND | JAVA | Kotlin | ANDROID | Spring Boot | ITS & Testing</p>
      </div>
      <div className="main-content">
        <p>
        Na NTT DATA, minha jornada destaca-se pela diversidade e amplitude de experiências. Tive o privilégio de participar ativamente de projetos em diversos segmentos, abrangendo áreas como telecomunicações, setor bancário, desenvolvimento móvel e web. No meu primeiro ano, assumi um papel fundamental como desenvolvedor mobile, contribuindo para o desenvolvimento de soluções em plataformas Android utilizando as linguagens Java e Kotlin, o que enriqueceu significativamente meu conhecimento em desenvolvimento de aplicativos.

Tenho um entendimento abrangente tanto de front-end & back-end, incluindo banco de dados. Atualmente, estou focado no desenvolvimento back-end, com ênfase em qualidade de software. Possuo conhecimento na criação de scripts para diversos fins, incluindo segmentos web, APIs e mobile. Estou familiarizado com ferramentas e frameworks como Selenium WebDriver, RestAssured , Jenkins, Git, Node, Maven JAVA, KOTLIN, MongoDB, MySQL, Ruby, JavaScript .

Nesse percurso, adquiri um conhecimento sólido em gerenciamento de grandes volumes de dados e na implementação de portais de massa, dois elementos cruciais em ambientes de desenvolvimento e qualidade de software. Essa ampla experiência me permitiu adotar abordagens flexíveis e eficazes em diversos contextos.

Essas experiências não apenas demonstram minhas habilidades técnicas, mas também minha capacidade de colaborar efetivamente em equipes multifuncionais. Minha busca constante por aprendizado e aprimoramento mantém-me atualizado em um cenário em constante evolução.
          {/* Adicione o restante do seu texto aqui */}
        </p>
        <p>
          {/* Continue com o restante das informações que você deseja exibir */}
        </p>
      </div>
    </div>
  );
};

export default About;
