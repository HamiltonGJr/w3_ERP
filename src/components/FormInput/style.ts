import styled from "styled-components";

import theme from "../../styles/theme";

export const Label = styled.label<{ colorAlert?: string }>`
  padding: 04px;
  font-family: ${theme.fonts.fontFamily.secondary};
  font-size: ${theme.fonts.fontSizes.small};
  position: relative;
  top: 10px;
  left: 20px;
  color: ${({ colorAlert }) => colorAlert};
  background-color: ${theme.colors.others.white};
`;
export const ContainerInput = styled.input<{ colorAlert?: string }>`
  width: 92%;
  height: 37px;
  padding: 05px 15px;
  border: 01px solid ${({ colorAlert }) => colorAlert};
  border-radius: 15px;
  &:focus {
    outline: none;
  }
`;
export const ButtonEye = styled.span`
  width: 25px;
  height: 25px;
  border: none;
  display: flex;
  justify-content: center;
  align-items: center;
  position: relative;
  bottom: 35px;
  left: 87%;
  cursor: pointer;
  background-color: ${theme.colors.others.white};
`;
