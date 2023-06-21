import Heading from "../header";
import Input from "../inputs";
import Button from "../buttons";
import "./style.css";
import { useState } from "react";
import { useNavigate } from "react-router-dom";

const Login = () => {
  const [password, setPassword] = useState("");
  const [email, setEmail] = useState("");
  const [helpfulMsg, setHelpfulMsg] = useState("");
  const navigate = useNavigate();

  function onInit() {
    if (localStorage.getItem("Users") == null) {
      localStorage.setItem(
        "Users",
        JSON.stringify([
          {
            name: "a",
            email: "a@a.com",
            password: "1234",
            role: "admin",
            cart: [],
          },
          {
            name: "v",
            email: "v@v.com",
            password: "1234",
            role: "vendor",
            cart: [],
          },
          {
            name: "c",
            email: "c@c.com",
            password: "1234",
            role: "custmer",
            cart: [],
          },
        ])
      );
      localStorage.setItem("User", JSON.stringify({}));
    }

    localStorage.setItem("VendorList", JSON.stringify([1, 2, 3, 4]));
    localStorage.setItem("ProductList", JSON.stringify([3, 4]));
    localStorage.setItem("ApprovalList", JSON.stringify([3, 4]));
    localStorage.setItem("CartList", JSON.stringify([1, 2]));
  }

  onInit();

  function handleOnEmailChange(e) {
    console.log(e.target.value);
    setEmail(e.target.value);
  }

  function handleOnPasswordChange(e) {
    console.log(e.target.value);
    setPassword(e.target.value);
  }

  function handleOnSubmit() {
    if (true) {
      const users = JSON.parse(localStorage.getItem("Users"));

      const user = users.find((el) => {
        return el["email"] == email;
      });

      if (!user) {
        setHelpfulMsg("This email is not registerd");
        return;
      }

      if (user.password != password) {
        setHelpfulMsg("Please enter correct password");
        return;
      }

      localStorage.setItem("IsLogged", true);

      localStorage.setItem("User", JSON.stringify(user));
      setHelpfulMsg("logged in");

      navigate(`${user.role}Page`);
    }
  }

  function ragexCheck() {
    let regax = /^w+([.-]?w+)*@w+([.-]?w+)*(.w{2,3})+$/;

    if (password != "" && regax.test(email)) {
      console.log("can access");
      return true;
    } else {
      if ((password == "" && email) == "" || regax.test(email)) {
        setHelpfulMsg("Please Enter correct email address and password");
        return false;
      }

      if (password == "") {
        setHelpfulMsg("Please enter your Password");
        return false;
      }
      if (email == "" || regax.test(email)) {
        setHelpfulMsg("Please Enter correct email address");
        return false;
      }
    }
  }

  function handleOnJoin() {
    navigate("/signupPage");
  }

  return (
    <div className="login">
      <Heading
        headingText={"Sign in"}
        subHeadingText={"Stay updated on your professional world"}
      />
      <Input
        type={"email"}
        value={email}
        onChange={handleOnEmailChange}
        placeholder={"Email or Phone"}
      />
      <Input
        type={"password"}
        value={password}
        onChange={handleOnPasswordChange}
        placeholder={"Password"}
      />
      <p className="helpfulMsg">{helpfulMsg}</p>
      <div className="last">
        <Button onClick={handleOnSubmit} type={"primary"} text={"Sign in"} />
        <p className="or__seperator">-----or-----</p>
        <Button onClick={handleOnJoin} type={"secondary"} text={"Join Now"} />
      </div>
    </div>
  );
};

export default Login;
