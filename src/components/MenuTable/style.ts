import styled from "styled-components";

import theme from "../../styles/theme";

interface GeneralTableContainerProps {
  width: string;
}

interface ContainerIconProps {
  backgroundColor: string;
}

export const GeneralTableContainer = styled.div<GeneralTableContainerProps>`
  width: ${(props) => props.width};
`;
export const ContainerHeader = styled.div`
  margin: 45px 0 15px 0;
  display: flex;
  align-items: center;
  justify-content: space-between;
`;
export const ContainerTitleIcon = styled.div`
  display: flex;
  align-items: center;
  gap: 15px;
`;
export const ContainerIcon = styled.div<ContainerIconProps>`
  width: 50px;
  height: 50px;
  display: flex;
  align-items: center;
  justify-content: center;
  border-radius: 08px;
  background-color: ${(props) => props.backgroundColor};
`;
export const Title = styled.p`
  font-size: ${theme.fonts.fontSizes.large};
  font-weight: ${theme.fonts.fontWeight.semiBold};
  color: ${theme.colors.grays.gray900};
`;
