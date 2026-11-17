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
    if (!validateEmail(email)) {
      setError("Please enter a valid email address");
      return;
    }
    if (!password) {
      setError("Enter a password");
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
        setError("Something went wrong. Please try again later.");
      }
    }
  };
  return (
    <AuthLayout>
      <div className="w-full max-w-2xl h-auto md:h-full mt-10 md:mt-0 flex flex-col justify-center">
        <p className="text-sm font-medium text-emerald-700 mb-2">
          Start tracking smarter
        </p>
        <h3 className="text-3xl font-semibold text-slate-950">
          Create an account
        </h3>
        <p className="text-sm text-slate-500 mt-2 mb-8">
          Build a simple money picture from your income and spending.
        </p>
        <form onSubmit={handleSignup} className="space-y-4">
          <ProfilePhotoSelector image={profilePic} setImage={setProfilePic} />
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <div>
              <label
                htmlFor="fullName"
                className="text-sm font-medium text-slate-700"
              >
                Full Name
              </label>
              <input
                id="fullName"
                type="text"
                value={fullName}
                onChange={({ target }) => setFullName(target.value)}
                label="Full Name"
                placeholder="Ravi Prakash"
                className="w-full mt-2 text-sm text-slate-950 bg-slate-50 rounded-lg px-4 py-3 border border-slate-200 outline-none focus:border-emerald-500 focus:ring-4 focus:ring-emerald-100"
              />
            </div>

            <div>
              <label
                htmlFor="email"
                className="text-sm font-medium text-slate-700"
              >
                Email Address
              </label>
              <input
                id="email"
                type="text"
                value={email}
                onChange={({ target }) => setEmail(target.value)}
                label="Email Address"
                placeholder="you@example.com"
                className="w-full mt-2 text-sm text-slate-950 bg-slate-50 rounded-lg px-4 py-3 border border-slate-200 outline-none focus:border-emerald-500 focus:ring-4 focus:ring-emerald-100"
              />
            </div>
            <div>
              <label
                htmlFor="password"
                className="text-sm font-medium text-slate-700"
              >
                Password
              </label>
              <input
                id="password"
                type="password"
                value={password}
                onChange={({ target }) => setPassword(target.value)}
                label="password"
                placeholder="Minimum 8 characters"
                className="w-full mt-2 text-sm text-slate-950 bg-slate-50 rounded-lg px-4 py-3 border border-slate-200 outline-none focus:border-emerald-500 focus:ring-4 focus:ring-emerald-100"
              />
            </div>
          </div>
          {error && <p className="text-sm text-red-600">{error}</p>}

          <button
            type="submit"
            className="w-full text-sm font-semibold text-white bg-emerald-600 shadow-lg shadow-emerald-600/15 p-3 rounded-lg hover:bg-emerald-700 transition-colors"
          >
            Sign up
          </button>
          <p className="text-sm text-slate-600 mt-3">
            Already have an account?{" "}
            <Link className="font-medium text-emerald-700" to="/login">
              Login
            </Link>
          </p>
        </form>
      </div>
    </AuthLayout>
  );
};
export default SignUp;
