import React, { useContext, useState } from "react";
import { useNavigate } from "react-router-dom";
import AuthLayout from "../../components/Layout/AuthLayout";
import { Link } from "react-router-dom";
import { validateEmail } from "../../utils/helper";
import ProfilePhotoSelector from "../../components/input/ProfilePhotoSelector";
import axiosInstance from "../../utils/axiosinstance";
import { API_PATHS } from "../../utils/apiPath";
import { UserContext } from "../../context/userContext";
import uploadImage from "../../utils/uploadImage";
const SignUp = () => {
  const [profilePic, setProfilePic] = useState("");
  const [fullName, setFullName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");
  const navigate = useNavigate();
  const { updateUser } = useContext(UserContext);

  const handleSignup = async (e) => {
    e.preventDefault();
    let profileUrl = "";
    if (!fullName) {
      setError("Enter your name");
      return;
    }
    if (validateEmail(email)) {
      setError("Please Enter valid Email");
      return;
    }
    if (!password) {
      setError("Enter a passowrd");
      return;
    }
    setError("");

    try {
      //upload image if present

      if (profilePic) {
        const imageUpload = await uploadImage(profilePic);
        profileUrl = imageUpload.imageUrl || "";
      }

      const response = await axiosInstance.post(API_PATHS.AUTH.REGISTER, {
        fullName,
        email,
        password,
        profileUrl,
      });
      const { token, user } = response.data;
      if (token) {
        localStorage.setItem("token", token);
        updateUser(user);
        navigate("/dashboard");
      }
    } catch (error) {
      if (error.response && error.response.data.message) {
        setError(error.response.data.message);
      } else {
        setError("something went wrong please try again later", error);
      }
    }
  };
  return (
    <AuthLayout>
      <div className="lg:w-[100%] h-auto md:h-full mt-10 md:mt-0 flex flex-col justify-center">
        <h3 className="text-xl font-semibold text-black">Create an Account</h3>
        <p className="text-xs text-slate-700 mt-[5px] mb-6">
          Join us By Entering your detail below
        </p>
        <form onSubmit={handleSignup}>
          <ProfilePhotoSelector image={profilePic} setImage={setProfilePic} />
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <div>
              <label htmlFor="fullName" className="mx-4">
                Full Name
              </label>
              <input
                type="text"
                value={fullName}
                onChange={({ target }) => setFullName(target.value)}
                label="Full Name"
                placeholder="Ravi Prakash"
                className="w-full  justify-between gap-3 text-sm text-black bg-slate-200 rounded-lg px-3 py-4 mb-4 mx-3 border border-slate-400 outline-none"
              />
            </div>

            <div>
              <label htmlFor="email" className="mx-4">
                Email Address
              </label>
              <input
                type="text"
                value={email}
                onChange={({ target }) => setEmail(target.value)}
                label="Email Address"
                placeholder="abc@123.com"
                className="w-full  justify-between gap-3 text-sm text-black bg-slate-200 rounded-lg px-3 py-4 mb-4 mx-3 border border-slate-400 outline-none"
              />
            </div>
            <div>
              <label htmlFor="password" className="mx-4">
                Password
              </label>
              <input
                type="password"
                value={password}
                onChange={({ target }) => setPassword(target.value)}
                label="password"
                placeholder="Min-8 char"
                className="w-full  justify-between gap-3 text-sm text-black bg-slate-200 rounded-lg px-3 py-4 mb-4 mx-3 border border-slate-400 outline-none"
              />
            </div>
          </div>
          {error && <p className="text-red-600 text-center pb-2.5">{error}</p>}

          <button
            type="submit"
            className="w-full  text-sm font-medium text-white bg-green-500 shadow-lg shadow-green-400/5 p-[10px] rounded-lg my-1 hover:bg-green-600/15 hover:text-green-600"
          >
            SignUp
          </button>
          <p className="text-[13px] text-slate-800 mt-3">
            Already have account?
            <Link className="font-medium text-green-500" to="/login">
              Login
            </Link>
          </p>
        </form>
      </div>
    </AuthLayout>
  );
};
export default SignUp;
