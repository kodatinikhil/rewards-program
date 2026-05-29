import PropTypes from "prop-types";
import { Table } from "../common/Table";
import { calculateRewardPoints } from "../../utils/calculateRewardPoints";

export const TransactionsTable = ({ transactions }) => {
  const columns = [
    "Transaction ID",
    "Customer Name",
    "Date",
    "Product",
    "Amount",
    "Reward Points",
  ];

  const data = transactions.map((tx) => ({
    transactionId: tx.transactionId,
    customerName: tx.customerName,
    purchaseDate: tx.purchaseDate,
    product: tx.product,
    amount: tx.amount,
    rewardPoints: calculateRewardPoints(tx.amount),
  }));

  return <Table columns={columns} data={data} />;
};

TransactionsTable.propTypes = {
  transactions: PropTypes.array.isRequired,
};