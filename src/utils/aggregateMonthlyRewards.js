import { calculateRewardPoints } from "./calculateRewardPoints";

export const aggregateMonthlyRewards = (transactions) => {
  if (!Array.isArray(transactions)) return [];

  const grouped = transactions.reduce((acc, tx) => {
    const date = new Date(tx.purchaseDate);
    const month = date.toLocaleString("default", { month: "long" });
    const year = date.getFullYear();

    const points = calculateRewardPoints(tx.amount);

    const key = `${tx.customerId}-${month}-${year}`;

    if (!acc[key]) {
      acc[key] = {
        customerId: tx.customerId,
        customerName: tx.customerName,
        month,
        year,
        rewardPoints: 0,
      };
    }

    acc[key].rewardPoints += points;

    return acc;
  }, {});

  return Object.values(grouped).sort((a, b) => {
    if (a.year !== b.year) return a.year - b.year;

    const monthA = new Date(`${a.month} 1, ${a.year}`);
    const monthB = new Date(`${b.month} 1, ${b.year}`);

    return monthA - monthB;
  });
};