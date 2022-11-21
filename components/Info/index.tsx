import { useContext, useState } from "react";

import copy from "copy-to-clipboard";
import { toast } from "react-toastify";
import { RiEyeLine, RiEyeCloseLine } from "react-icons/ri";
import { MdContentCopy } from "react-icons/md";

import { DashboardContext } from "../../contexts/DashboardProvider";

import { ContainerUser } from "./style";

const Info = () => {
  const { user } = useContext(DashboardContext);

  const [see, setSee] = useState(true);

  return (
    <>
      <ContainerUser>
        <div className="user-name">
          <h1>Olá, @{user?.username}</h1>
          <MdContentCopy
            onClick={() => {
              copy(user!.username);
              toast.success("Username copiado para área de transferência");
            }}
          />
        </div>
        {see ? (
          <div>
            <strong>
              {new Intl.NumberFormat("pt-BR", {
                style: "currency",
                currency: "BRL",
              }).format(user?.account.balance!)}
            </strong>
            <RiEyeLine size={"25px"} onClick={() => setSee(!see)} />
          </div>
        ) : (
          <div>
            <strong>--------</strong>
            <RiEyeCloseLine size={"25px"} onClick={() => setSee(!see)} />
          </div>
        )}
      </ContainerUser>
    </>
  );
};

export default Info;
