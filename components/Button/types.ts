import { ReactNode } from "react";

export interface IProps {
  children: ReactNode;
  type?: "button" | "submit" | "reset" | undefined;
  dark?: string;
  callback?: () => void;
}
