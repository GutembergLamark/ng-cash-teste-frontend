import { useContext, useState } from "react";

import { IoMdEyeOff, IoMdEye } from "react-icons/io";

import { AiOutlineUser } from "react-icons/ai";
import { TbLock } from "react-icons/tb";

import { IInput } from "./types";

import { ContainerInput } from "./style";

const Input = ({ id, type, placeholder, register }: IInput) => {
  const [showPassword, setShowPassword] = useState(type);

  return (
    <ContainerInput>
      {id === "username" ? (
        <AiOutlineUser />
      ) : id === "password" || id === "confirmPassword" ? (
        <TbLock />
      ) : (
        <></>
      )}
      <input
        type={showPassword}
        placeholder={placeholder}
        id={id}
        {...register(id)}
      />
      {type === "password" ? (
        showPassword === "password" ? (
          <IoMdEye onClick={() => setShowPassword("text")} />
        ) : (
          <IoMdEyeOff onClick={() => setShowPassword("password")} />
        )
      ) : (
        <></>
      )}
    </ContainerInput>
  );
};

export default Input;
