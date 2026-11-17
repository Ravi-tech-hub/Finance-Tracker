import { LuDownload } from "react-icons/lu";
import TransactionInfoCard from "../card/TransactionInfoCard";
import moment from "moment";

const ExpenseList = ({ transaction, onDelete, onDownload }) => {
  return (
    <div className="bg-white p-6 rounded-lg shadow-sm shadow-slate-200/70 border border-slate-200">
      <div className="flex items-center justify-between ">
        <h5 className="text-lg font-semibold text-slate-950">All Expenses</h5>
        <button
          className="flex items-center gap-2 text-xs font-medium text-slate-600 hover:text-emerald-700 bg-slate-50 hover:bg-emerald-50 px-3 py-2 rounded-lg border border-slate-200 cursor-pointer"
          onClick={onDownload}
        >
          <LuDownload className="text-base" />
          Download
        </button>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-x-4 mt-5">
        {transaction?.map((expense) => (
          <TransactionInfoCard
            key={expense._id}
            title={expense.category}
            icon={expense.icon}
            date={moment(expense.date).format("DD MMM YYYY")}
            amount={expense.amount}
            type="expense"
            onDelete={() => onDelete(expense._id)}
          />
        ))}
        {!transaction?.length && (
          <p className="text-sm text-slate-500 py-8 md:col-span-2 text-center">
            No expense records yet.
          </p>
        )}
      </div>
    </div>
  );
};
export default ExpenseList;
