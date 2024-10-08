import { Stash, StashList } from "@solisko/components-garngomman";
import styles from "../styles/Stash.module.css";
import yarnData from "../mockData/yarnData.json";
import needleData from "../mockData/needleData.json";
import accesoryData from "../mockData/accesoryData.json";
import { useContext, useState } from "react";
import { GarnContext } from "../context/GarnProvider";
import TabsComp from "./TabsComp";

const StashComp = () => {
  const { categorySetter, category } = useContext(GarnContext);
  const [stashListData, setStashListData] = useState([
    ...yarnData,
    ...needleData,
    ...accesoryData,
  ]);

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

  return (
    <div>
      <TabsComp handleTabClick={handleTabClick} />
      <Stash
        className={styles.stash}
        stashContainerclassName={styles.stashConatiner}
      />
      <StashList
        stashList={stashListData}
        listWrapperClassName={styles.listWrapper}
      />
    </div>
  );
};
export default StashComp;
