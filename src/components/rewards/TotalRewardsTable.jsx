import PropTypes from "prop-types";
import { Table } from "../common/Table";

export const TotalRewardsTable = ({ totalRewards }) => {
  const columns = ["Customer Name", "Total Reward Points"];

  const data = totalRewards.map((item) => ({
    customerName: item.customerName,
    rewardPoints: item.rewardPoints,
  }));

  return <Table columns={columns} data={data} />;
};

TotalRewardsTable.propTypes = {
  totalRewards: PropTypes.array.isRequired,
};