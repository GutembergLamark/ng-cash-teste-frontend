import { Dispatch, ReactNode, SetStateAction } from "react";

export interface IProps {
  children: ReactNode;
  props?: {
    NG_TOKEN: string;
  };
}

export interface ILoginSubmit {
  username?: string;
  password?: string;
}

export interface IRegisterSubmit {
  username?: string;
  password?: string;
  confirmPassword?: string;
}

export interface IUserContext {
  submitLogin: (data: ILoginSubmit) => void;
  submitRegister: (data: IRegisterSubmit) => void;
  
}
