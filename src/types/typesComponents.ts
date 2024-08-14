import { ChangeEvent } from "react";

export interface FormInputProps {
  label: string;
  htmlFor: string;
  placeholder: string;
  isPassword?: boolean;
  onChange?: (e: ChangeEvent<HTMLInputElement>) => void;
  value?: string;
}

export interface ButtonProps {
  children: string;
  onClick?: () => void;
}
