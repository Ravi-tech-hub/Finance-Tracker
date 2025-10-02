import React from "react";
import TransctionInfoCard from "../card/TransctionInfoCard";
import moment from "moment";
import { LuArrowRight } from "react-icons/lu";
const RecentIncome = ({ data, onSeeMore }) => {
  return (
    <div className="bg-white p-6 rounded-2xl shadow-md shadow-gray-100 border border-gray-200/50">
      <div className="flex items-center justify-between ">
        <h5 className="text-lg font-medium ">Income </h5>
        <button
          className="flex items-center gap-3 text-[12px] font-medium text-gray-700 hover:text-green-400 bg-gray-50 hover:bg-green-50  px-2 py-2  rounded-lg border  border-gray-200/50 cursor-pointer "
          onClick={onSeeMore}
        >
          See All <LuArrowRight className="text-base" />
        </button>
      </div>

      <div className=" mt-6">
        {data?.slice(0, 5)?.map((income) => (
          <TransctionInfoCard
            key={income._id}
            title={income.source}
            icon={income.icon}
            date={moment(income.date).format("DD MM YYYY")}
            amount={income.amount}
            type="income"
            hideDeleteBtn
          />
        ))}
      </div>
    </div>
  );
};
export default RecentIncome;
