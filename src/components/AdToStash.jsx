import { useContext } from "react";
import { GarnContext } from "../context/GarnProvider";
import TabsComp from "./TabsComp";
import { useNavigate } from "react-router";

const AdToStash = () => {
  const { renderdComponent } = useContext(GarnContext);

  const navigate = useNavigate();

  const handleTabClick = () => {
    navigate("/stash");
  };

  return (
    <div>
      <div>
        <TabsComp handleTabClick={handleTabClick} />
      </div>
      {renderdComponent}
    </div>
  );
};

export default AdToStash;
