const CustomLegend = ({ payload }) => {
  return (
    <div className="flex flex-wrap justify-center gap-3">
      {payload.map((entry, index) => (
        <div key={`legend_${index}`} className="flex items-center gap-2">
          <div
            className=" w-2.5 h-2.5 rounded-full"
            style={{ backgroundColor: entry.color }}
          ></div>
          <span className="text-sm text-slate-600 font-medium">
            {entry.value}
          </span>
        </div>
      ))}
    </div>
  );
};
export default CustomLegend;
