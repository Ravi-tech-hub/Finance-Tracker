import { useState } from "react";
import { useRef } from "react";
import { useNavigate } from "react-router-dom";
const SignUp = () => {
  const firstname = useRef();
  const lastname = useRef();
  const email = useRef();
  const password = useRef();
  const [error, seterror] = useState([]);
  const navigate = useNavigate();

  const handleOnSubmit = async (e) => {
    e.preventDefault();
    seterror([]);
    const formData = {
      firstName: firstname.current.value,
      lastName: lastname.current.value,
      email: email.current.value,
      password: password.current.value,
    };
    try {
      const response = await fetch("http://localhost:3001/api/auth/signup", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(formData),
      });
      const data = await response.json();
      if (response.ok) {
        alert("signup Successful");
      } else {
        if (data.errors) {
          seterror(data.errors.map((err) => err.msg));
          console.log(error);
        } else {
          seterror([data.message]);
          console.log(error);
        }
      }
      navigate("/login");
    } catch (error) {
      console.log("error occured", error);
    }
  };
  return (
    <>
      <div className="w-full flex  items-center justify-center shadow-lg bg-gradient-to-r from-purple-150 via-pink-200 to-red-300">
        <div className="w-full max-w-md bg-white shadow-lg rounded-2xl p-8 mt-4">
          <h2 className="text-3xl font-bold text-green-500   px-12 mb-6">
            Create an account
          </h2>
          {error.length > 0 && (
            <div className="bg-red-100 text-red-700 p-3 mb-4 rounded">
              <ul>
                {error.map((err, i) => (
                  <li key={i}>{err}</li>
                ))}
              </ul>
            </div>
          )}
          <form onSubmit={handleOnSubmit} className="">
            <div className="mb-3">
              <label
                htmlFor="firstName"
                className="block text-gray-700 font-medium mb-2"
              >
                First Name
              </label>
              <input
                type="text"
                name="firstName"
                placeholder="Enter your first name"
                ref={firstname}
                required
                className="w-full px-4 py-2 border rounded-lg focus:ring-2 focus:ring-green-400 focus:outline-none"
              />

              <label
                htmlFor="lastName"
                className="block text-gray-700 font-medium mb-2"
              >
                Last Name
              </label>
              <input
                type="text"
                placeholder="Enter your last name"
                ref={lastname}
                required
                name="lastName"
                className="w-full px-4 py-2 border rounded-lg focus:ring-2 focus:ring-green-400 focus:outline-none"
              />

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
                Sign Up
              </button>
            </div>
          </form>
        </div>
      </div>
    </>
  );
};
export default SignUp;
