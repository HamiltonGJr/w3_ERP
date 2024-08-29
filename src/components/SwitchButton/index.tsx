import React from "react";
import { ButtonSwitch, ContainerButton } from "./style";

interface SwitchButtonProps {
  onFilterChange?: (filter: "positive" | "negative") => void;
  activeFilter?: "positive" | "negative";
}

const SwitchButton: React.FC<SwitchButtonProps> = ({
  onFilterChange,
  activeFilter,
}) => {
  return (
    <>
      <ContainerButton>
        <ButtonSwitch
          active={activeFilter === "positive"}
          isNegative={false}
          onClick={() => onFilterChange && onFilterChange("positive")}
        >
          Em alta
        </ButtonSwitch>
        <ButtonSwitch
          active={activeFilter === "negative"}
          isNegative={true}
          onClick={() => onFilterChange && onFilterChange("negative")}
        >
          Em baixa
        </ButtonSwitch>
      </ContainerButton>
    </>
  );
};

export default SwitchButton;
