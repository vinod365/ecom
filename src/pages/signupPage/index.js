import "./style.css";
import Signup from "../../components/signup";
import Logo from "../../components/logo";

const SignupPage = () => {
  return (
    <div className="signup__page">
      <Logo className="logos" />
      <Signup />
    </div>
  );
};

export default SignupPage;
