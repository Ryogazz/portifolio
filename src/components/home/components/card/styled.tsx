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
  max-width: 100%;
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
  width: 80%;
  max-width: 400px;
  height: 400px;
  padding: 20px;
  border-radius: 50%;
  border-color: ${({ color, brightness }) => `rgba(${color}, ${brightness})`};
  transition: border-color 1s ease-in-out;
  box-shadow: 0 0 10px rgba(${({ color }) => color}, 0.5);
  overflow: hidden;
`;

export const AnimatedRgbBorder = styled(RgbBorder)`
  border-color: ${({ color, brightness }) => `rgba(${color}, ${brightness})`};

  @media screen and (max-width: 768px) {
    width: 90vw;
    height: 90vw;
    max-width: none;
    max-height: none;
  }

`;
