import { calculateRewardPoints } from "./calculateRewardPoints";

export const calculateTotalRewards = (transactions) => {
  if (!Array.isArray(transactions)) return [];

  const grouped = transactions.reduce((acc, tx) => {
    const points = calculateRewardPoints(tx.amount);

    const key = tx.customerId;

    if (!acc[key]) {
      acc[key] = {
        customerName: tx.customerName,
        rewardPoints: 0,
      };
    }

    acc[key].rewardPoints += points;

    return acc;
  }, {});

  return Object.values(grouped).sort((a, b) =>
    a.customerName.localeCompare(b.customerName)
  );
};