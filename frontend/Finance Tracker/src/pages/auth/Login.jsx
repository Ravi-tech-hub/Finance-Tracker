import React, { useContext, useState } from "react";
import { useNavigate } from "react-router-dom";
import AuthLayout from "../../components/Layout/AuthLayout";
import { Link } from "react-router-dom";
import { validateEmail } from "../../utils/helper";
import axiosInstance from "../../utils/axiosinstance";
import { API_PATHS } from "../../utils/apiPath";
import { UserContext } from "../../context/userContext";
const Login = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");
  const navigate = useNavigate();
  const { updateUser } = useContext(UserContext);

  const handleLogin = async (e) => {
    e.preventDefault();
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
      const response = await axiosInstance.post(API_PATHS.AUTH.LOGIN, {
        email,
        password,
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
      <div className="w-full max-w-md h-3/4 md:h-full flex flex-col justify-center">
        <p className="text-sm font-medium text-emerald-700 mb-2">
          Personal finance dashboard
        </p>
        <h3 className="text-3xl font-semibold text-slate-950">Welcome back</h3>
        <p className="text-sm text-slate-500 mt-2 mb-8">
          Sign in to review your income, expenses, and cash flow.
        </p>
        <form onSubmit={handleLogin} className="space-y-4">
          <label htmlFor="email" className="text-sm font-medium text-slate-700">
            Email Address
          </label>
          <input
            id="email"
            type="text"
            value={email}
            onChange={({ target }) => setEmail(target.value)}
            label="Email Address"
            placeholder="you@example.com"
            className="w-full text-sm text-slate-950 bg-slate-50 rounded-lg px-4 py-3 border border-slate-200 outline-none focus:border-emerald-500 focus:ring-4 focus:ring-emerald-100"
          />
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
            placeholder="Enter your password"
            className="w-full text-sm text-slate-950 bg-slate-50 rounded-lg px-4 py-3 border border-slate-200 outline-none focus:border-emerald-500 focus:ring-4 focus:ring-emerald-100"
          />

          {error && <p className="text-sm text-red-600">{error}</p>}

          <button
            type="submit"
            className="w-full text-sm font-semibold text-white bg-emerald-600 shadow-lg shadow-emerald-600/15 p-3 rounded-lg hover:bg-emerald-700 transition-colors"
          >
            Login
          </button>
          <p className="text-sm text-slate-600 mt-3">
            Don&apos;t have an account?{" "}
            <Link className="font-medium text-emerald-700" to="/signup">
              Sign up
            </Link>
          </p>
        </form>
      </div>
    </AuthLayout>
  );
};
export default Login;
