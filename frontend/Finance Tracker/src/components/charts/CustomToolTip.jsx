const CustomToolTip = ({ active, payload }) => {
  if (active && payload && payload.length) {
    return (
      <div className="bg-white shadow-md rounded-lg border border-slate-200 text-center px-3 py-2">
        <p className="text-xs font-semibold text-emerald-700 mb-1">
          {payload[0].name}
        </p>
        <p className="text-sm text-slate-800">
          Amount:{" "}
          <span className="text-sm font-semibold text-slate-950">
            $
            {payload[0].value}
          </span>
        </p>
      </div>
    );
  }
  return null;
};
export default CustomToolTip;
