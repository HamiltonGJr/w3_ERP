import React from "react";

import Email from "../../assets/svg/Email";
import Phone from "../../assets/svg/Phone";
import BackgroundHeaderPridiction from "../../assets/img/backgroundHeaderPridiction.png";
import {
  ContainerContentPrediction,
  ContainerHeaderPrediction,
  ContainerMainInfo,
  ImgBackground,
  TitleClient,
  ContainerInfo,
  TextInfo,
  ContainerLinkDetail,
  ButtonLink,
  TextDetail,
  ContainerDetailHeader,
} from "./style";
import LeftSmall from "../../assets/svg/LeftSmall";

interface PredictionHeaderProps {
  id: number;
  client: string;
  telefone: string;
  email: string;
}

const PredictionHeader: React.FC<PredictionHeaderProps> = ({
  id,
  client,
  telefone,
  email,
}) => {
  return (
    <>
      <ContainerDetailHeader>
        <ContainerLinkDetail>
          <ButtonLink to={`/prediction`}>
            <LeftSmall />
          </ButtonLink>

          <TextDetail>Predições</TextDetail>
        </ContainerLinkDetail>

        <ContainerHeaderPrediction key={id}>
          <ImgBackground src={BackgroundHeaderPridiction} alt="" />

          <ContainerContentPrediction>
            <TitleClient>{client}</TitleClient>

            <ContainerMainInfo>
              <ContainerInfo>
                <div>{<Phone />}</div>

                <TextInfo>{telefone}</TextInfo>
              </ContainerInfo>

              <ContainerInfo>
                <div>{<Email />}</div>

                <TextInfo>{email}</TextInfo>
              </ContainerInfo>
            </ContainerMainInfo>
          </ContainerContentPrediction>
        </ContainerHeaderPrediction>
      </ContainerDetailHeader>
    </>
  );
};

export default PredictionHeader;
