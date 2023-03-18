import styled from "styled-components";

export const MenuContainer = styled.div`
  background-color: blue;
  width: 1193px;
  height: 59px;
  left: 177px;
  display: flex;
  justify-content: center;
  align-items: center;
  color: white;
  position: fixed;
  top: 0;
  z-index: 1;
`;

export const MenuContent = styled.div`
  width: 100%;
  height: 100%;
  display: flex;
  justify-content: space-between;
  align-items: center;
`;

export const MenuOption = styled.div`
  font-family: "DM Sans";
  font-style: normal;
  font-weight: 500;
  font-size: 20px;
  line-height: 26px;
  /* identical to box height, or 130% */

  display: flex;
  align-items: center;
  text-align: center;

  /* light Content */
  a {
  color: #a7a7a7;
  }
`;
