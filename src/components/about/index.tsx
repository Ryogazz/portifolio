import * as S from "./styled";

const About = () => {
  return (
    <S.AboutContainer id="about">
      <S.BackgroundContainer>
        <S.Background />
        <S.ContainerText>
          <S.AboutTitle>Sobre mim</S.AboutTitle>
          <S.AboutText>
            Eu sou Josué Gomes Ribeiro, um desenvolvedor web front-end com
            conhecimentos em diversas tecnologias de ponta. Sou especialista em
            JavaScript, ReactJS, TypeScript, AngularJS, Git, Styled Components,
            Tailwind, HTML e CSS. Minha paixão por criar interfaces amigáveis e
            responsivas me levou a buscar conhecimentos técnicos avançados em
            tecnologias modernas de front-end, bem como uma compreensão profunda
            das melhores práticas e padrões da indústria. Sou altamente
            comprometido com a qualidade, entrega no prazo e satisfação do
            cliente. Além disso, sou um profissional ético e responsável que
            sempre busca novos desafios para continuar aprendendo e evoluindo na
            minha carreira.
          </S.AboutText>
        </S.ContainerText>
      </S.BackgroundContainer>
    </S.AboutContainer>
  );
};

export default About;
