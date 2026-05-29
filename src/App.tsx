import { useRewardsData } from "./hooks/useRewardsData";

import { TransactionsTable } from "./components/transactions/TransactionsTable";
import { MonthlyRewardsTable } from "./components/rewards/MonthlyRewardsTable";
import { TotalRewardsTable } from "./components/rewards/TotalRewardsTable";

import { Loader } from "./components/common/Loader";
import { ErrorMessage } from "./components/common/ErrorMessage";
import "./App.css";

function App() {
  const {
    transactions,
    monthlyRewards,
    totalRewards,
    loading,
    error,
  } = useRewardsData();

  if (loading) {
    return <Loader />;
  }

  if (error) {
    return <ErrorMessage message={error} />;
  }

return (
  <div className="container">
    <h1>Rewards Program Dashboard</h1>

    <div className="card">
      <h2>Transactions</h2>
      <TransactionsTable transactions={transactions} />
    </div>

    <div className="card">
      <h2>Monthly Rewards</h2>
      <MonthlyRewardsTable monthlyRewards={monthlyRewards} />
    </div>

    <div className="card">
      <h2>Total Rewards</h2>
      <TotalRewardsTable totalRewards={totalRewards} />
    </div>
  </div>
);
}

export default App;