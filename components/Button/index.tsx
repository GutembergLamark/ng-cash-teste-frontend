import { ContainerButton } from "./style";
import { IProps } from "./types";

const Button = ({ children, type, dark, callback }: IProps) => {
  return (
    <ContainerButton
      dark={String(dark)}
      type={type}
      onClick={() => {
        callback && callback();
      }}
    >
      {children}
      <div className="button__horizontal"></div>
      <div className="button__vertical"></div>
    </ContainerButton>
  );
};

export default Button;
