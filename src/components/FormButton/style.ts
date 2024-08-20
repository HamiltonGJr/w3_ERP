import styled from "styled-components";

import theme from "../../styles/theme";

export const Button = styled.button<{ disabled?: boolean }>`
  width: 100%;
  padding: 14px;
  border: none;
  border-radius: 16px;
  font-size: ${theme.fonts.fontSizes.normal};
  font-family: ${theme.fonts.fontFamily.secondary};
  font-weight: ${theme.fonts.fontWeight.semiBold};
  cursor: ${({ disabled }) => (disabled ? "not-allowed" : "pointer")};
  color: ${theme.colors.others.white};
  background-color: ${({ disabled }) =>
    disabled ? theme.colors.grays.gray400 : theme.colors.primary.main};
`;
