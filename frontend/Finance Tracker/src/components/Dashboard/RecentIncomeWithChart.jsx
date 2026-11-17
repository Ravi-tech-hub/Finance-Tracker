import React, { useEffect, useState } from "react";
import CustomPieChart from "../charts/CustomPieChart";
const COLOR = ["#059669", "#4f46e5", "#f59e0b", "#e11d48"];
const RecentIncomeWithChart = ({ data, totalIncome }) => {
  const [charData, setCharData] = useState([]);
  const prepareChardata = () => {
    const dataArr = data.map((item) => ({
      name: item?.source,
      amount: item?.amount,
    }));
    setCharData(dataArr);
  };
  useEffect(() => {
    prepareChardata();
    return () => {};
  }, [data]);

  return (
    <div className="bg-white p-6 rounded-lg shadow-sm shadow-slate-200/70 col-span-1 border border-slate-200">
      <div className="flex items-center justify-between">
        <h5 className="text-lg font-semibold text-slate-950">
          Last 60 Days Income
        </h5>
      </div>
      <CustomPieChart
        data={charData}
        label="Total Income"
        totalAmount={`${totalIncome}`}
        color={COLOR}
        showTextAnchor
      />
    </div>
  );
};
export default RecentIncomeWithChart;
