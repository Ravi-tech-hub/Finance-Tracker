import { useState, useEffect } from "react";
import axiosInstance from "../../utils/axiosinstance";
import { API_PATHS } from "../../utils/apiPath";
import TransactionInfoCard from "../card/TransactionInfoCard";
import moment from "moment";
import DashboardLayout from "../Layout/DashboardLayout";
import { useUserAuth } from "../../hook/useUserAuth";

const AllTransaction = () => {
  useUserAuth();
  const [dashBoardData, setDashBoardData] = useState(null);

  const fetchDashboardData = async () => {
    try {
      const response = await axiosInstance.get(API_PATHS.DASHBOARD.GET_DATA);
      if (response.data) {
        setDashBoardData(response.data);
      }
    } catch (error) {
      console.log(
        "Something went wrong while loading transactions:",
        error.response?.data || error.message
      );
    }
  };

  useEffect(() => {
    fetchDashboardData();

    return () => {};
  }, []);

  return (
    <DashboardLayout activeMenu="Dashboard">
      <div className="mx-auto max-w-4xl bg-white p-6 rounded-lg shadow-sm shadow-slate-200/70 border border-slate-200">
        <div>
          <p className="text-sm font-medium text-emerald-700">Ledger</p>
          <h1 className="text-2xl font-semibold text-slate-950 mt-1">
            All Transactions
          </h1>
        </div>
        <div className="mt-5 divide-y divide-slate-100">
          {dashBoardData?.recentTranscation?.map((item) => (
            <TransactionInfoCard
              key={item._id}
              title={item.type === "expense" ? item.category : item.source}
              icon={item.icon}
              date={moment(item.date).format("DD MMM YYYY")}
              amount={item.amount}
              type={item.type}
              hideDeleteBtn
            />
          ))}
          {!dashBoardData?.recentTranscation?.length && (
            <p className="text-sm text-slate-500 py-8 text-center">
              No transactions found.
            </p>
          )}
        </div>
      </div>
    </DashboardLayout>
  );
};
export default AllTransaction;
