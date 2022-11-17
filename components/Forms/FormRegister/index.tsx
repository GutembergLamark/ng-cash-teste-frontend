import { useContext, useEffect } from "react";
import { useRouter } from "next/router";

import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";

import { RiErrorWarningLine } from "react-icons/ri";

import { UserContext } from "../../../contexts/UserProvider";

import Input from "../Input";

import { schemaRegister } from "../../../validators";

import { Error, Form } from "./style";
import { IErrors } from "../types";
import Button from "../../Button";

const FormRegister = () => {
  const { submitRegister } = useContext(UserContext);

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm({
    resolver: yupResolver(schemaRegister),
  });

  const error: IErrors = errors;

  return (
    <Form onSubmit={handleSubmit(submitRegister)}>
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
        placeholder={"Digite um nome para o seu usuário"}
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
        placeholder={"Digite sua senha"}
        register={register}
      />

      <div className="container-label">
        <label htmlFor="confirmPassword">Confirmar senha:</label>
        {errors.confirmPassword && (
          <Error>
            <RiErrorWarningLine size="20" className="error" />
            <span>{error.confirmPassword?.message}</span>
          </Error>
        )}
      </div>
      <Input
        id={"confirmPassword"}
        type={"password"}
        placeholder={"Confirmar a senha"}
        register={register}
      />

      <Button type={"submit"}>Cadastrar</Button>
    </Form>
  );
};

export default FormRegister;
