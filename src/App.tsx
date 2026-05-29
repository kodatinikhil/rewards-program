import { useRewardsData } from "./hooks/useRewardsData";

import { TransactionsTable } from "./components/transactions/TransactionsTable";
import { MonthlyRewardsTable } from "./components/rewards/MonthlyRewardsTable";
import { TotalRewardsTable } from "./components/rewards/TotalRewardsTable";

import { Loader } from "./components/common/Loader";
import { ErrorMessage } from "./components/common/ErrorMessage";

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
    <div style={{ padding: "20px" }}>
      <h1>Rewards Program Dashboard</h1>

      <h2>Transactions</h2>
      <TransactionsTable transactions={transactions} />

      <h2>Monthly Rewards</h2>
      <MonthlyRewardsTable monthlyRewards={monthlyRewards} />

      <h2>Total Rewards</h2>
      <TotalRewardsTable totalRewards={totalRewards} />
    </div>
  );
}

export default App;