import React from "react";

import { ButtonProps } from "../../types/typesComponents";
import { Button } from "./style";

const FormButton: React.FC<ButtonProps> = ({ children, onClick, disabled }) => {
  return (
    <>
      <Button onClick={onClick} disabled={disabled}>
        {children}
      </Button>
    </>
  );
};

export default FormButton;
