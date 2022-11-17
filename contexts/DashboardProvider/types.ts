import { Dispatch, ReactNode, SetStateAction } from "react";
import {
  FieldValues,
  UseFormHandleSubmit,
  UseFormRegister,
} from "react-hook-form";

export interface IProps {
  children: ReactNode;
  props?: {
    NG_TOKEN: string;
  };
}

export interface ITransaction {
  id: string;
  value: number;
  createdAt: string;
}

export interface ISubmitTransaction {
  username?: string;
  value?: number;
}

export interface IAccount {
  id: string;
  balance: number;
  creditedTransactions: ITransaction;
  debitedTransactions: ITransaction;
}

export interface IUser {
  id: string;
  username: string;
  account: IAccount;
}

export interface IDashboardContext {
  listAllTransactions: () => Promise<void>;
  transactions: ITransaction[];
  register: UseFormRegister<FieldValues>;
  handleSubmit: UseFormHandleSubmit<FieldValues>;
  submitTransaction: (data: ISubmitTransaction) => Promise<void>;
  user: IUser;
  setUser: Dispatch<SetStateAction<IUser>>;
}
