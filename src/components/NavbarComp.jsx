import { Navbar } from "@solisko/components-garngomman";
import { useNavigate } from "react-router";

const NavbarComp = () => {
  const navigate = useNavigate();

  const handleNavClick = (button) => {
    switch (button) {
      case "Mina Projekt":
        navigate("/project");
        break;
        case "Mönster":
        navigate("/patterns");
        break;
      case "Community":
        navigate("/community");
        break;
      case "Min Profil":
        navigate("/profile");
        break;
      default:
        alert(`${button} clicked!`);
    }
  };

  return (
    <div 
      // style={{position: "fixed", bottom: "0"}}
    >
      <Navbar handleClick={handleNavClick} />
    </div>
  );
};
export default NavbarComp;
