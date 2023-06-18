import { Routes, Route, useNavigate } from "react-router-dom";

import "./App.css";
import LoginPage from "./pages/loginPage";
import SignupPage from "./pages/signupPage";
import ProfilePage from "./pages/profilePage";
import CustmerPage from "./pages/custmerPage";
import { useEffect, useState } from "react";
import VendorPage from "./pages/vendorPage";
import AdminPage from "./pages/adminPage";

const App = () => {
  const [isLogged, setIsLogged] = useState(false);
  const user = JSON.parse(localStorage.getItem("User"));
  const navigate = useNavigate();

  function checkIsLogged() {
    if (localStorage.getItem("IsLogged") == true) {
      return true;
    } else return false;
  }

  useEffect(() => {
    console.log(localStorage.getItem("IsLogged"));
    if (localStorage.getItem("IsLogged") == "true") {
      navigate(`${user.role}Page`);
      console.log("Hi");
    }
  }, []);

  function handleOnLogoutClick() {
    localStorage.setItem("IsLogged", false);
    setIsLogged(false);
    navigate("/");
  }

  return (
    <div className="App">
      <button onClick={handleOnLogoutClick} className="logout--btn">
        logout
      </button>
      <Routes>
        <Route path="/" element={<LoginPage />} />
        <Route path="/loginPage" element={<LoginPage />} />
        <Route path="/signupPage" element={<SignupPage />} />
        <Route path="/profilePage" element={<ProfilePage />} />
        <Route path="/adminPage" element={<AdminPage />} />
        <Route path="/vendorPage" element={<VendorPage />} />
        <Route path="/custmerPage" element={<CustmerPage />} />
      </Routes>
    </div>
  );
};

export default App;
