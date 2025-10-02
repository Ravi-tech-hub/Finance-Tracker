import React from "react";
// import CustomPieChart from "../charts/CustomPieChart";
import CustomPieChart from "../charts/CustomPieChart";
const COLOR = ["#875CF5", "#FFA500", "#FA2C37"];
const FinanceOverfiew = ({ totalBalance, totalIncome, totalExpense }) => {
  const balanceData = [
    { name: "Total Balance", amount: totalBalance },
    { name: "Total Income", amount: totalIncome },
    { name: "Total Expense", amount: totalExpense },
  ];
  return (
    <>
      <div className="bg-white p-6 rounded-2xl shadow-md shadow-gray-100 border border-gray-200/50">
        <div className="flex items-center justify-center">
          <h5 className="text-lg font-medium">Financial Overview</h5>
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
export default FinanceOverfiew;
