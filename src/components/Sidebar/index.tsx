import React from "react";

import WhiteLogo from "../../assets/imgSGV/WhiteLogo";
import PieTwo from "../../assets/imgSGV/PieTwo";
import ChartLine from "../../assets/imgSGV/ChartLine";
import FacialCleanser from "../../assets/imgSGV/FacialCleanser";
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
