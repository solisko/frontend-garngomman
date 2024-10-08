import { Stash, StashList } from "@solisko/components-garngomman";
import styles from "../styles/Stash.module.css";
import yarnData from "../mockData/yarnData.json";
import needleData from "../mockData/needleData.json";
import accesoryData from "../mockData/accesoryData.json";

const StashComp = () => {
  const stashList = [...yarnData, ...needleData, ...accesoryData];

  return (
    <div className={styles.stashContainer}>
      <Stash
        className={styles.stash}
        btnClassName={styles.stashTab}
        title1="Stash"
        title2="Garn"
        title3="Nålar"
        title4="Tillbehör"
      />
      <StashList stashList={stashList} />
    </div>
  );
};
export default StashComp;
