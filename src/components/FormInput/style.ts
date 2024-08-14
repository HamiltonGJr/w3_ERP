import styled from "styled-components";

import theme from "../../styles/theme";

export const Label = styled.label`
  padding: 04px;
  font-family: ${theme.fonts.fontFamily.secondary};
  font-size: ${theme.fonts.fontSizes.small};
  position: relative;
  top: 10px;
  left: 20px;
  color: ${theme.colors.grays.gray600};
  background-color: ${theme.colors.others.white};
`;
export const ContainerInput = styled.input`
  width: 92%;
  height: 37px;
  padding: 05px 15px;
  border: 01px solid ${theme.colors.grays.gray400};
  border-radius: 15px;
`;
export const ButtonEye = styled.span`
  border: none;
  position: relative;
  bottom: 36px;
  left: 355px;
  background-color: ${theme.colors.others.white};
`;
