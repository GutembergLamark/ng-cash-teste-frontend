import { createContext, useState } from "react";

import { parseCookies } from "nookies";
import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import { toast } from "react-toastify";
import { AxiosError } from "axios";

import api from "../../services/api";
import { schemaCreateTransaction } from "../../validators";

import {
  IDashboardContext,
  IProps,
  ISubmitTransaction,
  ISubmitTransactionResponse,
  ITransaction,
  IUser,
} from "./types";

export const DashboardContext = createContext<IDashboardContext>(
  {} as IDashboardContext
);

const DashboardProvider = ({ children }: IProps) => {
  const [transactions, setTransactions] = useState<ITransaction[]>([]);
  const [user, setUser] = useState<IUser | null>(null);
  const [filterType, setFilterType] = useState<string>("Todos");
  const [filterTransactions, setFilterTransactions] = useState<ITransaction[]>(
    []
  );
  const [date, setDate] = useState<string>("");

  const {
    reset,
    register,
    handleSubmit,
    formState: { errors },
  } = useForm({
    resolver: yupResolver(schemaCreateTransaction),
  });

  const filterTransactionDate = (date: string) => {
    setFilterTransactions(
      transactions.filter((transaction) => {
        const createdAt = new Date(transaction.createdAt);
        const dateFormated = `${createdAt.getFullYear()}-${
          createdAt.getMonth() + 1
        }-${createdAt.getDate()}`;

        return dateFormated === date;
      })
    );
  };

  const filterTransactionType = (type?: string) => {
    type
      ? setFilterTransactions(
          transactions.filter((transaction) => transaction.type === type)
        )
      : setFilterTransactions(transactions);
  };

  const listAllTransactions = (user: IUser) => {
    const debitedTransactions = setTypeTransactions(
      user.account.debitedTransactions,
      "Cash Out"
    );
    const creditedTransactions = setTypeTransactions(
      user.account.creditedTransactions,
      "Cash In"
    );
    setTransactions(
      orderByListDate([...debitedTransactions, ...creditedTransactions])
    );

    setFilterTransactions(
      orderByListDate([...debitedTransactions, ...creditedTransactions])
    );
  };

  const orderByListDate = (list: ITransaction[]) => {
    return list.sort(
      (a, b) => Date.parse(b.createdAt) - Date.parse(a.createdAt)
    );
  };

  const setTypeTransactions = (list: ITransaction[], type: string) => {
    const listType: ITransaction[] = list.map((transaction) => {
      return { ...transaction, type: type };
    });

    return listType;
  };

  const submitTransaction = async (data: ISubmitTransaction) => {
    const { ["NG_TOKEN"]: token } = parseCookies();

    const { value } = data;

    if (token) {
      try {
        api.defaults.headers.common["Authorization"] = `Bearer ${token}`;
        const {
          data: { transaction },
        } = await api.post<ISubmitTransactionResponse>("/users/cashout", {
          ...data,
          value: Number(value),
        });
        setTransactions([
          {
            type: "Cash Out",
            id: transaction.id,
            value: transaction.value,
            createdAt: transaction.createdAt,
          },
          ...transactions,
        ]);
        setFilterTransactions([
          {
            type: "Cash Out",
            id: transaction.id,
            value: transaction.value,
            createdAt: transaction.createdAt,
          },
          ...transactions,
        ]);
        reset();
      } catch (err) {
        reset();
        if (err instanceof AxiosError) {
          if (err.response?.data.message === "User not exists") {
            return toast.error(
              "O usuário informado não existe, informe um usuário da nossa plataforma"
            );
          } else if (
            err.response?.data.message ===
            "Not enough balance for this transaction"
          ) {
            return toast.error(
              "Você não tem saldo suficiente para esta transação"
            );
          }
          return toast.error("Ops algo inesperado aconteceu, tente novamente");
        }
      }
    }
  };

  return (
    <DashboardContext.Provider
      value={{
        transactions,
        setTransactions,
        register,
        handleSubmit,
        submitTransaction,
        user,
        setUser,
        listAllTransactions,
        filterType,
        setFilterType,
        filterTransactions,
        setFilterTransactions,
        filterTransactionType,
        filterTransactionDate,
        date,
        setDate,
      }}
    >
      {children}
    </DashboardContext.Provider>
  );
};

export default DashboardProvider;
