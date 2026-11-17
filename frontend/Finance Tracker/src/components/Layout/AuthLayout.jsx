import React from "react";
import img from "../../assets/images/img1.jpg";
import { LuPiggyBank, LuTrendingDown, LuTrendingUp, LuWallet } from "react-icons/lu";
const AuthLayout = ({ children }) => {
  return (
    <div className="min-h-screen flex bg-slate-50">
      <div className="w-screen min-h-screen md:w-[58vw] px-6 sm:px-10 lg:px-16 pt-8 pb-12">
        <h2 className="text-xl font-semibold text-slate-950">
          Smart Finance Tracker
        </h2>
        {children}
      </div>

      <div className="hidden md:flex w-[42vw] h-screen overflow-hidden p-8 relative bg-slate-950 text-white">
        <div className="absolute inset-0 bg-[linear-gradient(135deg,rgba(16,185,129,0.22),transparent_45%),linear-gradient(45deg,rgba(99,102,241,0.18),transparent_55%)]" />
        <div className="relative z-10 flex flex-col justify-between w-full">
          <div>
            <div className="inline-flex items-center gap-2 px-3 py-2 rounded-full bg-white/10 border border-white/10">
              <LuPiggyBank className="text-emerald-300" />
              <span className="text-xs font-medium text-slate-200">
                Budget clarity, one entry at a time
              </span>
            </div>
            <h1 className="text-4xl lg:text-5xl font-semibold leading-tight mt-8">
              See where your money is moving.
            </h1>
            <p className="text-sm lg:text-base text-slate-300 mt-4 max-w-md">
              Track earnings, watch spending patterns, and keep your monthly
              balance in view.
            </p>
          </div>

          <div className="space-y-4">
          <StatsInfoCard
              icon={<LuWallet />}
              label="Tracked balance"
              value="43,000"
              color="bg-emerald-500"
          />
            <div className="grid grid-cols-2 gap-4">
              <MiniStat
                icon={<LuTrendingUp />}
                label="Income"
                value="+12.4%"
                className="text-emerald-300"
              />
              <MiniStat
                icon={<LuTrendingDown />}
                label="Expenses"
                value="-8.1%"
                className="text-rose-300"
              />
            </div>
          </div>
        </div>
        <img
          src={img}
          alt=""
          className="absolute -right-20 bottom-20 w-[78%] opacity-20 rounded-2xl"
        />
      </div>
    </div>
  );
};
export default AuthLayout;

const StatsInfoCard = ({ icon, label, value, color }) => {
  return (
      <div className="flex gap-4 bg-white/10 p-4 rounded-lg shadow-xl shadow-black/10 border border-white/10 backdrop-blur">
        <div
          className={`w-12 h-12 flex items-center justify-center text-[24px] text-white ${color} rounded-full drop-shadow-lg`}
        >
          {icon}
        </div>

        <div>
          <h6 className="text-sm text-slate-300 mb-1">{label}</h6>
          <span className="text-2xl font-semibold">${value}</span>
        </div>
      </div>
  );
};

const MiniStat = ({ icon, label, value, className }) => (
  <div className="rounded-lg border border-white/10 bg-white/10 p-4">
    <div className={`text-xl ${className}`}>{icon}</div>
    <p className="text-xs text-slate-300 mt-3">{label}</p>
    <p className="text-xl font-semibold mt-1">{value}</p>
  </div>
);
