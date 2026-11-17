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
    <div className="bg-white p-6 rounded-lg shadow-sm shadow-slate-200/70 border border-slate-200">
      <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-4">
        <div>
          <h5 className="text-lg font-semibold text-slate-950">
            Expense Overview
          </h5>
          <p className="text-sm text-slate-500 mt-1">
            Track spending trends and understand where your money goes.
          </p>
        </div>
        <button
          className="flex items-center justify-center gap-1.5 text-xs md:text-sm font-semibold bg-rose-600 text-white whitespace-nowrap border border-rose-600 rounded-lg px-4 py-2.5 cursor-pointer hover:bg-rose-700"
          onClick={onAddExpense}
        >
          <LuPlus className="text-lg" />
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
