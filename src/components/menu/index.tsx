import * as S from "./styled";

const NavMenu = () => {
  return (
    <S.MenuContainer>
      <S.MenuContent>
        <S.MenuOption>
          <a href="/">Home</a>
        </S.MenuOption>
        <S.MenuOption>
          <a href="/about">About</a>
        </S.MenuOption>
        <S.MenuOption>
          <a href="*">Stacks</a>
        </S.MenuOption>
        <S.MenuOption>
          <a href="*">Projects</a>
        </S.MenuOption>
        <S.MenuOption>
          <a href="*">Contact</a>
        </S.MenuOption>
      </S.MenuContent>
    </S.MenuContainer>
  );
};

export default NavMenu;
