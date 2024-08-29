import styled from "styled-components";

import theme from "../../styles/theme";

export const ContainerGeneral = styled.div`
  margin-bottom: 45px;
  width: 290px;
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
`;
export const ContainerGenericPrediction = styled.div<{ gapList?: string }>`
  width: 100%;
  display: flex;
  align-items: center;
  gap: ${(props) => props.gapList};
`;
export const ContainerUserPrediction = styled.div`
  width: 48px;
  height: 48px;
  border-radius: 50%;
  display: flex;
  align-items: center;
  justify-content: center;
  background-color: ${theme.colors.primary.light};
`;
export const ContainerTextPrediction = styled.div`
  margin-left: 10px;
`;
export const ClientTitle = styled.h2`
  margin: 0;
  font-size: ${theme.fonts.fontSizes.normal};
  font-family: ${theme.fonts.fontFamily.secondary};
  color: ${theme.colors.grays.gray900};
`;
export const BallStatus = styled.div`
  margin-right: 06px;
  width: 06px;
  height: 06px;
  border-radius: 50%;
  background-color: ${theme.statusAlert.success};
`;
export const StatusText = styled.p`
  margin: 0;
  font-size: ${theme.fonts.fontSizes.small};
  font-family: ${theme.fonts.fontFamily.secondary};
  color: ${theme.statusAlert.success};
`;
export const ButtonNavigate = styled.button`
  border: none;
  cursor: pointer;
  background-color: ${theme.colors.others.white};
`;
export const TitleList = styled.h3`
  font-size: ${theme.fonts.fontSizes.small};
  font-weight: ${theme.fonts.fontWeight.medium};
  font-family: ${theme.fonts.fontFamily.secondary};
  color: ${theme.colors.primary.medium};
`;
export const TextList = styled.p<{ dataText?: boolean }>`
  font-size: ${theme.fonts.fontSizes.small};
  font-weight: ${(props) =>
    props.dataText
      ? theme.fonts.fontWeight.medium
      : theme.fonts.fontWeight.semiBold};
  font-family: ${theme.fonts.fontFamily.secondary};
  color: ${theme.colors.grays.gray800};
`;
