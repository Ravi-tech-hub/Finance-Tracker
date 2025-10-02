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
    <div className="bg-white p-6 rounded-2xl shadow-md shadow-gray-100 border border-gray-200/50">
      <div className="flex items-center justify-between ">
        <div>
          <h5 className="text-lg font-medium ">Income Overview </h5>
          <p className="text-sm text-gray-900">
            Track your Earning over time and analyze your income
          </p>
        </div>
        <button
          className="flex items-center gap-1.5 text-xs md:text-sm font-medium bg-green-100 text-green-600 whitespace-nowrap border border-green-200 rounded-lg px-3 py-2 cursor-pointer "
          onClick={onAddIncome}
        >
          <LuPlus className=" text-lg " />
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
