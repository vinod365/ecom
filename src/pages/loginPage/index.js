import "./style.css";
import Login from "../../components/login";
import Logo from "../../components/logo";

const LoginPage = () => {
  return (
    <div className="login__page">
      <Logo className="logo__" />
      <Login />
    </div>
  );
};

export default LoginPage;
