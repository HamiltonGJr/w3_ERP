import styled from "styled-components";
import theme from "../../styles/theme";

export const ContainerButton = styled.div`
  width: 251px;
  height: 40px;
  display: flex;
  justify-content: center;
  align-items: center;
  border: 0.8px solid ${theme.colors.grays.gray300};
  border-radius: 08px;
  overflow: hidden;
  background-color: ${theme.colors.grays.gray100};
`;
export const ButtonSwitch = styled.button<{
  active: boolean;
  isNegative: boolean;
}>`
  width: 119px;
  height: 32px;
  margin: 0 04px;
  background-color: ${({ active, isNegative }) =>
    active
      ? isNegative
        ? theme.statusAlert.error
        : theme.statusAlert.success
      : theme.colors.grays.gray100};
  border: none;
  border-radius: 08px;
  cursor: pointer;
  flex: 1;
  font-weight: ${(props) =>
    props.active
      ? theme.fonts.fontWeight.semiBold
      : theme.fonts.fontWeight.medium};
  color: ${(props) => (props.active ? "#fff" : "#666")};
  transition: background-color 0.3s ease;
`;
