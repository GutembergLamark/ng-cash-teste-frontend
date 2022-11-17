import { useEffect, useState } from "react";

import Image from "next/image";
import { useRouter } from "next/router";

import nookies, { parseCookies } from "nookies";

import Link from "next/link";

import { IProps } from "./types";
import { Heading } from "./style";

const Header = ({ props }: IProps) => {
  const [click, setClick] = useState<boolean>(false);

  const router = useRouter();

  const slug = router.pathname.replaceAll("/", "");

  return (
    <Heading click={click}>
      <div className="header-content">
        <figure>
          <Link href="/">
            <Image
              src="/images/logo-ngcash-branco.svg"
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
          {slug === "dashboard" ? (
            <div className="dropdown__content">
              <Link
                href="/dashboard"
                onClick={() => {
                  setClick(false);
                }}
              >
                Conta
              </Link>
              <Link
                href="/"
                onClick={() => {
                  nookies.destroy(null, "NG_TOKEN");
                  setClick(false);
                }}
              >
                Sair
              </Link>
            </div>
          ) : (
            <div className="dropdown__content">
              <Link
                href="/login"
                onClick={() => {
                  setClick(false);
                }}
              >
                Entrar
              </Link>
              <Link
                href="/register"
                onClick={() => {
                  setClick(false);
                }}
              >
                Cadastrar
              </Link>
            </div>
          )}
        </div>
      </div>
    </Heading>
  );
};

export default Header;

export const getServerSideProps = (context: any) => {
  const cookies = parseCookies(context);
  console.log(context);

  return {
    props: {
      NG_TOKEN: cookies.NG_TOKEN,
    },
  };
};
