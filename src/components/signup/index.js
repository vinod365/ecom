import Heading from "../header";
import Input from "../inputs";
import Button from "../buttons";
import "./style.css";
import { useState } from "react";
import { useNavigate } from "react-router-dom";

const Signup = () => {
  const [name, setName] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPwd, setConfirmPwd] = useState("");
  const [email, setEmail] = useState("");
  const [role, setRole] = useState("");
  const [helpfulMsg, setHelpfulMsg] = useState("");

  const navigate = useNavigate();

  function onInit() {
    if (!localStorage.getItem("Users")) {
      localStorage.setItem("Users", JSON.stringify("[]"));
      localStorage.setItem("user", JSON.stringify("{}"));
    }
  }

  onInit();

  function handleOnNameChange(e) {
    setName(e.target.value);
  }

  function handleOnEmailChange(e) {
    setEmail(e.target.value);
  }

  function handleOnPwdChange(e) {
    setPassword(e.target.value);
  }

  function handleOnConfirmedChange(e) {
    setConfirmPwd(e.target.value);
  }

  function handleSelectChange(e) {
    setRole(e.target.value);
  }

  function handleOnSubmit(e) {
    if (password !== confirmPwd) {
      setHelpfulMsg("password and confirm password should be same");
    }

    const user = {
      name: name,
      email: email,
      password: password,
      role: role,
      cart: [],
    };

    const users = JSON.parse(localStorage.getItem("Users"));

    users.push(user);

    localStorage.setItem("Users", JSON.stringify(users));

    navigate("/");
  }

  return (
    <div className="login">
      <Heading
        headingText={"Sign up"}
        subHeadingText={"Please create your account"}
      />
      <Input value={name} onChange={handleOnNameChange} placeholder={"Name"} />
      <Input
        
        value={email}
        onChange={handleOnEmailChange}
        placeholder={"Email or Phone"}
      />
      <Input
        onChange={handleOnPwdChange}
        value={password}
        placeholder={"Password"}
      />
      <Input
        onChange={handleOnConfirmedChange}
        value={confirmPwd}
        placeholder={"Confirm Password"}
      />
      <select
        onChange={handleSelectChange}
        value={role}
        name="role--select"
        id="role--select"
      >
        <option value="please--select">Please Select Your role</option>
        <option value="custmer">custmer</option>
        <option value="admin">admin</option>
        <option value="vendor">vendor</option>
      </select>
      <div className="last">
        <Button onClick={handleOnSubmit} type={"primary"} text={"Sign UP"} />
        <p className="or__seperator">-----or-----</p>
        <Button
          type={"secondary"}
          text={"Already have an account? Sign in now"}
        />
      </div>
    </div>
  );
};

export default Signup;
