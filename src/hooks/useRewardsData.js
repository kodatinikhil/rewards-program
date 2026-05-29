import { useEffect, useState } from "react";
import { fetchTransactions } from "../api/rewardsApi";
import { aggregateMonthlyRewards } from "../utils/aggregateMonthlyRewards";
import { calculateTotalRewards } from "../utils/calculateTotalRewards";
import { sortTransactionsByDate } from "../utils/sortTransactionsByDate";

export const useRewardsData = () => {
  const [transactions, setTransactions] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const loadData = async () => {
      try {
        setLoading(true);

        const data = await fetchTransactions();
        setTransactions(sortTransactionsByDate(data));
      } catch (err) {
        setError("Failed to fetch transactions");
      } finally {
        setLoading(false);
      }
    };

    loadData();
  }, []);

  const monthlyRewards = aggregateMonthlyRewards(transactions);
  const totalRewards = calculateTotalRewards(transactions);

  return {
    transactions,
    monthlyRewards,
    totalRewards,
    loading,
    error,
  };
};