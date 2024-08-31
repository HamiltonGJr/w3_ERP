import React from "react";

import {
  ButtonLink,
  ContainerCard,
  ContainerDetailHeader,
  ContainerLinkDetail,
  ContainerNumberPercentage,
  ContainerPercentage,
  FirstCard,
  NumberFirstCard,
  NumberOthersCard,
  OtherCards,
  TextDetail,
  TitleFirstCard,
  TitleName,
  TitleOthersCard,
} from "./style";
import LeftSmall from "../../assets/svg/LeftSmall";

interface DetailHeaderProps {
  name: string;
}

const DetailHeader: React.FC<DetailHeaderProps> = ({ name }) => {
  return (
    <>
      <ContainerDetailHeader>
        <ContainerLinkDetail>
          <ButtonLink to={`/dashboard`}>
            <LeftSmall />
          </ButtonLink>

          <TextDetail>Detalhamento</TextDetail>
        </ContainerLinkDetail>

        <div>
          <TitleName>{name}</TitleName>

          <ContainerCard>
            <FirstCard>
              <TitleFirstCard>Média 120 dias</TitleFirstCard>
              <NumberFirstCard>300</NumberFirstCard>
            </FirstCard>
            <OtherCards>
              <TitleOthersCard>Últimos 30 dias</TitleOthersCard>
              <ContainerNumberPercentage>
                <NumberOthersCard>222</NumberOthersCard>
                <ContainerPercentage>-26%</ContainerPercentage>
              </ContainerNumberPercentage>
            </OtherCards>
            <OtherCards>
              <TitleOthersCard>Últimos 60 dias</TitleOthersCard>
              <NumberOthersCard>350</NumberOthersCard>
            </OtherCards>
            <OtherCards>
              <TitleOthersCard>Últimos 90 dias</TitleOthersCard>
              <NumberOthersCard>320</NumberOthersCard>
            </OtherCards>
            <OtherCards>
              <TitleOthersCard>Últimos 120 dias</TitleOthersCard>
              <NumberOthersCard>280</NumberOthersCard>
            </OtherCards>
          </ContainerCard>
        </div>
      </ContainerDetailHeader>
    </>
  );
};

export default DetailHeader;
