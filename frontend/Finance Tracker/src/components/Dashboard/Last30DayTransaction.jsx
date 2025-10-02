import { useEffect, useState } from "react";
import { prepareExpenseBarCharData } from "../../utils/helper";
import CustomBarChart from "../charts/CustomBarChart";

const Last30DayTransaction = ({ transactions, onSeeMore }) => {
  const [charData, setCharData] = useState([]);
  useEffect(() => {
    console.log("Raw input data:", transactions);
    const result = prepareExpenseBarCharData(transactions);
    setCharData(result);
    console.log("Prepared chart data:", result);
    return () => {};
  }, [transactions]);

  return (
    <>
      <div className="bg-white p-6 rounded-2xl shadow-md shadow-gray-100 col-span-1 border border-gray-200/50">
        <div className="flex items-center justify-between">
          <h5 className="text-lg">Last 30 Day Expenses</h5>
        </div>
        <CustomBarChart data={charData}></CustomBarChart>
      </div>
    </>
  );
};
export default Last30DayTransaction;
