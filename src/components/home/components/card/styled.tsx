import styled, { keyframes } from "styled-components";

export const HomeContainer = styled.div`
  max-width: 100%;
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
  margin: 0 auto;
  @media screen and (max-width: 768px) {
    flex-direction: column;
    justify-content: center;
    align-items: center;
  }
`;

export const Text = styled.div`
  max-width: 636px;

  font-family: "Poppins";
  font-style: normal;
  font-weight: 700;
  font-size: 58px;
  line-height: 70px;
  /* or 121% */

  display: flex;
  align-items: center;

  color: #d9d9d9;

  @media screen and (max-width: 768px) {
    max-width: 90%;
    text-align: center;
    font-size: 48px;
    line-height: 60px;
  }
`;

export const Img = styled.img`
  max-width: 300px;
  height: auto;

  @media screen and (max-width: 768px) {
    max-width: 90%;
    height: auto;
    margin-top: 20px;
  }
`;

const RgbBorder = styled.div<{ color: string; brightness: number }>`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 80vw;
  max-width: 400px;
  height: 80vw;
  max-height: 400px;
  padding: 20px;
  border-radius: 50%;
  border-color: ${({ color, brightness }) => `rgba(${color}, ${brightness})`};
  transition: background-color 0.5s ease-in-out;
  box-shadow: 0 0 10px rgba(${({ color }) => color}, 0.5);
`;

const RgbBorderAnimation = keyframes`
  0% {
    transform: scale(1);
  }
  50% {
    transform: scale(1.2);
  }
  100% {
    transform: scale(1);
  }
`;

export const AnimatedRgbBorder = styled(RgbBorder)`
  animation: ${RgbBorderAnimation} 5s ease-in-out infinite;

  @media screen and (max-width: 768px) {
    width: 90vw;
    height: 90vw;
    max-width: none;
    max-height: none;
  }

`;
