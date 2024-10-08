import { Start } from "@solisko/components-garngomman";
import { useNavigate } from "react-router";

const StartComp = () => {
  const navigate = useNavigate();

  const handleEmailClick = () => {
    navigate("/login");
  };
  return <Start handleClick={handleEmailClick} />;
};
export default StartComp;
