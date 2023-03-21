import { CyberEl61 } from "react-cyber-elements";
import styled from "styled-components";

export const BackgroundContainer = styled.div`
  /* height: 60vw;
  width: 100vw; */
  height: 600px; /* mesma altura da imagem de fundo */
  width: 800px; 

  margin: 0 auto;
  position: relative;
  z-index: 0;
  display: flex;
  justify-content: center;
  align-items: center;
`;

export const ContainerText = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  gap: 20px;
  max-width: 80%;
  margin-bottom: 50px; 
`;

export const Background = styled(CyberEl61)`
  height: 100%; /* preencher todo o BackgroundContainer */
  width: auto; /* manter proporção da imagem de fundo */
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  z-index: -1;
  
  //bolinha
  path:nth-of-type(1) {
    filter: saturate(2);
    fill: #2e8b57 !important;
    /* stroke: #87cefa; */
  }
  // borda
  path:nth-of-type(2) {
    fill: #F0E68C !important;
    stroke: #0000cd;
  }
  // fundo
  path:nth-of-type(3) {
    filter: saturate(); //ver com mary sobre saturação
    fill: #0000cd !important;
    /* stroke: #0000cd; */
  }
  // detalhes ao redor
  path:nth-of-type(4) {
    /* fill: #87cefa !important; */
    stroke: #0000cd;
  }
  path:nth-of-type(5) {
    fill: black !important;
    /* stroke: #87cefa; */
  }
  path:nth-of-type(6) {
    fill: #261c1c !important;
    /* stroke: #87cefa; */
  }
  path:nth-of-type(10) {
    fill: #F0E68C !important;
    /* stroke: #87cefa; */
  }

  > #container-text {
    position: absolute;
    top: 30%;
    left: 50%;
    transform: translate(-50%, -50%);
    z-index: 1;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    gap: 20px;

    > * {
      max-width: 100%;
    }
  }
`;

export const AboutContainer = styled.div`
  background-color: black;
  width: 100%;
  height: 100vh;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  gap: 20px;
`;

export const AboutText = styled.div`
  font-family: "Poppins";
  font-style: normal;
  font-weight: 400;
  font-size: 18px;
  line-height: 26px;
  color: #cccccc;
`;

export const AboutTitle = styled.div`
  font-family: "Poppins";
  font-style: normal;
  font-weight: 700;
  font-size: 42px;
  line-height: 52px;
  letter-spacing: -0.4px;
  color: #cccccc;
`;
