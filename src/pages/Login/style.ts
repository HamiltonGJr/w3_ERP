import styled from "styled-components";

import theme from "../../styles/theme";

export const ContainerLogin = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
`;
export const ContainerForm = styled.div`
  margin-left: 17%;
`;
export const TextH3 = styled.h3`
  margin: 0 0 01% 0;
  font-size: ${theme.fonts.fontSizes.large};
  font-weight: ${theme.fonts.fontWeight.medium};
`;
export const TextH1 = styled.h1`
  margin: 0 0 05% 0;
`;
export const ContainerRemindMe = styled.div`
  width: 100%;
  margin-bottom: 08%;
  display: flex;
  align-items: center;
  justify-content: space-between;
`;
export const ContainerInputRemindMe = styled.div`
  display: flex;
  align-items: center;
`;
export const InputRemindMe = styled.input`
  width: 18px;
  height: 18px;
  margin-right: 10px;
`;
export const LabelRemindMe = styled.label`
  font-size: ${theme.fonts.fontSizes.normal};
  font-weight: ${theme.fonts.fontWeight.semiBold};
`;
export const TextRemindMe = styled.p`
  font-size: ${theme.fonts.fontSizes.normal};
  color: ${theme.colors.grays.gray700};
`;
export const ImgFolder = styled.img`
  width: 43%;
  height: 100vh;
`;
