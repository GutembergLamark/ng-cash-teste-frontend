import { createContext } from "react";
import { useRouter } from "next/router";

import { toast } from "react-toastify";
import { setCookie } from "nookies";

import api from "../../services/api";

import { ILoginSubmit, IProps, IRegisterSubmit, IUserContext } from "./types";

export const UserContext = createContext<IUserContext>({} as IUserContext);

const UserProvider = ({ children }: IProps) => {
  const router = useRouter();

  function submitLogin(data: ILoginSubmit) {
    api
      .post("/session", data)
      .then(({ data: { token } }) => {
        setCookie(null, "NG_TOKEN", token, {
          path: "/",
          maxAge: 86400, // 24 hours
        });

        toast.success("Login realizado com sucesso");

        router.push("/dashboard");
      })
      .catch((err) => {
        if (err.response.data.message === "Invalid user or password") {
          return toast.error("Usuário ou senha incorretos!");
        }

        return toast.error("Ops, algo deu errardo, tente novamente!");
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
      .catch((err) => {
        console.log(err);
        if (err.response.data.message === "Username already exists") {
          return toast.error("Já existe um usuário cadastrado com este nome!");
        }
        return toast.error("Ops! Algo deu errado");
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
