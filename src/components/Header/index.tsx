import React from "react";

import DefaultMenu from "../../assets/svg/DefaultMenu";
import User from "../../assets/svg/User";
import DownArrow from "../../assets/svg/DownArrow";
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
