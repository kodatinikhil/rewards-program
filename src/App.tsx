import { useRewardsData } from "./hooks/useRewardsData";

import { TransactionsTable } from "./components/transactions/TransactionsTable";
import { MonthlyRewardsTable } from "./components/rewards/MonthlyRewardsTable";
import { TotalRewardsTable } from "./components/rewards/TotalRewardsTable";

import { Loader } from "./components/common/Loader";
import { ErrorMessage } from "./components/common/ErrorMessage";
import { appStyles } from "../src/styles/appStyles";
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
  <div style={appStyles.container}>
    <h1 style={appStyles.title}>Rewards Program Dashboard</h1>

    <div style={appStyles.card}>
      <h2 style={appStyles.sectionTitle}>Transactions</h2>
      <TransactionsTable transactions={transactions} />
    </div>

    <div style={appStyles.card}>
      <h2 style={appStyles.sectionTitle}>Monthly Rewards</h2>
      <MonthlyRewardsTable monthlyRewards={monthlyRewards} />
    </div>

    <div style={appStyles.card}>
      <h2 style={appStyles.sectionTitle}>Total Rewards</h2>
      <TotalRewardsTable totalRewards={totalRewards} />
    </div>
  </div>
);
}

export default App;