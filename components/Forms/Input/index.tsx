import { useState } from "react";

import { IoMdEyeOff, IoMdEye } from "react-icons/io";

import { AiOutlineUser } from "react-icons/ai";
import { TbLock } from "react-icons/tb";

import { ContainerInput } from "./style";

const Input = ({ icon, type, placeholder }: any) => {
  const [showPassword, setShowPassword] = useState(type);

  return (
    <ContainerInput>
      {icon === "username" ? <AiOutlineUser /> : <TbLock />}
      <input type={showPassword} placeholder={placeholder} />
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
