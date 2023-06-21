import Heading from "../header";
import Input from "../inputs";
import Button from "../buttons";
import "./style.css";

import { useState } from "react";

const Profile = () => {
  //   const [pwd, setPwd] = useState("");
  //   const [email, setEmail] = useState("");
  //   const [helpfulMsg, setHelpfulMsg] = useState("");

  //   const navigate = useNavigate();
  //   function handleOnEmailChange(e) {
  //     console.log(e.target.value);
  //     setEmail(e.target.value);
  //   }

  //   function handleOnPasswordChange(e) {
  //     console.log(e.target.value);
  //     setPwd(e.target.value);
  //   }

  //   function handleOnSubmit() {
  //     if (ragexCheck()) {
  //       if (
  //         localStorage.getItem("CurrentUserEmail") ==
  //           email.toLowerCase().trim() &&
  //         localStorage.getItem("CurrentUserPwd") == pwd.toLowerCase().trim()
  //       ) {
  //         setHelpfulMsg("Logged in");
  //         localStorage.getItem("IsLoggedIn", true);
  //         navigate("/profilePage");
  //       }
  //     }
  //   }

  return (
    <div className="profile">
      <Heading
        headingText={"Profile"}
        subHeadingText={"You can edit your profile"}
      />

      <Input value={localStorage.getItem("CurrentName")} placeholder={"Name"} />
      <Input
        value={localStorage.getItem("CurrentUserEmail")}
        placeholder={"Email or Phone"}
      />
      <Input
        value={localStorage.getItem("CurrentUserPwd")}
        type={"password"}
        placeholder={"Password"}
      />
      <select name="role--select" id="role--select">
        <option value="student">Please Select Your role</option>
        <option value="student">Student</option>
        <option value="employee">Employee</option>
        <option value="timePass">Time Pass</option>
      </select>
      <div className="last">
        <Button type={"primary"} text={"Update changes"} />
      </div>
    </div>
  );
};

export default Profile;
