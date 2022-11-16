import { useState } from "react";

import Image from "next/image";

import Link from "next/link";
import { Heading } from "./style";

const Header = () => {
  const [click, setClick] = useState(false);
  return (
    <Heading click={click}>
      <div className="header-content">
        <figure>
          <Link href="/">
            <Image
              src="/logo-ngcash-branco.svg"
              alt="Logo NG Cash"
              width="70"
              height="70"
            />
          </Link>
        </figure>
        <div className="dropdown">
          <button className="dropdown__click" onClick={() => setClick(!click)}>
            <span className="hamburguer"></span>
          </button>
          <div className="dropdown__content">
            <Link href="/login">Entrar</Link>
            <Link href="/register">Cadastrar</Link>
          </div>
        </div>
      </div>
    </Heading>
  );
};

export default Header;
