import { Stash, StashList } from "@solisko/components-garngomman";
import styles from "../styles/Stash.module.css";
import { useContext } from "react";
import { GarnContext } from "../context/GarnProvider";
import TabsComp from "./TabsComp";
import AdToStash from "./AdToStash";

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
      <AdToStash />
    </div>
  );
};
export default StashComp;
