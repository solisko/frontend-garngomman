import { Navbar } from "@solisko/components-garngomman";

const NavbarComp = () => {
  const handleNavClick = (button) => {
    switch (button) {
      case "Mina Projekt":
        alert("Mina Projekt clicked!");
        break;
      case "Inspo":
        alert("Inspo clicked!");
        break;
      case "Community":
        alert("Community clicked!");
        break;
      case "Min Profil":
        alert("Min Profil clicked!");
        break;
      default:
        alert(`${button} clicked!`);
    }
  };

  return (
    <div>
      <Navbar handleClick={handleNavClick} />
    </div>
  );
};
export default NavbarComp;
