import React, { useState } from "react";

import { FormInputProps } from "../../types/typesComponents";
import OpenEye from "../../assets/imgSGV/OpenEye";
import ClosedEye from "../../assets/imgSGV/ClosedEye";
import { ButtonEye, ContainerInput, Label } from "./style";

const FormInput: React.FC<FormInputProps> = ({
  label,
  placeholder,
  htmlFor,
  isPassword,
  onChange,
  value,
}) => {
  const [showPassword, setShowPassword] = useState(false);

  const eyeTogglePassword = () => {
    setShowPassword(!showPassword);
  };

  return (
    <>
      {isPassword ? (
        <>
          <Label htmlFor={htmlFor}>{label}</Label>
          <ContainerInput
            type={showPassword ? "text" : "password"}
            placeholder={placeholder}
            value={value}
            onChange={onChange}
          />
          <ButtonEye onClick={eyeTogglePassword}>
            {showPassword ? <OpenEye /> : <ClosedEye />}
          </ButtonEye>
        </>
      ) : (
        <>
          <Label htmlFor={htmlFor}>{label}</Label>
          <ContainerInput type="text" placeholder={placeholder} />
        </>
      )}
    </>
  );
};

export default FormInput;
