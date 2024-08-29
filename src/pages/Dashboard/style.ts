import styled from "styled-components";

import theme from "../../styles/theme";

export const ContainerBody = styled.div`
  display: flex;
`;
export const ContainerMain = styled.div`
  width: 85%;
  height: 100vh;
  margin-left: 15%;
  overflow-y: auto;
`;
export const ContainerGraphic = styled.div`
  margin: 2% 0 0 1%;
  width: 98%;
  border-radius: 24px;
  background-color: ${theme.colors.primary.main};
`;
export const HeaderGraphic = styled.div`
  padding: 10px 20px;
  display: flex;
  align-items: center;
  justify-content: space-between;
`;
export const TextGrafphic = styled.h3`
  font-size: ${theme.fonts.fontSizes.heading4};
  font-weight: ${theme.fonts.fontWeight.semiBold};
  color: ${theme.colors.others.white};
`;
export const ContainerGraphicCard = styled.div`
  padding-bottom: 2%;
  display: flex;
  justify-content: space-evenly;
  align-items: center;
`;
export const ContainerMenu = styled.div`
  display: flex;
  justify-content: space-around;
`;
