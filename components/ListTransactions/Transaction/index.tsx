import { CardTransaction } from "./style";
import { IProps } from "./types";

const Transaction = ({ transaction }: IProps) => {
  const date = new Date(transaction.createdAt);

  const dateFormated = `${date.getDate()}/
                ${
                  date.getMonth() + 1
                }/${date.getFullYear()} - ${date.getHours()}h${date.getMinutes()}`;

  const value = Number(transaction.value).toFixed(2);

  return (
    <CardTransaction>
      <h3 className={transaction.type === "Cash In" ? "cashin" : "cashout"}>
        {transaction.type}
      </h3>
      <strong>R$ {value.toString().replace(".", ",")}</strong>
      <p>{dateFormated}</p>
    </CardTransaction>
  );
};

export default Transaction;
