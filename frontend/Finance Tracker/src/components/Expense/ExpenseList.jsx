import { LuDownload } from "react-icons/lu";
import TransctionInfoCard from "../card/TransctionInfoCard";
import moment from "moment";

const ExpenseList = ({ transaction, onDelete, onDownload }) => {
  return (
    <div className="bg-white p-6 rounded-2xl shadow-md shadow-gray-100 border border-gray-200/50">
      <div className="flex items-center justify-between ">
        <h5 className="text-lg font-medium ">All Expense </h5>
        <button
          className="flex items-center gap-3 text-[12px] font-medium text-gray-700 hover:text-green-400 bg-gray-50 hover:bg-green-50  px-2 py-2  rounded-lg border  border-gray-200/50 cursor-pointer "
          onClick={onDownload}
        >
          <LuDownload className="text-base" />
          Download
        </button>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2">
        {transaction?.map((expense) => (
          <TransctionInfoCard
            key={expense._id}
            title={expense.category}
            icon={expense.icon}
            date={moment(expense.date).format("DD MM YYYY")}
            amount={expense.amount}
            type="Expense"
            onDelete={() => onDelete(expense._id)}
          />
        ))}
      </div>
    </div>
  );
};
export default ExpenseList;
