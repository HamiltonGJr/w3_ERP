import { ChangeEvent } from "react";

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
