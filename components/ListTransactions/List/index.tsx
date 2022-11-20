import { useContext } from "react";
import { DashboardContext } from "../../../contexts/DashboardProvider";
import Transaction from "../Transaction";
import { Container } from "./style";

const List = () => {
  const { filterTransactions } = useContext(DashboardContext);

  return (
    <>
      {filterTransactions.length > 0 ? (
        <Container>
          {filterTransactions.map((transaction) => (
            <Transaction key={transaction.id} transaction={transaction} />
          ))}
        </Container>
      ) : (
        <div className="container-empty">
          <h1 className="empty-transaction">Ainda não existem transações...</h1>
        </div>
      )}
    </>
  );
};

export default List;
