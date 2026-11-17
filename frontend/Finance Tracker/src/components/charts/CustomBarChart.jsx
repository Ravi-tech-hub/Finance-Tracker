import React from "react";
import {
  BarChart,
  Bar,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  ResponsiveContainer,
  Cell,
} from "recharts";
const CustomBarChart = ({ data }) => {
  const getBarColor = (index) => {
    return index % 2 === 0 ? "#059669" : "#4f46e5";
  };

  const CustomTooltip = ({ active, payload }) => {
    if (active && payload && payload.length) {
      return (
        <div className="bg-white shadow-md rounded-lg border border-slate-200 px-3 py-2">
          <p className="text-xs font-medium text-emerald-700 mb-1">
            {payload[0].payload.source || payload[0].payload.month}
          </p>
          <p className="text-sm text-slate-800">
            Amount{" "}
            <span className="text-sm text-slate-950 font-semibold">
              ${payload[0].payload.amount}
            </span>
          </p>
        </div>
      );
    }
    return null;
  };

  return (
    <div className="bg-white mt-6">
      <ResponsiveContainer width="100%" height={300}>
        <BarChart data={data}>
          <CartesianGrid stroke="#e2e8f0" vertical={false} />
          <XAxis
            dataKey="source"
            tick={{ fontSize: 12, fill: "#64748b" }}
            stroke="none"
          />
          <YAxis tick={{ fontSize: 12, fill: "#64748b" }} stroke="none" />
          <Tooltip content={<CustomTooltip />} />
          <Bar
            dataKey="amount"
            fill="#059669"
            radius={[8, 8, 0, 0]}
            activeStyle={{ fill: "#047857" }}
          >
            {data.map((_, index) => (
              <Cell key={index} fill={getBarColor(index)} />
            ))}
          </Bar>
        </BarChart>
      </ResponsiveContainer>
    </div>
  );
};
export default CustomBarChart;
