import React from "react";
const CustomToolTip = ({ active, payload }) => {
  if (active && payload && payload.length) {
    return (
      <div className="bg-white  shadow-md rounded-lg border border-gray-300 text-center px-2">
        <p className="text-xs font-semibold text-green-700 mb-1 ">
          {payload[0].name}
        </p>
        <p className=" text-sm text-gray-900">
          Amount:
          <span className=" text-sm font-medium text-gray-900">
            {payload[0].value}
          </span>
        </p>
      </div>
    );
  }
  return null;
};
export default CustomToolTip;
