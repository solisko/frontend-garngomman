import { useContext } from "react";
import { GarnContext } from "../context/GarnProvider";
import TabsComp from "./TabsComp";

const AdToStash = () => {
  const { renderdComponent, handleTabClick } = useContext(GarnContext);

  return (
    <>
      <div>
        <div>
          <TabsComp handleTabClick={handleTabClick} />
        </div>
        {renderdComponent}
      </div>
    </>
  );
};

export default AdToStash;
