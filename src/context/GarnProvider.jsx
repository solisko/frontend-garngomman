import { createContext, useState } from "react";
import {
  AdNewNeedleMobile,
  AdNewYarnMobile,
  AdNewAccesoryMobile,
} from "@solisko/components-garngomman";

export const GarnContext = createContext();

const GarnProvider = (props) => {
  const [category, setCategory] = useState(null);
  const [renderdComponent, setRenderdComponent] = useState(null);

  const categorySetter = (title) => {
    setCategory(title);
  };

  const renderComponent = (category) => {
    switch (category) {
      case "Tillbehör":
        setRenderdComponent(<AdNewAccesoryMobile />);
        break;
      case "Nålar":
        setRenderdComponent(<AdNewNeedleMobile />);
        break;
      case "Garn":
        setRenderdComponent(<AdNewYarnMobile />);
        break;
      default:
        setRenderdComponent(null);
        break;
    }
  };

  return (
    <>
      <GarnContext.Provider
        value={{
          categorySetter,
          category,
          renderdComponent,
          renderComponent,
        }}
      >
        {props.children}
      </GarnContext.Provider>
    </>
  );
};

export default GarnProvider;
