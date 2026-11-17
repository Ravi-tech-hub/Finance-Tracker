import React from "react";
import { LuPlus } from "react-icons/lu";
import CustomBarChart from "../charts/CustomBarChart";
import { prepareIncomeBarCharData } from "../../utils/helper";
import { useState, useEffect } from "react";

const IncomeOverview = ({ transaction, onAddIncome }) => {
  const [charData, setCharData] = useState([]);
  useEffect(() => {
    const result = prepareIncomeBarCharData(transaction);
    setCharData(result);
    return () => {};
  }, [transaction]);

  return (
    <div className="bg-white p-6 rounded-lg shadow-sm shadow-slate-200/70 border border-slate-200">
      <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-4">
        <div>
          <h5 className="text-lg font-semibold text-slate-950">
            Income Overview
          </h5>
          <p className="text-sm text-slate-500 mt-1">
            Track earnings over time and compare your income sources.
          </p>
        </div>
        <button
          className="flex items-center justify-center gap-1.5 text-xs md:text-sm font-semibold bg-emerald-600 text-white whitespace-nowrap border border-emerald-600 rounded-lg px-4 py-2.5 cursor-pointer hover:bg-emerald-700"
          onClick={onAddIncome}
        >
          <LuPlus className="text-lg" />
          Add Income
        </button>
      </div>
      <div className="mt-6">
        <CustomBarChart data={charData} />
      </div>
    </div>
  );
};
export default IncomeOverview;
