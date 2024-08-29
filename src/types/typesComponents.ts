import { ChangeEvent, ReactElement, ReactNode } from "react";

export interface FormInputProps {
  label: string;
  htmlFor: string;
  placeholder: string;
  isPassword?: boolean;
  value: string;
  onChange?: (e: ChangeEvent<HTMLInputElement>) => void;
  colorAlert?: string;
}

export interface ButtonProps {
  children: string;
  onClick?: () => void;
  disabled?: boolean;
}

export type RadialBarProps = {
  percentageGraphic: number;
};

export interface GraphicCardProps {
  nameGraphic: string;
  numberGraphic: number;
  posOrNegPercentage: number;
  highOrLowPercentage: string;
  percentageGraphic: number;
  isPositive: boolean;
}

export interface MenuTableProps {
  icon: ReactElement;
  title: string;
  buttonHighOrLow?: ReactElement;
  children: ReactNode;
  generalwidthContainer: string;
  backgroundColor: string;
}

export interface TableProps {
  headers: string[];
  children: ReactNode;
}

export interface SearchHeaderProps {
  title: string;
  onClickSearch?: () => void;
  iconFilter?: ReactElement;
  onClickFilter?: () => void;
}

export interface CardPredictionProps {
  client: string;
  onClickNavigate?: () => void;
  id: string;
}
