import { useContext, useEffect, useState } from "react";

import { GetServerSideProps } from "next";

import { RiEyeLine, RiEyeCloseLine } from "react-icons/ri";
import { parseCookies } from "nookies";
import { Menu, MenuButton, MenuList, MenuItem, Button } from "@chakra-ui/react";
import { ChevronDownIcon } from "@chakra-ui/icons";

import api from "../../services/api";

import { DashboardContext } from "../../contexts/DashboardProvider";

import Modals from "../../components/Modals";

import { IProps } from "./types";

import { Main } from "../../styles/Dashboard/style";

const Dashboard = ({ dataUser }: IProps) => {
  const {
    transactions,
    user,
    setUser,
    listAllTransactions,
    filterType,
    setFilterType,
    filterTransactions,
    filterTransactionType,
    filterTransactionDate,
  } = useContext(DashboardContext);

  const [see, setSee] = useState(true);
  const [date, setDate] = useState("false");

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
        <section>
          {see ? (
            <div className="info-user">
              <h1>Olá, @{user?.username}</h1>
              <div>
                <strong>
                  {user?.account.balance.toLocaleString("pt-br", {
                    style: "currency",
                    currency: "BRL",
                  })}
                </strong>
                <RiEyeLine size={"25px"} onClick={() => setSee(!see)} />
              </div>
            </div>
          ) : (
            <div className="info-user">
              <h1>Olá, @{user?.username}</h1>
              <div>
                <strong>--------</strong>
                <RiEyeCloseLine size={"25px"} onClick={() => setSee(!see)} />
              </div>
            </div>
          )}

          <h2>Transações recentes</h2>
          <div className="dropdown-filter">
            <Menu>
              <MenuButton
                as={Button}
                rightIcon={<ChevronDownIcon />}
                color="var(--black)"
                fontSize="1rem"
                p={12}
                bgColor="#eee"
                borderRadius={5}
                maxWidth="145px"
                onClick={() => {
                  setDate("");
                  setFilterType("Todos");
                  filterTransactionType();
                }}
              >
                {filterType}
              </MenuButton>
              <MenuList
                display="flex"
                flexDirection="column"
                zIndex="10"
                bgColor={"var(--black)"}
                borderRadius={5}
              >
                {filterType !== "Todos" && (
                  <MenuItem
                    color="white"
                    bgColor={"var(--black)"}
                    textAlign="left"
                    _hover={{ bgColor: "var(--black-1)" }}
                    width="100%"
                    p={12}
                    borderRadius={5}
                    onClick={() => {
                      setFilterType("Todos");
                      filterTransactionType();
                    }}
                  >
                    Todos
                  </MenuItem>
                )}
                {filterType !== "Cash In" && (
                  <MenuItem
                    color="white"
                    bgColor={"var(--black)"}
                    textAlign="left"
                    _hover={{ bgColor: "var(--black-1)" }}
                    width="100vw"
                    p={12}
                    borderRadius={5}
                    onClick={() => {
                      setFilterType("Cash In");
                      filterTransactionType("Cash In");
                    }}
                  >
                    Cash In
                  </MenuItem>
                )}

                {filterType !== "Cash Out" && (
                  <MenuItem
                    color="white"
                    bgColor={"var(--black)"}
                    textAlign="left"
                    _hover={{ bgColor: "var(--black-1)" }}
                    width="100%"
                    p={12}
                    borderRadius={5}
                    onClick={() => {
                      setFilterType("Cash Out");
                      filterTransactionType("Cash Out");
                    }}
                  >
                    Cash Out
                  </MenuItem>
                )}
              </MenuList>
            </Menu>
            <input
              type="date"
              className="filter-date"
              value={date}
              onChange={(ev) => {
                setDate(ev.target.value);
                filterTransactionDate(ev.target.value);
              }}
            />
          </div>
          <ul>
            {filterTransactions.map((transaction) => {
              const date = new Date(transaction.createdAt);

              const dateFormated = `${date.getDate()}/
                ${
                  date.getMonth() + 1
                }/${date.getFullYear()} - ${date.getHours()}h${date.getMinutes()}`;

              return (
                <li key={transaction.id}>
                  <h3
                    className={
                      transaction.type === "Cash In" ? "cashin" : "cashout"
                    }
                  >
                    {transaction.type}
                  </h3>
                  <strong>R$ {transaction.value}</strong>
                  <p>{dateFormated}</p>
                </li>
              );
            })}
          </ul>

          <Modals />
        </section>
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
