import styled from "styled-components";

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
  margin-bottom: 1rem;
`;

export const StackIconContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  flex-wrap: wrap;
  margin-top: 1rem;
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
  // fazer imagem ter o tamanho do container
  img {
    width: 100%;
    height: 100%;
  } 

  &:hover {
    transform: scale(1.1);
  }
`;
