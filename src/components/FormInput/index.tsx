import React, { useState } from "react";

import OpenEye from "../../assets/svg/OpenEye";
import ClosedEye from "../../assets/svg/ClosedEye";
import { ButtonEye, ContainerInput, Label } from "./style";
import { FormInputProps } from "../../types/typesComponents";

const FormInput: React.FC<FormInputProps> = ({
  label,
  placeholder,
  htmlFor,
  isPassword,
  value,
  onChange,
  colorAlert,
}) => {
  const [showPassword, setShowPassword] = useState(false);

  const eyeTogglePassword = () => {
    setShowPassword(!showPassword);
  };

  return (
    <>
      <Label htmlFor={htmlFor} colorAlert={colorAlert}>
        {label}
      </Label>
      <ContainerInput
        type={isPassword && !showPassword ? "password" : "text"}
        placeholder={placeholder}
        value={value}
        onChange={onChange}
        colorAlert={colorAlert}
      />
      {isPassword && (
        <ButtonEye onClick={eyeTogglePassword}>
          {showPassword ? <OpenEye /> : <ClosedEye />}
        </ButtonEye>
      )}
    </>
  );
};

export default FormInput;
