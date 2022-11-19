import { useContext, useEffect } from "react";

import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";

import { RiErrorWarningLine } from "react-icons/ri";

import { UserContext } from "../../../contexts/FormProvider";

import Input from "../Input";
import { schemaLogin } from "../../../validators";

import { IErrors } from "../types";

import { Error, Form } from "./style";
import Button from "../../Button";

const FormLogin = () => {
  const { submitLogin } = useContext(UserContext);

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm({
    resolver: yupResolver(schemaLogin),
  });

  const error: IErrors = errors;

  return (
    <Form onSubmit={handleSubmit(submitLogin)}>
      <div className="container-label">
        <label htmlFor="username">Nome do usuário:</label>
        {errors.username && (
          <Error>
            <RiErrorWarningLine size="20" className="error" />
            <span>{error.username?.message}</span>
          </Error>
        )}
      </div>
      <Input
        id={"username"}
        type={"text"}
        placeholder={"Digite o nome do seu usuário"}
        register={register}
      />

      <div className="container-label">
        <label htmlFor="password">Senha:</label>
        {errors.password && (
          <Error>
            <RiErrorWarningLine size="20" className="error" />
            <span>{error.password?.message}</span>
          </Error>
        )}
      </div>
      <Input
        id={"password"}
        type={"password"}
        placeholder={"Digite a sua senha"}
        register={register}
      />

      <Button type={"submit"}>Entrar</Button>
    </Form>
  );
};

export default FormLogin;
