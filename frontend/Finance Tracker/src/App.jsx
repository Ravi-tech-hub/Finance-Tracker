import {
  BrowserRouter as Router,
  Route,
  Routes,
  Navigate,
} from "react-router-dom";
import Login from "./pages/auth/Login";
import SignUp from "./pages/auth/Signup";
import Income from "./pages/Dashboard/Income";
import Expense from "./pages/Dashboard/Expenses";
import Home from "./pages/Dashboard/Home";
import UserProvider from "./context/userContext";
import { Toaster } from "react-hot-toast";
import AllTransaction from "./components/AllTransaction/AllTransaction";
function App() {
  return (
    <UserProvider>
      <Router>
        <Routes>
          <Route path="/" element={<Root />} />
          <Route path="/login" exact element={<Login />} />
          <Route path="/signup" exact element={<SignUp />} />
          <Route path="/signUp" exact element={<Navigate to="/signup" />} />
          <Route path="/dashboard" exact element={<Home />} />
          <Route path="/income" exact element={<Income />} />
          <Route path="/expense" exact element={<Expense />} />
          <Route path="/transactions" exact element={<AllTransaction />} />
          <Route
            path="/allTransction"
            exact
            element={<Navigate to="/transactions" />}
          />
        </Routes>
      </Router>
      <Toaster
        toastOptions={{
          className: " px-2 py-1",
          style: {
            fontSize: "14px",
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
