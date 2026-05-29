import PropTypes from "prop-types";
import { Table } from "../common/Table";
import { usePagination } from "../../utils/usePagination";
import { Pagination } from "../common/pagination";

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

MonthlyRewardsTable.propTypes = {
  monthlyRewards: PropTypes.array.isRequired,
};