interface ITransaction {
  id: string;
  value: number;
  createdAt: string;
}

interface IAccount {
  id: string;
  balance: number;
  creditedTransactions: ITransaction[];
  debitedTransactions: ITransaction[];
}

interface IUser {
  id: string;
  username: string;
  account: IAccount;
}

export interface IProps {
  dataUser: IUser;
}
