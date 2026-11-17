import React from "react";
import TransactionInfoCard from "../card/TransactionInfoCard";
import moment from "moment";
import { LuArrowRight } from "react-icons/lu";
const RecentIncome = ({ data, onSeeMore }) => {
  return (
    <div className="bg-white p-6 rounded-lg shadow-sm shadow-slate-200/70 border border-slate-200">
      <div className="flex items-center justify-between ">
        <h5 className="text-lg font-semibold text-slate-950">
          Recent Income
        </h5>
        <button
          className="flex items-center gap-2 text-xs font-medium text-slate-600 hover:text-emerald-700 bg-slate-50 hover:bg-emerald-50 px-3 py-2 rounded-lg border border-slate-200 cursor-pointer"
          onClick={onSeeMore}
        >
          See All <LuArrowRight className="text-base" />
        </button>
      </div>

      <div className="mt-5 divide-y divide-slate-100">
        {data?.slice(0, 5)?.map((income) => (
          <TransactionInfoCard
            key={income._id}
            title={income.source}
            icon={income.icon}
            date={moment(income.date).format("DD MMM YYYY")}
            amount={income.amount}
            type="income"
            hideDeleteBtn
          />
        ))}
        {!data?.length && (
          <p className="text-sm text-slate-500 py-8 text-center">
            No income recorded yet.
          </p>
        )}
      </div>
    </div>
  );
};
export default RecentIncome;
