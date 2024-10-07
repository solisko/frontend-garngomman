import { Navbar } from "@solisko/components-garngomman";

const NavbarComp = () => {
  const handleProjektClick = () => {
    alert("projekt clicked!");
  };

  return (
    <div>
      <Navbar handleClick={handleProjektClick} />
    </div>
  );
};
export default NavbarComp;
