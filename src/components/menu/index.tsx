import * as S from "./styled";

const NavMenu = () => {
  return (
    <S.MenuContainer>
      <S.MenuContent>
        <S.MenuOption>
          <a href="#home">Home</a>
        </S.MenuOption>
        <S.MenuOption>
          <a href="/#about">About</a>
        </S.MenuOption>
        <S.MenuOption>
          <a href="#stacks">Stacks</a>
        </S.MenuOption>
        <S.MenuOption>
          <a href="#projects">Projects</a>
        </S.MenuOption>
        <S.MenuOption>
          <a href="#contacts">Contact</a>
        </S.MenuOption>
      </S.MenuContent>
    </S.MenuContainer>
  );
};

export default NavMenu;
