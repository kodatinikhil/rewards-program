import PropTypes from "prop-types";
import { Table } from "../common/Table";
import { calculateRewardPoints } from "../../utils/calculateRewardPoints";
import { usePagination } from "../../utils/usePagination";
import { Pagination } from "../common/pagination";

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

  const {
    paginatedData,
    currentPage,
    totalPages,
    nextPage,
    prevPage,
    goToPage,
  } = usePagination(data, 5);

  return (
    <>
      <Table columns={columns} data={paginatedData} />

      <Pagination
        currentPage={currentPage}
        totalPages={totalPages}
        nextPage={nextPage}
        prevPage={prevPage}
        goToPage={goToPage}
      />
    </>
  );
};

TransactionsTable.propTypes = {
  transactions: PropTypes.array.isRequired,
};