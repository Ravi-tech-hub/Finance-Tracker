import React from "react";

const InfoCard = ({ icon, label, value, color }) => {
  return (
    <div className="flex items-center gap-5 bg-white p-5 rounded-lg shadow-sm shadow-slate-200/70 border border-slate-200">
      <div
        className={`w-14 h-14 shrink-0 flex items-center justify-center text-[26px] text-white ${color} rounded-lg shadow-lg shadow-slate-200`}
      >
        {icon}
      </div>
      <div>
        <h6 className="text-sm text-slate-500 mb-1">{label}</h6>
        <span className="text-2xl font-semibold text-slate-950">${value}</span>
      </div>
    </div>
  );
};

export default InfoCard;
