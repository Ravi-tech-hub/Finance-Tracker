import React from "react";
import { LuArrowRight } from "react-icons/lu";
import moment from "moment";
import TransctionInfoCard from "../card/TransctionInfoCard";
const RecentTransction = ({ transction, onSeeMore }) => {
  return (
    <div className="bg-white p-6 rounded-2xl shadow-md shadow-gray-100 border border-gray-200/50">
      <div className="flex items-center justify-between">
        <h5 className="text-lg font-medium ">Recent Transction</h5>
        <button
          className="flex items-center gap-3 text-[12px] font-medium text-gray-700 hover:text-green-400 bg-gray-50 hover:bg-green-50  px-2 py-2  rounded-lg border  border-gray-200/50 cursor-pointer "
          onClick={onSeeMore}
        >
          See All <LuArrowRight className="text-base" />
        </button>
      </div>
      <div className=" mt-6">
        {transction?.slice(0, 10)?.map((item) => (
          <TransctionInfoCard
            key={item._id}
            title={item.type == "expense" ? item.category : item.source}
            icon={item.icon}
            date={moment(item.date).format("DD MM YYYY")}
            amount={item.amount}
            type={item.type}
            hideDeleteBtn
          />
        ))}
      </div>
    </div>
  );
};
export default RecentTransction;
