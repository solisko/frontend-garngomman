import {
  AdNewNeedleMobile,
  AdNewYarnMobile,
  AdNewAccesoryMobile,
} from "@solisko/components-garngomman";
import { useState } from "react";

const AdToStash = () => {
  const [renderdComponent, setRenderdComponent] = useState(null);

  const categorySetter = (title) => {
    setCategory(title);
  };

  const renderComponent = (title) => {
    switch (title) {
      case "AccesoryList":
        setRenderdComponent(<AdNewAccesoryMobile />);
        break;
      case "NeedleList":
        setRenderdComponent(<AdNewNeedleMobile />);
        break;
      case "YarnList":
        setRenderdComponent(<AdNewYarnMobile />);
        break;
      default:
        setRenderdComponent(null);
        break;
    }
  };

  return (
    <>
      <div>{renderdComponent}</div>
    </>
  );
};

export default AdToStash;
