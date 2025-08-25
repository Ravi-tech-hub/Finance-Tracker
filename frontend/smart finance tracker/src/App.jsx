import { Outlet } from "react-router-dom";
import Header from "./components/Header";
import SignUp from "./components/Signup";

function App() {
  return (
    <>
      <Header />
      <Outlet />
    </>
  );
}

export default App;
