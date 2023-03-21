import * as S from "./styled";

const stacks = () => {
  return (
    <S.StacksContainer id="stacks">
      <S.BackgroundContainer>
        <S.Background />
        <S.TitleAndContent>
          <S.StacksTitle>Tecnologias que eu domino </S.StacksTitle>
          <S.StackIconContainer>
            <S.StackIcon>
              <a
                href="https://developer.mozilla.org/en-US/docs/Web/HTML"
                target="_blank"
              >
                <img src="./html.png" alt="html" />
              </a>
            </S.StackIcon>
            <S.StackIcon>
              <a
                href="https://developer.mozilla.org/en-US/docs/Web/CSS"
                target="_blank"
              >
                <img src="./css.png" alt="css" />
              </a>
            </S.StackIcon>
            <S.StackIcon>
              <a
                href="https://developer.mozilla.org/en-US/docs/Web/JavaScript"
                target="_blank"
              >
                <img src="./javascript.png" alt="js" />
              </a>
            </S.StackIcon>
            <S.StackIcon>
              <a href="https://www.typescriptlang.org/" target="_blank">
                <img src="./typescript.png" alt="typescript" />
              </a>
            </S.StackIcon>
            <S.StackIcon>
              <a href="https://reactjs.org/" target="_blank">
                <img src="./react.png" alt="react" />
              </a>
            </S.StackIcon>
          </S.StackIconContainer>
          <S.StackIconContainer>
            <S.StackIcon>
              <a href="https://angular.io/" target="_blank">
                <img src="./angular.png" alt="angular" />
              </a>
            </S.StackIcon>
            <S.StackIcon>
              <a href="https://git-scm.com/" target="_blank">
                <img src="./git.png" alt="git" />
              </a>
            </S.StackIcon>
            <S.StackIcon>
              <a href="https://www.linux.org/" target="_blank">
                <img src="./linux.png" alt="linux" />
              </a>
            </S.StackIcon>
            <S.StackIcon>
              <a href="https://tailwindcss.com/" target="_blank">
                <img src="./tailwind.png" alt="tailwind" />
              </a>
            </S.StackIcon>
            <S.StackIcon>
              <a href="https://code.visualstudio.com/" target="_blank">
                <img src="vscode.png" alt="vscode" />
              </a>
            </S.StackIcon>
          </S.StackIconContainer>
        </S.TitleAndContent>
      </S.BackgroundContainer>
    </S.StacksContainer>
  );
};

export default stacks;
