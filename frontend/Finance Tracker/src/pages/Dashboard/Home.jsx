import { useEffect, useState } from "react";
import DashboardLayout from "../../components/Layout/DashboardLayout";
import { useUserAuth } from "../../hook/useUserAuth";
import { useNavigate } from "react-router-dom";
import axiosInstance from "../../utils/axiosinstance";
import { API_PATHS } from "../../utils/apiPath";
import { LuHandCoins, LuWalletMinimal } from "react-icons/lu";
import { IoMdCard } from "react-icons/io";
import { addThousandsSeprator } from "../../utils/helper";
import InfoCard from "../../components/card/InfoCard";
import RecentTransction from "../../components/Dashboard/RecentTransction";
import FinanceOverfiew from "../../components/Dashboard/FinanceOverfiew";
import ExpenseTransction from "../../components/Dashboard/ExpenseTransction";
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
        "Something error occured,",
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
        <div className="my-5 mx-auto">
          <div className=" grid grid-cols-1 md:grid-cols-3 gap-6">
            <InfoCard
              icon={<IoMdCard />}
              label="Total Balance"
              value={addThousandsSeprator(dashBoardData?.totalBalance || 0)}
              color="bg-green-500"
            />

            <InfoCard
              icon={<LuWalletMinimal />}
              label="Total Income"
              value={addThousandsSeprator(dashBoardData?.totalIncome || 0)}
              color="bg-orange-500"
            />

            <InfoCard
              icon={<LuHandCoins />}
              label="Total Expense"
              value={addThousandsSeprator(dashBoardData?.totalExpense || 0)}
              color="bg-red-500"
            />
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mt-4">
            <RecentTransction
              transction={dashBoardData?.recentTranscation}
              onSeeMore={() => navigate("/allTransction")}
            />

            <FinanceOverfiew
              totalBalance={dashBoardData?.totalBalance || 0}
              totalIncome={dashBoardData?.totalIncome || 0}
              totalExpense={dashBoardData?.totalExpense || 0}
            />

            <ExpenseTransction
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
