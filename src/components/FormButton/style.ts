import styled from "styled-components";

import theme from "../../styles/theme";

export const Button = styled.button`
  width: 100%;
  padding: 14px;
  border: none;
  border-radius: 16px;
  font-size: ${theme.fonts.fontSizes.normal};
  font-family: ${theme.fonts.fontFamily.secondary};
  font-weight: ${theme.fonts.fontWeight.semiBold};
  cursor: pointer;
  color: ${theme.colors.others.white};
  background-color: ${theme.colors.secondary.main};
  transition: 0.2s;
  &:hover {
    background-color: ${theme.colors.primary.main};
    transition: 0.2s;
  }
`;
