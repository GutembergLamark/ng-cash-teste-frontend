import { createContext, useEffect, useState } from "react";
import { useRouter } from "next/router";

import { toast } from "react-toastify";
import { setCookie, parseCookies } from "nookies";

import api from "../../services/api";

import {
  ILoginSubmit,
  IProps,
  IRegisterSubmit,
  IUserContext,
} from "./types";

export const UserContext = createContext<IUserContext>({} as IUserContext);

const UserProvider = ({ children, props }: IProps) => {

  const router = useRouter();

  function submitLogin(data: ILoginSubmit) {
    api
      .post("/session", data)
      .then(({ data: { token } }) => {
        setCookie(null, "NG_TOKEN", token, {
          path: "/dashboard",
          maxAge: 86400,
        });
        toast.success("Login realizado com sucesso");
        router.push("/dashboard");
      })
      .catch((err) => {
        toast.error("Usuário ou senha incorretos!");
      });
  }

  function submitRegister(data: IRegisterSubmit) {
    delete data.confirmPassword;
    api
      .post("/users", data)
      .then(() => {
        toast.success("Conta criada com sucesso");
        router.push("/login");
      })
      .catch(() => {
        toast.error("Ops! Algo deu errado");
      });
  }

  return (
    <UserContext.Provider
      value={{
        submitLogin,
        submitRegister,
      }}
    >
      {children}
    </UserContext.Provider>
  );
};

export default UserProvider;

export const getServerSideProps = (context: any) => {
  const cookies = parseCookies(context);
  console.log(context);

  return {
    props: {
      NG_TOKEN: cookies.NG_TOKEN,
    },
  };
};
