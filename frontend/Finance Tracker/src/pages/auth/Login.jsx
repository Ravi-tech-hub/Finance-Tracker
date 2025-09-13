import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import AuthLayout from "../../components/Layout/AuthLayout";
import { Link } from "react-router-dom";
import { validateEmail } from "../../utils/helper";
const Login = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");
  const navigate = useNavigate();

  const handleLogin = async (e) => {
    e.preventDefault();
    if (!validateEmail(email)) {
      setError("Please enter valid Email");
      return;
    }

    if (!password) {
      setError("Enter a password");
      return;
    }
    setError("");
  };
  return (
    <AuthLayout>
      <div className="lg-w-[70%] h-3/4 md:h-full flex flex-col justify-center">
        <h3 className="text-xl font-semibold text-black"> Welcome Back</h3>
        <p className="text-xs  text-slate-700 mt-[5px] mb-6">
          Please Enter your detail to login
        </p>
        <form onSubmit={handleLogin}>
          <label htmlFor="email" className="mx-4">
            Email Address
          </label>
          <input
            type="text"
            value={email}
            onChange={({ target }) => setEmail(target.value)}
            label="Email Address"
            placeholder="abc@123.com"
            className="w-full flex flex-col justify-between gap-3 text-sm text-black bg-slate-200 rounded-lg px-3 py-4 mb-4 mx-3 border border-slate-400 outline-none"
          />
          <label htmlFor="password" className="mx-4">
            Password
          </label>
          <input
            type="password"
            value={password}
            onChange={({ target }) => setPassword(target.value)}
            label="password"
            placeholder="Min-8 char"
            className="w-full flex flex-col justify-between gap-3 text-sm text-black bg-slate-200 rounded-lg px-3 py-4 mb-4 mx-3 border border-slate-400 outline-none"
          />

          {error && <p className="text-red-600 text-center pb-2.5">{error}</p>}

          <button
            type="submit"
            className="w-full  text-sm font-medium text-white bg-green-500 shadow-lg shadow-green-400/5 p-[10px] rounded-lg my-1 hover:bg-green-600/15 hover:text-green-600"
          >
            Login
          </button>
          <p className="text-[13px] text-slate-800 mt-3">
            Do not have account?
            <Link className="font-medium text-green-500" to="/signup">
              Signup
            </Link>
          </p>
        </form>
      </div>
    </AuthLayout>
  );
};
export default Login;
