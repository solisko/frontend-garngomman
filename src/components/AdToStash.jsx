import React, { useContext } from "react";
import { GarnContext } from "../context/GarnProvider";
import TabsComp from "./TabsComp";
import { useNavigate } from "react-router";

const AdToStash = () => {
  const { renderdComponent, handleTabClick } = useContext(GarnContext);

  const navigate = useNavigate();

  const adYarnHandler = () => {
    navigate("/stash");
  };

  return (
    <>
      <div>
        <div>
          <TabsComp handleTabClick={handleTabClick} />
        </div>
        {renderdComponent &&
          React.cloneElement(renderdComponent, { adYarnHandler })}
      </div>
    </>
  );
};

export default AdToStash;
