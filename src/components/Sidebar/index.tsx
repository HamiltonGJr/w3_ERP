import React from "react";

import WhiteLogo from "../../assets/svg/WhiteLogo.tsx";
import PieTwo from "../../assets/svg/PieTwo";
import ChartLine from "../../assets/svg/ChartLine";
import FacialCleanser from "../../assets/svg/FacialCleanser";
import HandsConnecting from "../../assets/img/handsConnecting.svg";
import { Button } from "../FormButton/style";
import {
  AsideContainer,
  ButtonLink,
  ContainerHandsConnecting,
  ContainerWhiteLogo,
  ImgHandsConnecting,
  NavBar,
  TextConnecting,
} from "./style";

const Sidebar = () => {
  return (
    <>
      <AsideContainer>
        <ContainerWhiteLogo>
          <WhiteLogo />
        </ContainerWhiteLogo>

        <NavBar>
          <ButtonLink to={"/dashboard"}>
            <PieTwo />
            Dashboard
          </ButtonLink>

          <ButtonLink to={"/predictions"}>
            <ChartLine />
            Predições
          </ButtonLink>

          <ButtonLink to={"/products"}>
            <FacialCleanser />
            Produtos
          </ButtonLink>
        </NavBar>

        <ContainerHandsConnecting>
          <ImgHandsConnecting
            src={HandsConnecting}
            alt="Área do fale conosco - imagem de duas mãos saindo de selulares e se tocando, ilustrando a ajuda via internet que podemos dar"
          />

          <TextConnecting>
            Precisando de <strong>ajuda ou suporte</strong> em algo?
          </TextConnecting>

          <Button>Fale conosco</Button>
        </ContainerHandsConnecting>
      </AsideContainer>
    </>
  );
};

export default Sidebar;
