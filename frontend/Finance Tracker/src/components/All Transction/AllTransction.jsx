import { useState, useEffect } from "react";
import axiosInstance from "../../utils/axiosinstance";
import { API_PATHS } from "../../utils/apiPath";
import TransctionInfoCard from "../card/TransctionInfoCard";
import moment from "moment";

const AllTransction = () => {
  const [dashBoardData, setDashBoardData] = useState(null);

  const fetchDashboardData = async () => {
    try {
      const response = await axiosInstance.get(API_PATHS.DASHBOARD.GET_DATA);
      if (response.data) {
        setDashBoardData(response.data);
      }
    } catch (error) {
      console.log(
        "Something error occured,",
        error.response?.data || error.message
      );
    }
  };

  useEffect(() => {
    fetchDashboardData();

    return () => {};
  }, []);

  return (
    <div className="bg-white p-6 rounded-2xl shadow-md shadow-gray-100 border border-gray-200/50">
      <div className="">
        <h5 className="text-4xl font-medium text-green-500 text-center ">
          All Transction
        </h5>
      </div>
      <div className=" mt-6">
        {dashBoardData?.recentTranscation?.map((item) => (
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
export default AllTransction;
