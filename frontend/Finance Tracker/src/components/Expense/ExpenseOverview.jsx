import { LuPlus } from "react-icons/lu";
import { useState, useEffect } from "react";
import { prepareExpenseLineChartData } from "../../utils/helper";
import CustomLineChart from "../charts/CustomLineChart";

const ExpenseOverview = ({ transaction, onAddExpense }) => {
  const [chartData, setChartData] = useState([]);
  useEffect(() => {
    const result = prepareExpenseLineChartData(transaction);
    setChartData(result);
    return () => {};
  }, [transaction]);

  return (
    <div className="bg-white p-6 rounded-2xl shadow-md shadow-gray-100 border border-gray-200/50">
      <div className="flex items-center justify-between ">
        <div>
          <h5 className="text-lg font-medium ">Expense Overview </h5>
          <p className="text-sm text-gray-900">
            Track your Spending Trends over time and gain insight your money
            goes
          </p>
        </div>
        <button
          className="flex items-center gap-1.5 text-xs md:text-sm font-medium bg-green-100 text-green-600 whitespace-nowrap border border-green-200 rounded-lg px-3 py-2 cursor-pointer "
          onClick={onAddExpense}
        >
          <LuPlus className=" text-lg " />
          Add Expense
        </button>
      </div>
      <div className="mt-10">
        <CustomLineChart data={chartData} />
      </div>
    </div>
  );
};
export default ExpenseOverview;
