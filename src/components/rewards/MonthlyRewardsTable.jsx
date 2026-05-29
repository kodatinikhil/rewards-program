import PropTypes from "prop-types";
import { Table } from "../common/Table";

export const MonthlyRewardsTable = ({ monthlyRewards }) => {
  const columns = [
    "Customer ID",
    "Name",
    "Month",
    "Year",
    "Reward Points",
  ];

  const data = monthlyRewards.map((item) => ({
    customerId: item.customerId,
    customerName: item.customerName,
    month: item.month,
    year: item.year,
    rewardPoints: item.rewardPoints,
  }));

  return <Table columns={columns} data={data} />;
};

MonthlyRewardsTable.propTypes = {
  monthlyRewards: PropTypes.array.isRequired,
};