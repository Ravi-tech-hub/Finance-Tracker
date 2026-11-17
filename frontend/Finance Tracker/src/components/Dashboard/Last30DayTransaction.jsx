import { useEffect, useState } from "react";
import { prepareExpenseBarCharData } from "../../utils/helper";
import CustomBarChart from "../charts/CustomBarChart";

const Last30DayTransaction = ({ transactions }) => {
  const [charData, setCharData] = useState([]);
  useEffect(() => {
    const result = prepareExpenseBarCharData(transactions);
    setCharData(result);
    return () => {};
  }, [transactions]);

  return (
    <>
      <div className="bg-white p-6 rounded-lg shadow-sm shadow-slate-200/70 col-span-1 border border-slate-200">
        <div className="flex items-center justify-between">
          <h5 className="text-lg font-semibold text-slate-950">
            Last 30 Days Expenses
          </h5>
        </div>
        <CustomBarChart data={charData}></CustomBarChart>
      </div>
    </>
  );
};
export default Last30DayTransaction;
