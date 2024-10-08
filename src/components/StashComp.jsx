import { Stash, StashList } from "@solisko/components-garngomman";
import styles from "../styles/Stash.module.css";
import { useContext } from "react";
import { GarnContext } from "../context/GarnProvider";
import TabsComp from "./TabsComp";

const StashComp = () => {
  const { handleTabClick, stashListData } = useContext(GarnContext);

  return (
    <div>
      <TabsComp handleTabClick={handleTabClick} />
      <Stash
        className={styles.stash}
        stashContainerclassName={styles.stashContainer}
      />
      <StashList
        stashList={stashListData}
        listWrapperClassName={styles.listWrapper}
      />
    </div>
  );
};
export default StashComp;
