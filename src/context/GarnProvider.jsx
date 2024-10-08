import { createContext, useState } from "react";
import yarnData from "../mockData/yarnData.json";
import needleData from "../mockData/needleData.json";
import accesoryData from "../mockData/accesoryData.json";
import {
  AdNewNeedleMobile,
  AdNewYarnMobile,
  AdNewAccesoryMobile,
} from "@solisko/components-garngomman";

export const GarnContext = createContext();

const GarnProvider = (props) => {
  const [category, setCategory] = useState(null);
  const [stashListData, setStashListData] = useState([
    ...yarnData,
    ...needleData,
    ...accesoryData,
  ]);
  const [renderdComponent, setRenderdComponent] = useState(null);

  const categorySetter = (title) => {
    setCategory(title);
  };

  const handleTabClick = (category) => {
    categorySetter(category);

    switch (category) {
      case "Garn":
        setStashListData(yarnData);
        break;
      case "Nålar":
        setStashListData(needleData);
        break;
      case "Tillbehör":
        setStashListData(accesoryData);
        break;
      default:
        setStashListData([...yarnData, ...needleData, ...accesoryData]);
    }
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
          handleTabClick,
          stashListData,
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
