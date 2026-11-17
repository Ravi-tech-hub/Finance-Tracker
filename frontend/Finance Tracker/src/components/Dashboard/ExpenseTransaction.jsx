import React from "react";
import { LuArrowRight } from "react-icons/lu";
import TransactionInfoCard from "../card/TransactionInfoCard";
import moment from "moment";
const ExpenseTransaction = ({ transactions, onSeeMore }) => {
  return (
    <div className="bg-white p-6 rounded-lg shadow-sm shadow-slate-200/70 border border-slate-200">
      <div className="flex items-center justify-between ">
        <h5 className="text-lg font-semibold text-slate-950">
          Recent Expenses
        </h5>
        <button
          className="flex items-center gap-2 text-xs font-medium text-slate-600 hover:text-emerald-700 bg-slate-50 hover:bg-emerald-50 px-3 py-2 rounded-lg border border-slate-200 cursor-pointer"
          onClick={onSeeMore}
        >
          See All <LuArrowRight className="text-base" />
        </button>
      </div>

      <div className="mt-5 divide-y divide-slate-100">
        {transactions?.slice(0, 5)?.map((expense) => (
          <TransactionInfoCard
            key={expense._id}
            title={expense.category}
            icon={expense.icon}
            date={moment(expense.date).format("DD MMM YYYY")}
            amount={expense.amount}
            type="expense"
            hideDeleteBtn
          />
        ))}
        {!transactions?.length && (
          <p className="text-sm text-slate-500 py-8 text-center">
            No expenses recorded yet.
          </p>
        )}
      </div>
    </div>
  );
};
export default ExpenseTransaction;
