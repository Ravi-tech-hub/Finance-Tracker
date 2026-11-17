import { useEffect, useState } from "react";
import DashboardLayout from "../../components/Layout/DashboardLayout";
import { useUserAuth } from "../../hook/useUserAuth";
import { useNavigate } from "react-router-dom";
import axiosInstance from "../../utils/axiosinstance";
import { API_PATHS } from "../../utils/apiPath";
import { LuHandCoins, LuWalletMinimal } from "react-icons/lu";
import { IoMdCard } from "react-icons/io";
import { addThousandsSeparator } from "../../utils/helper";
import InfoCard from "../../components/card/InfoCard";
import RecentTransaction from "../../components/Dashboard/RecentTransaction";
import FinanceOverview from "../../components/Dashboard/FinanceOverview";
import ExpenseTransaction from "../../components/Dashboard/ExpenseTransaction";
import Last30DayTransaction from "../../components/Dashboard/Last30DayTransaction";
import RecentIncomeWithChart from "../../components/Dashboard/RecentIncomeWithChart";
import RecentIncome from "../../components/Dashboard/RecentIncome";
const Home = () => {
  useUserAuth();

  const navigate = useNavigate();
  const [dashBoardData, setDashBoardData] = useState(null);
  const [loading, setLoading] = useState(false);

  const fetchDashboardData = async () => {
    if (loading) return;
    setLoading(true);
    try {
      const response = await axiosInstance.get(
        `${API_PATHS.DASHBOARD.GET_DATA}`
      );

      if (response.data) {
        setDashBoardData(response.data);
      }
    } catch (error) {
      console.log(
        "Something went wrong while loading dashboard data:",
        error.response?.data || error.message
      );
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchDashboardData();

    return () => {};
  }, []);
  return (
    <>
      <DashboardLayout activeMenu="Dashboard">
        <div className="mx-auto max-w-7xl">
          <div className="mb-6">
            <p className="text-sm font-medium text-emerald-700">Overview</p>
            <h1 className="text-2xl font-semibold text-slate-950 mt-1">
              Your money snapshot
            </h1>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-5">
            <InfoCard
              icon={<IoMdCard />}
              label="Total Balance"
              value={addThousandsSeparator(dashBoardData?.totalBalance || 0)}
              color="bg-emerald-600"
            />

            <InfoCard
              icon={<LuWalletMinimal />}
              label="Total Income"
              value={addThousandsSeparator(dashBoardData?.totalIncome || 0)}
              color="bg-indigo-600"
            />

            <InfoCard
              icon={<LuHandCoins />}
              label="Total Expense"
              value={addThousandsSeparator(dashBoardData?.totalExpense || 0)}
              color="bg-rose-600"
            />
          </div>

          <div className="grid grid-cols-1 xl:grid-cols-2 gap-5 mt-5">
            <RecentTransaction
              transactions={dashBoardData?.recentTranscation}
              onSeeMore={() => navigate("/transactions")}
            />

            <FinanceOverview
              totalBalance={dashBoardData?.totalBalance || 0}
              totalIncome={dashBoardData?.totalIncome || 0}
              totalExpense={dashBoardData?.totalExpense || 0}
            />

            <ExpenseTransaction
              transactions={dashBoardData?.last30DaysExpense?.transaction || []}
              onSeeMore={() => navigate("/expense")}
            />

            <Last30DayTransaction
              transactions={dashBoardData?.last30DaysExpense?.transaction || []}
              onSeeMore={() => navigate("/expense")}
            />

            <RecentIncomeWithChart
              data={
                dashBoardData?.last60DaysIncome?.transaction.slice(0, 4) || []
              }
              totalIncome={dashBoardData?.totalIncome || 0}
            />

            <RecentIncome
              data={dashBoardData?.last60DaysIncome?.transaction || []}
              onSeeMore={() => navigate("/income")}
            />
          </div>
        </div>
      </DashboardLayout>
    </>
  );
};
export default Home;
