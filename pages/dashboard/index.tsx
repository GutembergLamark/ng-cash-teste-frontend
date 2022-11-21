import { useContext, useEffect } from "react";

import { GetServerSideProps } from "next";

import { parseCookies } from "nookies";

import { motion } from "framer-motion";

import api from "../../services/api";

import { DashboardContext } from "../../contexts/DashboardProvider";

import Modals from "../../components/Modals";
import Info from "../../components/Info";
import FilterType from "../../components/Filter/FilterType";
import FilterDate from "../../components/Filter/FilterDate";
import List from "../../components/ListTransactions/List";

import { IPropsDashboard } from "../../contexts/DashboardProvider/types";

import { Main } from "../../styles/Dashboard/style";

const Dashboard = ({ dataUser }: IPropsDashboard) => {
  const { setUser, listAllTransactions, transactions } =
    useContext(DashboardContext);

  useEffect(() => {
    listAllTransactions(dataUser);
  }, []);

  useEffect(() => {
    const loadUser = async () => {
      const { ["NG_TOKEN"]: token } = parseCookies();
      const response = await api.get("/profile", {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      });
      setUser(response.data.user);
    };
    loadUser();
  }, [transactions]);

  return (
    <>
      <Main>
        <motion.section
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 1.5 }}
        >
          <Info />
          <h2>Transações recentes</h2>
          <div className="dropdown-filter">
            <FilterType />
            <FilterDate />
          </div>
          <List />
          <Modals />
        </motion.section>
      </Main>
    </>
  );
};

export default Dashboard;

export const getServerSideProps: GetServerSideProps = async (context) => {
  const { ["NG_TOKEN"]: token } = parseCookies(context);

  if (!token) {
    return {
      redirect: {
        destination: "/",
        permanent: false,
      },
    };
  }

  const response = await api.get("/profile", {
    headers: {
      Authorization: `Bearer ${token}`,
    },
  });

  return {
    props: {
      dataUser: response.data.user,
    },
  };
};
