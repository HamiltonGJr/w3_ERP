import React, { useState } from "react";

import FormInput from "../../components/FormInput";
import FolderLogin from "../../assets/img/folderLogin.png";
import FormButton from "../../components/FormButton";
import {
  ContainerForm,
  ContainerInputRemindMe,
  ContainerLogin,
  ContainerRemindMe,
  ImgFolder,
  InputRemindMe,
  LabelRemindMe,
  TextH1,
  TextH3,
  TextRemindMe,
} from "./style";

const Login = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  return (
    <>
      <ContainerLogin>
        <ContainerForm>
          <TextH3>Seja bem vindo!</TextH3>
          <TextH1>Realize seu Login</TextH1>

          <form style={{ width: "400px" }}>
            <FormInput
              label="E-mail"
              placeholder="Insira seu e-mail"
              htmlFor={"email"}
              value="email"
              onChange={(e) => setEmail(e.target.value)}
            />
            <FormInput
              label="Senha"
              placeholder="Insira sua senha"
              isPassword
              htmlFor={"password"}
              value="password"
              onChange={(e) => setPassword(e.target.value)}
            />

            <ContainerRemindMe>
              <ContainerInputRemindMe>
                <InputRemindMe type="checkbox" />
                <LabelRemindMe>Lembrar-me</LabelRemindMe>
              </ContainerInputRemindMe>

              <TextRemindMe>Esqueci minha senha</TextRemindMe>
            </ContainerRemindMe>

            <FormButton>Entrar</FormButton>
          </form>
        </ContainerForm>

        <ImgFolder src={FolderLogin} alt="" />
      </ContainerLogin>
    </>
  );
};

export default Login;
