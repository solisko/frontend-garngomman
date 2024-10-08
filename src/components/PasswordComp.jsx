import { EmailPasswordPage } from "@solisko/components-garngomman";
import { useNavigate } from "react-router";

const PasswordComp = () => {
  const navigate = useNavigate();

  const handleClick = () => {
    navigate("/stash");
  };

  return <EmailPasswordPage handleClick={handleClick} />;
};
export default PasswordComp;
