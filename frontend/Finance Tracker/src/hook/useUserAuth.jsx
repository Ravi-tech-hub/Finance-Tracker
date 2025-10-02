import { useContext, useEffect } from "react";
import { UserContext } from "../context/userContext";
import axiosInstance from "../utils/axiosinstance";
import { API_PATHS } from "../utils/apiPath";
import { useNavigate } from "react-router-dom";

export const useUserAuth = () => {
  const { user, updateUser, clearUser } = useContext(UserContext);
  const navigate = useNavigate();

  useEffect(() => {
    if (user) {
      return;
    }

    let isMounted = true;
    const fetchUserInfo = async () => {
      try {
        const response = await axiosInstance.get(API_PATHS.AUTH.GET_USER_INFO);
        if (response.data && isMounted) {
          updateUser(response.data);
        }
      } catch (error) {
        console.log("Failed to fetch user info", error);
        if (isMounted) {
          clearUser();
          navigate("/login");
        }
      }
    };
    fetchUserInfo();
    return () => {
      isMounted = false;
    };
  }, [updateUser, clearUser, navigate]);
};
