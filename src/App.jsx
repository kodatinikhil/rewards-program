import { useEffect, useState , useRef } from "react";

import { transactions as initialData } from "./data/transactions";

import { AddTransactionForm } from "./components/transactions/AddTransactionForm";
import { TransactionsTable } from "./components/transactions/TransactionsTable";
import { MonthlyRewardsTable } from "./components/rewards/MonthlyRewardsTable";
import { TotalRewardsTable } from "./components/rewards/TotalRewardsTable";

import { calculateRewardPoints } from "./utils/calculateRewardPoints";
import { sortTransactionsByDate } from "./utils/sortTransactionsByDate";
import { aggregateMonthlyRewards } from "./utils/aggregateMonthlyRewards";
import { calculateTotalRewards } from "./utils/calculateTotalRewards";

import "./App.css";

function App() {
  const [transactions, setTransactions] = useState(initialData);
  const [monthly, setMonthly] = useState([]);
  const [total, setTotal] = useState([]);
  const transactionCounter = useRef(1);
  const customerCounter = useRef(1);
  const customerMap = useRef({});

  useEffect(() => {
    const sorted = sortTransactionsByDate(transactions);

    const enriched = sorted.map((t) => ({
      ...t,
      rewardPoints: calculateRewardPoints(t.amount),
    }));

    setMonthly(aggregateMonthlyRewards(enriched));
    setTotal(calculateTotalRewards(enriched));
  }, [transactions]);

  const handleAdd = (txn) => {
    let customerId;

    if (customerMap.current[txn.customerName]) {
      customerId = customerMap.current[txn.customerName];
    } else {
      customerId = customerCounter.current++;
      customerMap.current[txn.customerName] = customerId;
    }

    const newTransaction = {
      transactionId: transactionCounter.current++,
      customerId,
      customerName: txn.customerName,
      amount: txn.amount,
      purchaseDate: txn.purchaseDate,
      product: txn.product,
    };

    setTransactions((prev) => [...prev, newTransaction]);
  };

  return (
    <div className="container">
      <h1>Rewards Dashboard</h1>

      {/* <AddTransactionForm onAdd={handleAdd} /> */}

      <div className="card">
        <h2>Transactions</h2>
        <TransactionsTable transactions={transactions} />
      </div>

      <div className="card">
        <h2>Monthly Rewards</h2>
        <MonthlyRewardsTable monthlyRewards={monthly} />
      </div>

      <div className="card">
        <h2>Total Rewards</h2>
        <TotalRewardsTable totalRewards={total} />
      </div>
    </div>
  );
}

export default App;