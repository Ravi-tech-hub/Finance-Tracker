import {
  BrowserRouter as Router,
  Route,
  Routes,
  Navigate,
} from "react-router-dom";
import Login from "./pages/auth/Login";
import SignUp from "./pages/auth/Signup";
import Income from "./pages/Dashboard/income";
import Expense from "./pages/Dashboard/Expenses";
import Home from "./pages/Dashboard/Home";
import UserProvider from "./context/userContext";
import { Toaster } from "react-hot-toast";
import AllTransction from "./components/All Transction/AllTransction";
function App() {
  return (
    <UserProvider>
      <Router>
        <Routes>
          <Route path="/" element={<Root />} />
          <Route path="/login" exact element={<Login />} />
          <Route path="/signUp" exact element={<SignUp />} />
          <Route path="/dashboard" exact element={<Home />} />
          <Route path="/income" exact element={<Income />} />
          <Route path="/expense" exact element={<Expense />} />
          <Route path="/allTransction" exact element={<AllTransction />} />
        </Routes>
      </Router>
      <Toaster
        toastOptions={{
          className: " px-2 py-1",
          style: {
            fontSize: "20px",
          },
        }}
      />
    </UserProvider>
  );
}

export default App;

const Root = () => {
  //check if token exist in localstorage
  const isAuthenticated = !!localStorage.getItem("token");
  return isAuthenticated ? (
    <Navigate to="/dashboard" />
  ) : (
    <Navigate to="/login" />
  );
};
