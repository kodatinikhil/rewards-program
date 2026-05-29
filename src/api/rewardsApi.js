import { transactions } from "../data/transactions";

export const fetchTransactions = async () => {
  return Promise.resolve(transactions);
};