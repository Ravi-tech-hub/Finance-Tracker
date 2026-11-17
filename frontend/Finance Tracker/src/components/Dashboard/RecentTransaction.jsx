import React from "react";
import { LuArrowRight } from "react-icons/lu";
import moment from "moment";
import TransactionInfoCard from "../card/TransactionInfoCard";
const RecentTransaction = ({ transactions, onSeeMore }) => {
  return (
    <div className="bg-white p-6 rounded-lg shadow-sm shadow-slate-200/70 border border-slate-200">
      <div className="flex items-center justify-between">
        <h5 className="text-lg font-semibold text-slate-950">
          Recent Transactions
        </h5>
        <button
          className="flex items-center gap-2 text-xs font-medium text-slate-600 hover:text-emerald-700 bg-slate-50 hover:bg-emerald-50 px-3 py-2 rounded-lg border border-slate-200 cursor-pointer"
          onClick={onSeeMore}
        >
          See All <LuArrowRight className="text-base" />
        </button>
      </div>
      <div className="mt-5 divide-y divide-slate-100">
        {transactions?.slice(0, 10)?.map((item) => (
          <TransactionInfoCard
            key={item._id}
            title={item.type === "expense" ? item.category : item.source}
            icon={item.icon}
            date={moment(item.date).format("DD MMM YYYY")}
            amount={item.amount}
            type={item.type}
            hideDeleteBtn
          />
        ))}
        {!transactions?.length && (
          <p className="text-sm text-slate-500 py-8 text-center">
            No recent transactions yet.
          </p>
        )}
      </div>
    </div>
  );
};
export default RecentTransaction;
