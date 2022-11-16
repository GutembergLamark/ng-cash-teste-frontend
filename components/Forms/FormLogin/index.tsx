import Input from "../Input";
import { Form } from "./style";

const FormLogin = () => {
  return (
    <Form>
      <label htmlFor="username">Username:</label>
      <Input icon={"username"} type={"text"} placeholder={"Digite sua senha"} />

      <label htmlFor="username">Password:</label>
      <Input
        icon={"password"}
        type={"password"}
        placeholder={"Digite seu e-mail"}
      />

      <button className="button">
        Enviar
        <div className="button__horizontal"></div>
        <div className="button__vertical"></div>
      </button>
    </Form>
  );
};

export default FormLogin;
