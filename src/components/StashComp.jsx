import {
  Stash,
  StashList,
  YarnList,
  NeedleList,
  AccesoryList,
} from "@solisko/components-garngomman";
import styles from "../styles/Stash.module.css";
import yarnData from "../mockData/yarnData.json";
import needleData from "../mockData/needleData.json";
import accesoryData from "../mockData/accesoryData.json";
import { useContext, useState } from "react";
import { GarnContext } from "../context/GarnProvider";

const StashComp = () => {
  const { categorySetter, category } = useContext(GarnContext);
  const [renderedList, setRenderedList] = useState(null);
  const stashList = [...yarnData, ...needleData, ...accesoryData];

  const handleTabClick = (category) => {
    categorySetter(category);
    renderList(category);
  };

  const renderList = (category) => {
    switch (category) {
      case "Stash":
        setRenderedList(<StashList />);
        break;
      case "Garn":
        setRenderedList(<YarnList />);
        break;
      case "Nålar":
        setRenderedList(<NeedleList />);
        break;
      case "Tillbehör":
        setRenderedList(<AccesoryList />);
        break;
      default:
        setRenderedList(null);
    }
  };

  return (
    <div className={styles.stashContainer}>
      <Stash
        className={styles.stash}
        btnClassName={styles.stashTab}
        title1="Stash"
        title2="Garn"
        title3="Nålar"
        title4="Tillbehör"
        handleClick={handleTabClick}
      />
      <div>{renderedList}</div>
      {/* <StashList stasList={stashList} /> */}
    </div>
  );
};
export default StashComp;
