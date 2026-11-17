import React from "react";
import CustomPieChart from "../charts/CustomPieChart";
const COLOR = ["#059669", "#4f46e5", "#e11d48"];
const FinanceOverview = ({ totalBalance, totalIncome, totalExpense }) => {
  const balanceData = [
    { name: "Total Balance", amount: totalBalance },
    { name: "Total Income", amount: totalIncome },
    { name: "Total Expense", amount: totalExpense },
  ];
  return (
    <>
      <div className="bg-white p-6 rounded-lg shadow-sm shadow-slate-200/70 border border-slate-200">
        <div className="flex items-center justify-between">
          <h5 className="text-lg font-semibold text-slate-950">
            Financial Overview
          </h5>
        </div>

        <CustomPieChart
          data={balanceData}
          label="Total Balance"
          totalAmount={`${totalBalance}`}
          color={COLOR}
          showTextAnchor
        />
      </div>
    </>
  );
};
export default FinanceOverview;
