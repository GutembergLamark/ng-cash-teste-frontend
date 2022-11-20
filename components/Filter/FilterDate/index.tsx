import { useContext } from "react";

import { DashboardContext } from "../../../contexts/DashboardProvider";

import { Input } from "./style";

const FilterDate = () => {
  const { date, setDate, filterTransactionDate, setFilterType } =
    useContext(DashboardContext);

  return (
    <Input
      type="date"
      className="filter-date"
      value={date}
      onChange={(ev) => {
        setDate(ev.target.value);
        filterTransactionDate(ev.target.value);
        setFilterType("Todos");
      }}
    />
  );
};

export default FilterDate;
