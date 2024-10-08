import { EmailLoginPage } from "@solisko/components-garngomman";
import { useNavigate } from "react-router";

const LoginComp = () => {

    const navigate = useNavigate();

    const handleNextClick = () => {
      navigate("/password");
    };

  return <EmailLoginPage handleClick={handleNextClick}/>;
};
export default LoginComp;
