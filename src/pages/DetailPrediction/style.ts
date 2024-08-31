import styled from "styled-components";

import theme from "../../styles/theme";

export const ContainerButton = styled.div`
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
`;
export const ContainerButtonCheck = styled.div`
  width: 40px;
  height: 40px;
  display: flex;
  align-items: center;
  justify-content: center;
  border: 2px solid ${theme.colors.grays.gray300};
  border-radius: 50%;
  cursor: pointer;
`;
