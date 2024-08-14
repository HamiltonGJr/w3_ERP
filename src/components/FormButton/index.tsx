import React from "react";

import { ButtonProps } from "../../types/typesComponents";
import { Button } from "./style";

const FormButton: React.FC<ButtonProps> = ({ children, onClick }) => {
  return (
    <>
      <Button onClick={onClick}>{children}</Button>
    </>
  );
};

export default FormButton;
