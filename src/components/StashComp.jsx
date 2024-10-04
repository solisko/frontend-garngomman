import { Stash } from "@solisko/components-garngomman";
import styles from "../styles/Stash.module.css";

const StashComp = () => {
  return (
    <div className={styles.stashContainer}>
      <Stash
        btnClassName={styles.stashTab}
        title1="Stash"
        title2="Garn"
        title3="Nålar"
        title4="Tillbehör"
      />
    </div>
  );
};
export default StashComp;
