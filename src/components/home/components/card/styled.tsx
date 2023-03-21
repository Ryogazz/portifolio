import styled from "styled-components";
import { CyberEl72 } from "react-cyber-elements";

export const BackgroundContainer = styled.div`
  height: 60vw;
  width: 100vw;
  margin: 0 auto;
  position: relative;
  z-index: 0;
  overflow: hidden;
  display: flex;
  justify-content: center;
  align-items: center;
`;

export const Background = styled(CyberEl72)`
  height: 70%;
  width: 70%;
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  z-index: -1;
  //bolinha
  path:nth-of-type(1) {
    fill: #F0E68C !important;
    /* stroke: orange; */
  }
  // borda
  path:nth-of-type(2) {
    fill: #87CEFA	 !important;
    /* stroke: orange; */
  }
  // fundo
  path:nth-of-type(3) {
    fill: #2E8B57	 !important;
    /* stroke: orange; */
  }
  // detalhes ao redor
  path:nth-of-type(4) {
    fill: #0000CD	 !important;
    /* stroke: orange; */
  }
  path:nth-of-type(5) {
    fill: black !important;
  }

`;

export const ContentContainer = styled.div`
  display: flex;
  flex-direction: column-reverse;
  justify-content: space-between;
  align-items: center;
  margin-top: calc(15% - 50vh);

  @media screen and (max-width: 768px) {
    flex-direction: column;
  }

  position: relative;
  z-index: 1;
`;

export const HomeContainer = styled.div`
  max-width: 100%;
  display: flex;
  flex-wrap: wrap;
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
  font-size: 40px;
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
  width: 40%;
  max-width: 200px;
  height: 200px;
  padding: 10px;
  border-radius: 50%;
  border-color: ${({ color, brightness }) => `rgba(${color}, ${brightness})`};
  transition: border-color 1s ease-in-out;
  box-shadow: 0 0 10px rgba(${({ color }) => color}, 0.5);
  overflow: hidden;
`;

export const AnimatedRgbBorder = styled(RgbBorder)`
  border-color: ${({ color, brightness }) => `rgba(${color}, ${brightness})`};

  @media screen and (max-width: 768px) {
    width: 45vw;
    height: 45vw;
    max-width: none;
    max-height: none;
  }
`;
