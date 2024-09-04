import React from 'react';
import './About.css';
import profilePic from '../imagens/perfil.jpg';

const About = () => {
  return (
    <div className="about-container">
      <div className="sidebar">
      <img src={profilePic} alt="Perfil" className="profile-pic" />
        <h2>Sobre Mim</h2>
        <p>Full Stack Developer | BACKEND | JAVA | Kotlin | ANDROID | Spring Boot | ReactJS | ITS & Testing</p>
      </div>
      <div className="main-content">
        <p>
        Olá, sou desenvolvedor Fullstack com uma paixão profunda por tecnologia e inovação. Desde o início da minha carreira, busquei constantemente aprimorar minhas habilidades e expandir meu conhecimento em todas as camadas do desenvolvimento de software, tanto no front-end quanto no back-end. Ao longo dessa jornada, tive a oportunidade de trabalhar em uma variedade de projetos que me proporcionaram uma visão ampla e integrada do desenvolvimento de soluções tecnológicas.

Minha experiência abrange diversos segmentos, incluindo telecomunicações, setor bancário, farmacêutico e comercial. Essa diversidade de áreas não só me proporcionou uma compreensão única das necessidades e desafios específicos de cada setor, mas também me permitiu aplicar as melhores práticas de desenvolvimento em contextos variados. Em 2021, assumi um papel crucial como desenvolvedor mobile, contribuindo significativamente para o desenvolvimento de soluções em plataformas Android. Trabalhei extensivamente com Java e Kotlin, o que me permitiu mergulhar profundamente no ciclo de vida do Android e em conceitos como MVVM e Clean Architecture.

No front-end, minha especialização inclui o domínio de tecnologias como HTML, CSS e JavaScript, com experiência prática em frameworks modernos como React.js, Angular, e Vue.js. Estou sempre atento à importância de um design responsivo e acessível, garantindo que as interfaces que desenvolvo sejam tanto intuitivas quanto inclusivas. Além disso, tenho uma compreensão sólida dos princípios de SEO e das melhores práticas de acessibilidade, o que me permite criar experiências de usuário que não só atendem às expectativas visuais, mas também são otimizadas para desempenho e visibilidade.

Minha atuação no back-end é igualmente robusta. Com um profundo conhecimento em linguagens como Node.js, Python, Ruby e Java, além de frameworks como Express.js, Django e Spring Boot, estou equipado para desenvolver soluções de servidor eficientes e seguras. Tenho experiência no gerenciamento de bancos de dados tanto SQL (como MySQL e PostgreSQL) quanto NoSQL (como MongoDB), e sou proficiente na criação de APIs RESTful e, opcionalmente, em GraphQL. Essa expertise me permite criar soluções escaláveis que atendem às necessidades de negócios complexos.

Além das minhas habilidades técnicas, uma área de que me orgulho é minha capacidade de integrar práticas de DevOps em meu fluxo de trabalho. O uso de ferramentas como Docker, Jenkins, GitHub Actions, e a implementação de pipelines CI/CD me permite automatizar processos, reduzir o tempo de entrega e garantir uma maior consistência na qualidade do software. Essa abordagem DevOps é crucial para manter um ciclo de desenvolvimento ágil e eficiente, algo que considero essencial no ambiente competitivo de hoje.

Um aspecto fundamental da minha carreira tem sido minha capacidade de colaborar eficazmente em equipes multidisciplinares. Acredito que a tecnologia é uma ferramenta poderosa para resolver problemas, mas é a colaboração e a comunicação que realmente impulsionam o sucesso dos projetos. Ao longo dos anos, tive o privilégio de trabalhar com profissionais talentosos, de diferentes áreas e especialidades, o que me ensinou a importância de ouvir, aprender e compartilhar conhecimentos para alcançar os melhores resultados.

Também tenho uma sólida compreensão de princípios de segurança web, arquitetura de microsserviços, e padrões de design como SOLID e Design Patterns, que me permitem criar soluções que não são apenas funcionais, mas também seguras e escaláveis. Minha experiência com testes automatizados, tanto unitários quanto de integração, e com ferramentas como Selenium WebDriver e RestAssured, reforça meu compromisso com a qualidade em cada etapa do desenvolvimento.

Nos últimos anos, dediquei uma parte significativa do meu tempo ao desenvolvimento de scripts automatizados e à execução de testes automatizados, tanto em ambientes web quanto mobile. Estou familiarizado com metodologias ágeis como Scrum e Kanban, e utilizo ferramentas de gestão de testes como HP ALM, TestLink, Silk Central e Jira para garantir que cada projeto em que trabalho seja conduzido com precisão e eficiência.

Minha experiência em mobile inclui o desenvolvimento de aplicativos nativos para Android, utilizando tanto Kotlin quanto Java. Trabalhei com diferentes tipos de viewGroups, Android SDK, e padrões de arquitetura como MVVM. Além disso, estou sempre em busca de aprimorar minhas habilidades em testes unitários, injeção de dependências e consumo de APIs RESTful com RxJava ou Coroutines, garantindo que cada aplicação que desenvolvo seja robusta, eficiente e fácil de manter.

Em resumo, minha jornada como desenvolvedor Fullstack é marcada por uma constante evolução e um compromisso inabalável com a excelência. Seja criando interfaces de usuário atraentes, desenvolvendo back-ends robustos ou implementando pipelines de CI/CD eficientes, meu objetivo é sempre entregar soluções que superem as expectativas e tragam valor real para os clientes e usuários finais.

Estou sempre aberto a novas oportunidades e desafios que me permitam continuar crescendo e contribuindo para o avanço da tecnologia. Se você procura um profissional dedicado, que combine uma forte expertise técnica com uma abordagem colaborativa e orientada para resultados, ficarei feliz em fazer parte do seu próximo projeto.

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
