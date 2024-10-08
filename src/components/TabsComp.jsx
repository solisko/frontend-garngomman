import { Tabs } from "@solisko/components-garngomman";
import styles from "../styles/Stash.module.css";
import { useContext } from "react";
import { GarnContext } from "../context/GarnProvider";
import { useNavigate } from "react-router";

const TabsComp = ({ handleTabClick }) => {
  const { categorySetter } = useContext(GarnContext);
  const navigate = useNavigate();

  const onTabClick = (category) => {
    categorySetter(category);
    handleTabClick(category);
    navigate("/stash");
  };
  return (
    <Tabs
      btnClassName={styles.stashTab}
      title1="Stash"
      title2="Garn"
      title3="Nålar"
      title4="Tillbehör"
      handleClick={onTabClick}
    />
  );
};
export default TabsComp;
