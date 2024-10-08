import { useContext } from "react";
import { GarnContext } from "../context/GarnProvider";

const AdToStash = () => {
  const { renderdComponent } = useContext(GarnContext);

  return <div>{renderdComponent}</div>;
};

export default AdToStash;
