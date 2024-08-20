import React from "react";

import DefaultMenu from "../../assets/imgSGV/DefaultMenu";
import User from "../../assets/imgSGV/User";
import DownArrow from "../../assets/imgSGV/DownArrow";
import {
  BlueBallUser,
  ButtonDefaultMenu,
  ButtonDownArrow,
  ContainerHeader,
  ContainerText,
  ContainerUser,
  TextEmail,
  TextName,
} from "./style";
import { mockLogin } from "../../mocks/mockLogin";

const Header = () => {
  const { mockEmail, mockName } = mockLogin;

  return (
    <>
      <ContainerHeader>
        <ButtonDefaultMenu>
          <DefaultMenu />
        </ButtonDefaultMenu>

        <ContainerUser>
          <BlueBallUser>
            <User />
          </BlueBallUser>

          <ContainerText>
            <TextName>{mockName}</TextName>
            <TextEmail>{mockEmail}</TextEmail>
          </ContainerText>

          <ButtonDownArrow>
            <DownArrow />
          </ButtonDownArrow>
        </ContainerUser>
      </ContainerHeader>
    </>
  );
};

export default Header;
