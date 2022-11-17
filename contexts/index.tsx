import { ReactNode } from "react";
import DashboardProvider from "./DashboardProvider";
import UserProvider from "./UserProvider";

interface IProps {
  children: ReactNode;
}

const Provider = ({ children }: IProps) => {
  return (
    <UserProvider>
      <DashboardProvider>{children}</DashboardProvider>
    </UserProvider>
  );
};

export default Provider;
