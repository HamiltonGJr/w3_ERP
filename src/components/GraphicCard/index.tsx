import React from "react";

import { GraphicCardProps } from "../../types/typesComponents";
import RadialBarDasboard from "../RadialBarDasboard";
import {
  ContainerGraphic,
  ContainerMain,
  ContainerPosOrNegPercentage,
  ContainerText,
  NumberText,
  TextGraphic,
  TextPosOrNegPercentage,
} from "./style";

const GraphicCard: React.FC<GraphicCardProps> = ({
  nameGraphic,
  numberGraphic,
  posOrNegPercentage,
  highOrLowPercentage,
  percentageGraphic,
  isPositive,
}) => {
  return (
    <>
      <ContainerMain>
        <RadialBarDasboard percentageGraphic={percentageGraphic} />

        <ContainerText>
          <TextGraphic>
            Total <strong>{nameGraphic}</strong> em {highOrLowPercentage}
          </TextGraphic>

          <ContainerGraphic>
            <NumberText>{numberGraphic}</NumberText>
            <ContainerPosOrNegPercentage isPositive={isPositive}>
              <TextPosOrNegPercentage>
                {isPositive ? "+" : "-"}
                {posOrNegPercentage}%
              </TextPosOrNegPercentage>
            </ContainerPosOrNegPercentage>
          </ContainerGraphic>
        </ContainerText>
      </ContainerMain>
    </>
  );
};

export default GraphicCard;
