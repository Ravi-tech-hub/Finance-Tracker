import React from "react";
import {
  LuUtensils,
  LuTrendingUp,
  LuTrendingDown,
  LuTrash2,
} from "react-icons/lu";
const TransactionInfoCard = ({
  title,
  icon,
  date,
  amount,
  type,
  hideDeleteBtn,
  onDelete,
}) => {
  const getAmountStyle = () =>
    type === "income"
      ? "bg-emerald-50 text-emerald-700 border-emerald-100"
      : "bg-rose-50 text-rose-700 border-rose-100";

  return (
    <div className="group relative flex items-center gap-4 p-3 rounded-lg hover:bg-slate-50">
      <div className="w-12 h-12 shrink-0 flex justify-center items-center text-xl text-slate-700 rounded-lg bg-slate-100">
        {icon ? (
          <img src={icon} alt={title} className="w-6 h-6" />
        ) : (
          <LuUtensils />
        )}
      </div>
      <div className="flex-1 flex items-center justify-between">
        <div className="min-w-0">
          <p className="text-sm text-slate-800 font-medium truncate">{title}</p>
          <p className="text-xs text-slate-400 mt-1">{date}</p>
        </div>
        <div className="flex items-center gap-2">
          {!hideDeleteBtn && (
            <button
              className="text-slate-400 hover:text-rose-600 opacity-0 group-hover:opacity-100 cursor-pointer"
              onClick={onDelete}
              aria-label={`Delete ${title}`}
            >
              <LuTrash2 />
            </button>
          )}
          <div
            className={`flex items-center gap-1.5 px-3 py-1.5 rounded-md border ${getAmountStyle()}`}
          >
            <h6 className="text-sm font-medium">
              {type === "income" ? "+" : "-"} ${amount}
            </h6>
            {type === "income" ? <LuTrendingUp /> : <LuTrendingDown />}
          </div>
        </div>
      </div>
    </div>
  );
};
export default TransactionInfoCard;
