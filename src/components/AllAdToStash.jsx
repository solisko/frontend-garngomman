import {
  AdNewAccesoryMobile,
  AdNewNeedleMobile,
  AdNewYarnMobile,
} from "@solisko/components-garngomman";
import { useNavigate } from "react-router";

const AllAdToStash = () => {
  const navigate = useNavigate();

  const navigateHandler = () => {
    navigate("/stash");
  };

  return (
    <>
      <AdNewYarnMobile adYarnHandler={navigateHandler} />
      <AdNewNeedleMobile adNewNeedleHandler={navigateHandler} />
      <AdNewAccesoryMobile loginHandler={navigateHandler} />
    </>
  );
};

export default AllAdToStash;
