import { useState } from "react";
import { useRef } from "react";
import { useNavigate } from "react-router-dom";
const Login = () => {
  const email = useRef();
  const password = useRef();
  const [error, seterror] = useState("");
  const navigate = useNavigate();
  const handleOnSubmit = async (e) => {
    e.preventDefault();
    seterror("");
    const formData = {
      email: email.current.value,
      password: password.current.value,
    };
    try {
      const response = await fetch("http://localhost:3001/api/auth/login", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(formData),
      });
      const data = await response.json();
      if (response.ok) {
        localStorage.setItem("token", data.token);
        alert("Login Successful!");
      } else {
        seterror(data.message || "Login Failed");
      }
    } catch (error) {
      console.log("error occured", error);
    }
    navigate("/");
  };
  return (
    <>
      <div className=" w-full min-h-screen flex justify-center items-center bg-gradient-to-r from-purple-150 shadow-lg via-pink-200 to-red-300">
        <div className="w-full max-w-md bg-white shadow-lg  rounded-lg p-8 ">
          <h2 className="text-3xl font-bold text-green-500   px-12 mb-6">
            Welcome Back
          </h2>
          {error && (
            <p className="bg-red-100 text-red-600 p-2 rounded mb-4 text-sm text-center">
              {error}
            </p>
          )}
          <form onSubmit={handleOnSubmit}>
            <label
              htmlFor="email"
              className="block text-gray-700 font-medium mb-2"
            >
              Email
            </label>
            <input
              type="email"
              placeholder="Enter your Email"
              ref={email}
              required
              name="email"
              className="w-full px-4 py-2 border rounded-lg focus:ring-2 focus:ring-green-400 focus:outline-none"
            />

            <label
              htmlFor="password"
              className="block text-gray-700 font-medium mb-2"
            >
              password
            </label>
            <input
              type="password"
              placeholder="Enter password"
              ref={password}
              required
              name="password"
              className="w-full px-4 py-2 border rounded-lg focus:ring-2 focus:ring-green-400 focus:outline-none"
            />
            <button
              type="submit"
              className="w-full bg-green-500 mt-4 text-white py-2 rounded-lg font-semibold hover:bg-green-600 transition"
            >
              Login
            </button>
          </form>
        </div>
      </div>
    </>
  );
};
export default Login;
