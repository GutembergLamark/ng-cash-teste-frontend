import { UseFormRegister, FieldValues } from "react-hook-form";

export interface IInput {
  id: string;
  type: string;
  placeholder: string;
  register: UseFormRegister<FieldValues>;
}
