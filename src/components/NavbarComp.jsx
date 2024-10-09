import { Navbar } from "@solisko/components-garngomman";
import { useContext } from "react";
import { useNavigate } from "react-router";
import { GarnContext } from "../context/GarnProvider";

const NavbarComp = () => {
  const { renderComponent, category } = useContext(GarnContext);

  const navigate = useNavigate();

  const handleNavClick = (button) => {
    switch (button) {
      case "Mina Projekt":
        navigate("/project");
        break;
      case "Stash":
        navigate("/stash");
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

  const handlePlusClick = () => {
    if (category) {
      navigate("/addtostash");
      renderComponent(category);
    }
  };

  return (
    <div
      style={{
        position: "fixed",
        bottom: "0",
        width: "450px",
      }}
    >
      <Navbar handleClick={handleNavClick} handlePlusClick={handlePlusClick} />
    </div>
  );
};
export default NavbarComp;
