import React from "react";

import RightArrow from "../../assets/svg/RightArrow";
import UserPrediction from "../../assets/svg/UserPrediction";
import { CardPredictionProps } from "../../types/typesComponents";
import {
  BallStatus,
  ClientTitle,
  ContainerUserPrediction,
  ContainerGenericPrediction,
  StatusText,
  ContainerTextPrediction,
  ButtonNavigate,
  TitleList,
  ContainerGeneral,
  TextList,
} from "./style";

const CardPrediction: React.FC<CardPredictionProps> = ({
  client,
  onClickNavigate,
  id,
}) => {
  const adjustmentText = (client: string) => {
    if (client.length <= 17) {
      return client;
    }

    const textFilter = client.slice(0, 17) + "...";

    return textFilter;
  };

  return (
    <>
      <ContainerGeneral key={id}>
        <ContainerGenericPrediction>
          <ContainerGenericPrediction>
            <ContainerUserPrediction>
              <UserPrediction />
            </ContainerUserPrediction>

            <ContainerTextPrediction>
              <ClientTitle>{adjustmentText(client)}</ClientTitle>

              <ContainerGenericPrediction>
                <BallStatus></BallStatus>
                <StatusText>Status vai aqui</StatusText>
              </ContainerGenericPrediction>
            </ContainerTextPrediction>
          </ContainerGenericPrediction>

          <ButtonNavigate onClick={onClickNavigate}>
            <RightArrow />
          </ButtonNavigate>
        </ContainerGenericPrediction>

        <ContainerGenericPrediction gapList="80px">
          <div>
            <TitleList>Produto</TitleList>

            <TextList dataText>Álcool em gel</TextList>
            <TextList dataText>Água sanitária</TextList>
            <TextList dataText>Papel higiênico</TextList>
          </div>
          <div>
            <TitleList>Próx. compra</TitleList>

            <TextList>02/09/22</TextList>
            <TextList>05/09/22</TextList>
            <TextList>10/09/22</TextList>
          </div>
        </ContainerGenericPrediction>
      </ContainerGeneral>
    </>
  );
};

export default CardPrediction;
