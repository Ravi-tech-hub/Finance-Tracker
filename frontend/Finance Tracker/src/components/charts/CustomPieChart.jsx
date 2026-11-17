import {
  PieChart,
  Pie,
  Cell,
  Tooltip,
  ResponsiveContainer,
  Legend,
} from "recharts";
import CustomToolTip from "./CustomToolTip";
import CustomLegend from "./CustomLegend";
const CustomPieChart = ({
  data,
  label,
  totalAmount,
  color,
  showTextAnchor,
}) => {
  return (
    <>
      <ResponsiveContainer width="100%" height={380}>
        <PieChart>
          <Pie
            data={data}
            dataKey="amount"
            nameKey="name"
            cx="50%"
            cy="50%"
            outerRadius={124}
            innerRadius={92}
            labelLine={false}
          >
            {data.map((_, index) => (
              <Cell key={`cell-${index}`} fill={color[index % color.length]} />
            ))}
          </Pie>
          <Tooltip content={CustomToolTip} />
          <Legend content={CustomLegend} />
          {showTextAnchor && (
            <>
              <text
                x="50%"
                y="50%"
                dy={-25}
                textAnchor="middle"
                fill="#64748b"
                fontSize="14px"
              >
                {label}
              </text>
              <text
                x="50%"
                y="50%"
                dy={8}
                textAnchor="middle"
                fill="#0f172a"
                fontSize="18px"
                fontWeight="600"
              >
                ${totalAmount}
              </text>
            </>
          )}
        </PieChart>
      </ResponsiveContainer>
    </>
  );
};
export default CustomPieChart;
