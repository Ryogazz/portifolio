import { CyberEl75 } from 'react-cyber-elements';
import styled from "styled-components";

export const BackgroundContainer = styled.div`
  height: 100vh; 
  width: 71%; 
  margin: 0 auto;
  position: relative;
  z-index: 0;
  display: flex;
  justify-content: center;
  align-items: center;
`;

export const TitleAndContent = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  gap: 10px;
`;


export const Background = styled(CyberEl75)`
  height: 100%; 
  width: 100%; 
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

  > #TitleAndContent {
    position: absolute;
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

export const StacksContainer = styled.div`
  background-color: black;
  width: 100%;
  height: 100vh;
  display: flex;
  justify-content: center;
  align-items: center;
  color: white;
  flex-direction: column;
`;

export const StacksTitle = styled.div`
  font-size: 2rem;
  font-weight: 700;
  text-transform: uppercase;
  letter-spacing: 0.2rem;
`;

export const StackIconContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  flex-wrap: wrap;
`;

export const StackIcon = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  margin: 1rem;
  cursor: pointer;
  transition: all 0.3s ease-in-out;
  width: 70px;
  height: 70px;

  img {
    width: 100%;
    height: 100%;
  } 

  &:hover {
    transform: scale(1.1);
  }
`;


// Updated BackgroundContainer to include TitleAndContent
