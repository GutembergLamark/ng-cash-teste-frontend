import { createContext, useEffect, useState } from "react";

import { parseCookies } from "nookies";
import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import { toast } from "react-toastify";

import api from "../../services/api";
import { schemaCreateTransaction } from "../../validators";

import {
  IDashboardContext,
  IProps,
  ISubmitTransaction,
  ITransaction,
  IUser,
} from "./types";

export const DashboardContext = createContext<IDashboardContext>(
  {} as IDashboardContext
);

const DashboardProvider = ({ children, props }: IProps) => {
  const [transactions, setTransactions] = useState<ITransaction[]>([]);
  const [user, setUser] = useState<IUser>({} as IUser);

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm({
    resolver: yupResolver(schemaCreateTransaction),
  });

  useEffect(() => {}, []);

  useEffect(() => {
    const loadUser = async () => {
      const token = props?.NG_TOKEN;

      if (token) {
        try {
          api.defaults.headers.common["Authorization"] = `Bearer ${token}`;
          const {
            data: { user },
          } = await api.get("/profile");
          setUser(user);
        } catch (error) {
          toast.error("Ops! Algo deu errado");
        }
      }
    };

    loadUser();
    listAllTransactions();
  }, []);

  const listAllTransactions = async () => {
    const token = props?.NG_TOKEN;

    if (token) {
      try {
        api.defaults.headers.common["Authorization"] = `Bearer ${token}`;
        const {
          data: { account },
        } = await api.get("/users/account");
        setTransactions([
          ...account.creditedTransactions,
          ...account.debitedTransactions,
        ]);
      } catch (err) {
        console.log(err);
      }
    }
  };

  const submitTransaction = async (data: ISubmitTransaction) => {
    const token = props?.NG_TOKEN;

    if (token) {
      try {
        api.defaults.headers.common["Authorization"] = `Bearer ${token}`;
        const {
          data: { transaction },
        } = await api.post("/users/cashout", data);
        setTransactions([
          ...transactions,
          {
            value: transaction.value,
            id: transaction.id,
            createdAt: transaction.createdAt,
          },
        ]);
      } catch (err) {
        console.log(err);
      }
    }
  };

  return (
    <DashboardContext.Provider
      value={{
        listAllTransactions,
        transactions,
        register,
        handleSubmit,
        submitTransaction,
        user,
        setUser,
      }}
    >
      {children}
    </DashboardContext.Provider>
  );
};

export default DashboardProvider;

export const getServerSideProps = (context: any) => {
  const cookies = parseCookies(context);
  console.log(context);

  return {
    props: {
      NG_TOKEN: cookies.NG_TOKEN,
    },
  };
};
