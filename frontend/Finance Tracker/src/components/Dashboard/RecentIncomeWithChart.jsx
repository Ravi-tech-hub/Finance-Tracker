import React, { useEffect, useState } from "react";
import CustomPieChart from "../charts/CustomPieChart";
const COLOR = ["#875CF5", "#FFA500", "#FA2C37", "#4F39F6"];
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
    <div className="bg-white p-6 rounded-2xl shadow-md shadow-gray-100 col-span-1 border border-gray-200/50">
      <div className="flex items-center justify-between">
        <h5 className="text-lg">Last 60 Day Income</h5>
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
