import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { toast } from "react-toastify";

import FormInput from "../../components/FormInput";
import FolderLogin from "../../assets/img/folderLogin.png";
import FormButton from "../../components/FormButton";
import {
  ContainerForm,
  ContainerImgFolder,
  ContainerInputRemindMe,
  ContainerLogin,
  ContainerRemindMe,
  Form,
  ImgFolder,
  InputRemindMe,
  LabelRemindMe,
  TextH1,
  TextH3,
  TextRemindMe,
} from "./style";
import { mockLogin } from "../../mocks/mockLogin";
import theme from "../../styles/theme";

const Login = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const [emailColorAlert, setEmailColorAlert] = useState(
    theme.colors.grays.gray700
  );
  const [passwordColorAlert, setPasswordColorAlert] = useState(
    theme.colors.grays.gray700
  );

  const [isButtonDisabled, setIsButtonDisabled] = useState(true);

  const { mockEmail, mockPassword } = mockLogin;

  const navigate = useNavigate();

  useEffect(() => {
    if (email && password) {
      setIsButtonDisabled(false);
    } else {
      setIsButtonDisabled(true);
    }
  }, [email, password]);

  const handleLogin = () => {
    try {
      if (email === mockEmail && password === mockPassword) {
        toast.success(`Login efetuado com sucesso!`);

        setEmailColorAlert(theme.statusAlert.success);
        setPasswordColorAlert(theme.statusAlert.success);

        const navigation = setTimeout(function () {
          navigate("/dashboard");
        }, 2500);

        return navigation;
      }

      setEmailColorAlert(theme.statusAlert.error);
      setPasswordColorAlert(theme.statusAlert.error);

      toast.error("Dados inseridos não estão corretos");
    } catch (err) {
      console.log(err);
    }
  };

  return (
    <>
      <ContainerLogin>
        <ContainerForm>
          <TextH3>Seja bem vindo!</TextH3>
          <TextH1>Realize seu Login</TextH1>

          <Form>
            <FormInput
              label="E-mail"
              placeholder="Insira seu e-mail"
              htmlFor={"email"}
              value={email}
              onChange={(e) => {
                setEmail(e.target.value);
                setEmailColorAlert(theme.colors.grays.gray700);
              }}
              colorAlert={emailColorAlert}
            />
            <FormInput
              label="Senha"
              placeholder="Insira sua senha"
              isPassword
              htmlFor={"password"}
              value={password}
              onChange={(e) => {
                setPassword(e.target.value);
                setPasswordColorAlert(theme.colors.grays.gray700);
              }}
              colorAlert={passwordColorAlert}
            />

            <ContainerRemindMe>
              <ContainerInputRemindMe>
                <InputRemindMe type="checkbox" />
                <LabelRemindMe>Lembrar-me</LabelRemindMe>
              </ContainerInputRemindMe>

              <TextRemindMe>Esqueci minha senha</TextRemindMe>
            </ContainerRemindMe>
          </Form>
          <FormButton onClick={handleLogin} disabled={isButtonDisabled}>
            Entrar
          </FormButton>
        </ContainerForm>

        <ContainerImgFolder>
          <ImgFolder
            src={FolderLogin}
            alt="Folder - com um homem segurando um tablet e sorrindo, com a frase próximo a ele: Acompanhe suas vendas de um jeito fácil e simples."
          />
        </ContainerImgFolder>
      </ContainerLogin>
    </>
  );
};

export default Login;
