import { useContext, useState } from "react";

import Head from "next/head";

import { RiEyeLine, RiEyeCloseLine } from "react-icons/ri";

import Modals from "../../components/Modals";

import { DashboardContext } from "../../contexts/DashboardProvider";

import { Main } from "../../styles/Dashboard/style";

const Dashboard = () => {
  const { transactions, user } = useContext(DashboardContext);
  const [see, setSee] = useState(true);

  return (
    <>
      <Head>
        {/* <script
          dangerouslySetInnerHTML={{
            __html: `
            if (!document.cookie || !document.cookie.includes("NG_TOKEN")) {
                window.location.href = "/"
            }
        `,
          }}
        /> */}
      </Head>

      <Main>
        {}
        <section>
          {see ? (
            <div>
              <strong>R$ 100,00{user.account?.balance}</strong>
              <RiEyeLine size={"25px"} onClick={() => setSee(!see)} />
            </div>
          ) : (
            <div>
              <strong>--------</strong>
              <RiEyeCloseLine size={"25px"} onClick={() => setSee(!see)} />
            </div>
          )}
          <h2>Transações recentes</h2>
          <ul>
            {transactions.map((transaction) => {
              return <li key={transaction.id}>{transaction.value}</li>;
            })}
          </ul>
          <Modals />
        </section>
      </Main>
    </>
  );
};

export default Dashboard;
