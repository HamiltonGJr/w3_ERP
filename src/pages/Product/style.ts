import styled from "styled-components";
import theme from "../../styles/theme";

export const ContainerProductTable = styled.div`
  width: 90%;
  padding: 25px 65px;
  margin-bottom: 75px;
`;
export const ContainerUpOrDown = styled.div`
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
`;
export const ContainerUp = styled.div`
  width: 90px;
  height: 40px;
  display: flex;
  align-items: center;
  justify-content: center;
  font-family: ${theme.fonts.fontFamily.secondary};
  font-size: ${theme.fonts.fontSizes.normal};
  border-radius: 08px;
  color: ${theme.statusAlert.success};
  background-color: rgba(217, 254, 230, 1);
`;
export const ContainerDown = styled.div`
  width: 90px;
  height: 40px;
  display: flex;
  align-items: center;
  justify-content: center;
  font-family: ${theme.fonts.fontFamily.secondary};
  font-size: ${theme.fonts.fontSizes.normal};
  border-radius: 08px;
  color: ${theme.statusAlert.error};
  background-color: rgba(255, 225, 225, 1);
`;
