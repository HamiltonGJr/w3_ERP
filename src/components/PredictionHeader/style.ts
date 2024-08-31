import styled from "styled-components";
import { Link } from "react-router-dom";

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
export const ContainerHeaderPrediction = styled.div`
  width: 100%;
  height: 152px;
  display: flex;
  align-items: center;
  justify-content: center;
  border-radius: 24px;
  background-color: ${theme.colors.primary.opacity};
  position: relative;
  overflow: hidden;

  &::before {
    content: "";
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    background-color: ${theme.colors.primary.opacity};
    opacity: 0.5;
    z-index: 1;
  }
`;
export const ImgBackground = styled.img`
  width: 100%;
  border-radius: 24px;
  object-fit: cover;
  position: absolute;
  top: 0;
  left: 0;
  z-index: 0;
`;
export const ContainerContentPrediction = styled.div`
  margin-left: 15px;
  width: 100%;
  display: flex;
  flex-direction: column;
  justify-content: flex-end;
  gap: 15px;
  position: relative;
  z-index: 2;
  padding: 16px;
  color: ${theme.colors.others.white};
`;
export const TitleClient = styled.h2`
  margin: 0;
  font-size: ${theme.fonts.fontSizes.heading4};
`;
export const ContainerMainInfo = styled.div`
  margin: 0;
  display: flex;
  gap: 40px;
`;
export const ContainerInfo = styled.div`
  display: flex;
  align-items: center;
  gap: 15px;
`;
export const TextInfo = styled.h4`
  margin: 0;
  font-size: ${theme.fonts.fontSizes.normal};
  font-family: ${theme.fonts.fontFamily.secondary};
  font-weight: ${theme.fonts.fontWeight.medium};
`;
