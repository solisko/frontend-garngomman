import { Tabs } from "@solisko/components-garngomman";
import styles from "../styles/Stash.module.css";

const TabsComp = ({ handleTabClick }) => {
  return (
    <Tabs
      btnClassName={styles.stashTab}
      title1="Stash"
      title2="Garn"
      title3="Nålar"
      title4="Tillbehör"
      handleClick={handleTabClick}
    />
  );
};
export default TabsComp;
