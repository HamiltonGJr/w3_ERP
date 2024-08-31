import { Link } from "react-router-dom";

import styled from "styled-components";
import theme from "../../styles/theme";

export const ContainerDetailHeader = styled.div`
  width: 95%;
  padding: 0 35px;
`;
export const ContainerLinkDetail = styled.div`
  display: flex;
  align-items: center;
`;
export const ButtonLink = styled(Link)`
  display: flex;
  align-items: center;
  justify-content: center;
  cursor: pointer;
`;
export const TextDetail = styled.h3`
  margin-left: 35px;
  font-weight: ${theme.fonts.fontWeight.medium};
  color: ${theme.colors.grays.gray900};
`;
export const TitleName = styled.h2`
  font-size: ${theme.fonts.fontSizes.heading3};
  font-weight: 700;
  color: ${theme.colors.primary.main};
`;
export const ContainerCard = styled.div`
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: space-between;
`;
export const FirstCard = styled.div`
  width: 20%;
  height: 124px;
  padding: 0 25px;
  display: flex;
  align-items: flex-start;
  justify-content: center;
  flex-direction: column;
  border-radius: 24px;
  background-color: ${theme.colors.primary.main};
`;
export const TitleFirstCard = styled.h4`
  margin: 0;
  font-size: ${theme.fonts.fontSizes.normal};
  font-weight: ${theme.fonts.fontWeight.medium};
  font-family: ${theme.fonts.fontFamily.secondary};
  color: ${theme.colors.others.white};
`;
export const NumberFirstCard = styled.p`
  margin: 05px 0 0 0;
  font-size: ${theme.fonts.fontSizes.heading4};
  font-weight: ${theme.fonts.fontWeight.semiBold};
  color: ${theme.colors.others.white};
`;
export const OtherCards = styled.div`
  width: 20%;
  height: 124px;
  padding: 0 25px;
  display: flex;
  align-items: flex-start;
  justify-content: center;
  flex-direction: column;
`;
export const TitleOthersCard = styled.h4`
  margin: 0;
  font-size: ${theme.fonts.fontSizes.normal};
  font-weight: ${theme.fonts.fontWeight.medium};
  font-family: ${theme.fonts.fontFamily.secondary};
  color: ${theme.colors.grays.gray900};
`;
export const NumberOthersCard = styled.p`
  margin: 05px 0 0 0;
  font-size: ${theme.fonts.fontSizes.heading4};
  font-weight: ${theme.fonts.fontWeight.semiBold};
  color: ${theme.colors.primary.main};
`;
export const ContainerNumberPercentage = styled.div`
  display: flex;
  align-items: center;
  gap: 16px;
`;
export const ContainerPercentage = styled.div`
  width: 62px;
  height: 24px;
  display: flex;
  justify-content: center;
  align-items: center;
  font-size: ${theme.fonts.fontSizes.small};
  font-family: ${theme.fonts.fontFamily.secondary};
  border-radius: 50px;
  color: ${theme.colors.others.white};
  background-color: ${theme.statusAlert.success};
`;
