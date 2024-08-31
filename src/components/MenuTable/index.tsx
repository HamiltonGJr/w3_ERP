import React from "react";

import {
  ContainerHeader,
  ContainerIcon,
  ContainerTitleIcon,
  GeneralTableContainer,
  Title,
} from "./style";
import { MenuTableProps } from "../../types/typesComponents";

const MenuTable: React.FC<MenuTableProps> = ({
  icon,
  title,
  buttonHighOrLow,
  children,
  generalwidthContainer,
  backgroundColor,
  colorTitle,
}) => {
  return (
    <>
      <GeneralTableContainer width={generalwidthContainer}>
        <ContainerHeader>
          <ContainerTitleIcon>
            <ContainerIcon backgroundColor={backgroundColor}>
              {icon}
            </ContainerIcon>

            <Title colorTitle={colorTitle}>{title}</Title>
          </ContainerTitleIcon>

          <div>{buttonHighOrLow}</div>
        </ContainerHeader>

        {children}
      </GeneralTableContainer>
    </>
  );
};

export default MenuTable;
