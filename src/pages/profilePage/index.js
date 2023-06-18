import "./style.css";
import Profile from "../../components/profile";
import Logo from "../../components/logo";
import { useEffect } from "react";

const ProfilePage = () => {
  useEffect(() => {
    localStorage.getItem("CurrentName");
    localStorage.getItem("CurrentPwd");
  }, []);

  return (
    <div className="profile__page">
      <Logo className="logo_" />
      <Profile />
    </div>
  );
};

export default ProfilePage;
