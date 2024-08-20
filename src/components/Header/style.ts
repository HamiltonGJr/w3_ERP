import styled from "styled-components";

import theme from "../../styles/theme";

export const ContainerHeader = styled.header`
  width: 95%;
  padding: 24px 32px;
  display: flex;
  justify-content: space-between;
  align-items: center;
`;
export const ButtonDefaultMenu = styled.button`
  border: none;
  cursor: pointer;
`;
export const ContainerUser = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  gap: 15px;
`;
export const BlueBallUser = styled.div`
  width: 50px;
  height: 50px;
  display: flex;
  justify-content: center;
  align-items: center;
  border-radius: 50%;
  background-color: ${theme.colors.primary.main};
`;
export const ContainerText = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
`;
export const TextName = styled.h2`
  margin: 0 0 02.5px 0;
  font-size: ${theme.fonts.fontSizes.large};
  font-weight: ${theme.fonts.fontWeight.semiBold};
`;
export const TextEmail = styled.p`
  margin: 02.5px 0 0 0;
  font-size: ${theme.fonts.fontSizes.normal};
  font-weight: ${theme.fonts.fontWeight.medium};
  color: ${theme.colors.grays.gray600};
`;
export const ButtonDownArrow = styled.button`
  border: none;
  cursor: pointer;
`;
