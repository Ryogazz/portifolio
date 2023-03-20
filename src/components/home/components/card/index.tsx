import { useEffect, useState } from "react";
import * as S from "./styled";

const Card = () => {
  const randomColor = () =>
    `${Math.floor(Math.random() * 255)}, ${Math.floor(
      Math.random() * 255
    )}, ${Math.floor(Math.random() * 255)}`;

  const [color, setColor] = useState(randomColor());
  const [brightness, setBrightness] = useState(0);

  useEffect(() => {
    const intervalId = setInterval(() => {
      setColor(randomColor());
      setBrightness(Math.floor(Math.random() * 50) + 50);
    }, 1000);
    return () => clearInterval(intervalId);
  }, []);
  
  return (
    <S.HomeContainer>
      <S.BackgroundContainer>
        <S.ContentContainer>
          <S.Text>
            Olá, meu nome é Josué, sou dev Front End e este é o meu portfólio.
          </S.Text>
          <S.AnimatedRgbBorder color={color} brightness={brightness}>
            <S.Img src="/avatar.png" alt="Imagem de um desenvolvedor" />
          </S.AnimatedRgbBorder>
        </S.ContentContainer>
        <S.Background />
      </S.BackgroundContainer>
    </S.HomeContainer>
  );
};

export default Card;
