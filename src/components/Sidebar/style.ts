import styled from "styled-components";

import theme from "../../styles/theme";
import { Link } from "react-router-dom";

export const AsideContainer = styled.aside`
  width: 15%;
  height: 100vh;
  display: flex;
  align-items: center;
  flex-direction: column;
  background-color: ${theme.colors.primary.main};
  position: fixed;
`;
export const ContainerWhiteLogo = styled.div`
  padding-top: 49px;
  width: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
`;
export const NavBar = styled.nav`
  width: 100%;
  padding-top: 38px;
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 20px;
`;
export const ButtonLink = styled(Link)`
  width: 89%;
  height: 50px;
  padding-left: 15px;
  border-radius: 08px;
  text-decoration: none;
  font-size: ${theme.fonts.fontSizes.normal};
  font-weight: ${theme.fonts.fontWeight.medium};
  display: flex;
  align-items: center;
  gap: 15px;
  cursor: pointer;
  color: ${theme.colors.others.white};
  transition: 0.3s;
  &:hover {
    transition: 0.3s;
    font-weight: ${theme.fonts.fontWeight.semiBold};
    background-color: #243aa4;
  }
`;
export const ContainerHandsConnecting = styled.div`
  margin-top: 80%;
  padding: 13px;
  width: 80%;
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
  border-radius: 24px;
  background-color: ${theme.colors.primary.medium};
`;
export const ImgHandsConnecting = styled.img`
  position: absolute;
  top: 52%;
`;
export const TextConnecting = styled.p`
  margin-top: 65px;
  text-align: center;
  letter-spacing: 01px;
  font-family: ${theme.fonts.fontFamily.secondary};
  font-weight: ${theme.fonts.fontWeight.medium};
  color: ${theme.colors.others.white};
`;
