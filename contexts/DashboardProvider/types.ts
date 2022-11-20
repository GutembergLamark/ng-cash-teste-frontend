import { Dispatch, ReactNode, SetStateAction } from "react";
import {
  FieldValues,
  UseFormHandleSubmit,
  UseFormRegister,
} from "react-hook-form";
import { Id } from "react-toastify";

export interface IProps {
  children: ReactNode;
}

export interface IPropsDashboard {
  dataUser: IUser;
}

export interface ITransaction {
  type?: string;
  id: string;
  value: number;
  createdAt: string;
}

export interface ISubmitTransaction {
  username?: string;
  value?: number;
}

export interface ISubmitTransactionResponse {
  transaction: {
    value: number;
    debitedAccount: {
      id: string;
      balance: number;
    };
    creditedAccount: {
      id: string;
      balance: number;
    };
    id: string;
    createdAt: string;
  };
}

export interface IAccount {
  id: string;
  balance: number;
  creditedTransactions: ITransaction[];
  debitedTransactions: ITransaction[];
}

export interface IUser {
  id: string;
  username: string;
  account: IAccount;
}

export interface IDashboardContext {
  transactions: ITransaction[];
  setTransactions: Dispatch<SetStateAction<ITransaction[]>>;
  register: UseFormRegister<FieldValues>;
  handleSubmit: UseFormHandleSubmit<FieldValues>;
  submitTransaction: (data: ISubmitTransaction) => Promise<Id | undefined>;
  user: IUser | null;
  setUser: Dispatch<SetStateAction<IUser | null>>;
  listAllTransactions: (user: IUser) => void;
  filterType: string;
  setFilterType: Dispatch<SetStateAction<string>>;
  filterTransactions: ITransaction[];
  setFilterTransactions: Dispatch<SetStateAction<ITransaction[]>>;
  filterTransactionType: (type?: string) => void;
  filterTransactionDate: (date: string) => void;
  date: string;
  setDate: Dispatch<SetStateAction<string>>;
}
