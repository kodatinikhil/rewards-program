import { calculateRewardPoints } from "./calculateRewardPoints";

export const aggregateMonthlyRewards = (transactions) => {
  if (!Array.isArray(transactions)) return [];

  const grouped = transactions.reduce((acc, tx) => {
    const date = new Date(tx.purchaseDate);

    const monthIndex = date.getMonth();
    const year = date.getFullYear();

    const monthName = date.toLocaleString("default", { month: "long" });

    const points =
      tx.rewardPoints ?? calculateRewardPoints(tx.amount);

    const key = `${tx.customerId}-${year}-${monthIndex}`;

    if (!acc[key]) {
      acc[key] = {
        customerId: tx.customerId,
        customerName: tx.customerName,
        month: monthName,
        year,
        rewardPoints: 0,
        _monthIndex: monthIndex,
      };
    }

    acc[key].rewardPoints += points;

    return acc;
  }, {});

  return Object.values(grouped)
    .sort((a, b) => {
      if (a.year !== b.year) return a.year - b.year;
      return a._monthIndex - b._monthIndex;
    })
    .map(({ _monthIndex, ...rest }) => rest);
};