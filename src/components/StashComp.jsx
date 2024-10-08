import { Stash, StashList } from "@solisko/components-garngomman";
import styles from "../styles/Stash.module.css";
import { useContext } from "react";
import { GarnContext } from "../context/GarnProvider";

const StashComp = () => {
  const { categorySetter, category } = useContext(GarnContext);

  const [renderedList, setRenderedList] = useState(null);

  const renderList = (category) => {
    switch (category) {
      case "Stash":
        setRenderedList(<StashList />);
        break;
      case "Garn":
        setRenderedList(<Pear />);
        break;
      case "Nålar":
        setRenderedList(<Banana />);
        break;
      case "Tillbehör":
        setRenderedList(<Banana />);
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
      />
    </div>
  );
};
export default StashComp;
