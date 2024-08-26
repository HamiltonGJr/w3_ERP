import styled from "styled-components";

import theme from "../../styles/theme";

export const ContainerMain = styled.div`
  width: 22%;
  padding: 20px 0;
  display: flex;
  align-items: center;
  gap: 10px;
  border-radius: 24px;
  background-color: ${theme.colors.primary.dark};
`;
export const ContainerText = styled.div`
  color: ${theme.colors.others.white};
`;
export const TextGraphic = styled.p`
  margin: 15px 0 0 0;
  font-size: ${theme.fonts.fontSizes.normal};
  font-weight: ${theme.fonts.fontWeight.medium};
  color: ${theme.colors.primary.light};
`;
export const ContainerGraphic = styled.div`
  display: flex;
  align-items: center;
`;
export const NumberText = styled.p`
  margin: 0 25px 0 0;
  font-size: ${theme.fonts.fontSizes.heading4};
  font-weight: ${theme.fonts.fontWeight.semiBold};
`;
export const ContainerPosOrNegPercentage = styled.div<{ isPositive: boolean }>`
  padding: 2px 13px;
  border-radius: 100px;
  background-color: ${({ isPositive }) =>
    isPositive ? theme.statusAlert.success : theme.statusAlert.error};
`;
export const TextPosOrNegPercentage = styled.p`
  margin: 0;
  font-size: ${theme.fonts.fontSizes.small};
`;
