import { createContext, useState } from "react";
import yarnData from "../mockData/yarnData.json";
import needleData from "../mockData/needleData.json";
import accesoryData from "../mockData/accesoryData.json";

export const GarnContext = createContext();

const GarnProvider = (props) => {
  const [category, setCategory] = useState(null);
  const [renderedComponent, setRenderedComponent] = useState(null);
  const [stashListData, setStashListData] = useState([
    ...yarnData,
    ...needleData,
    ...accesoryData,
  ]);

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

  const renderComponent = (title) => {
    switch (title) {
      case "Garn":
        setRenderedComponent(<Apple />);
        break;
      case "Nålar":
        setRenderedComponent(<Pear />);
        break;
      case "Tillbehör":
        setRenderedComponent(<Banana />);
        break;
      default:
        setRenderedComponent(null);
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
        }}
      >
        {props.children}
      </GarnContext.Provider>
    </>
  );
};

export default GarnProvider;
