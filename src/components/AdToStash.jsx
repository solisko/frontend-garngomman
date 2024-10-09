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
  const adNewNeedleHandler = () => {
    navigate("/stash");
  };

  // byt namn på denna till adNewAccesoryHandler,
  // vet inte varför den heter loginHandler 🤷‍♂️
  const loginHandler = () => {
    navigate("/stash");
  };

  return (
    <>
      <div>
        <div>
          <TabsComp handleTabClick={handleTabClick} />
        </div>
        {renderdComponent &&
          React.cloneElement(renderdComponent, {
            adYarnHandler,
            adNewNeedleHandler,
            loginHandler,
          })}
      </div>
    </>
  );
};

export default AdToStash;
