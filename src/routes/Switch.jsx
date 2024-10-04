import { Start, Community } from "@solisko/components-garngomman";
import { Routes, Route } from "react-router";
import StashComp from "../components/StashComp";

const Switch = () => {
  return (
    <div>
      <Routes>
        <Route path="/" element={<Start />} />
        <Route path="/login" />
        <Route path="/registration" />
        <Route path="/stash" element={<StashComp />} />
        <Route path="/profile" />
        <Route path="/profile/gdpr" />
        <Route path="/profile/accountsettings" />
        <Route path="/profile/membership" />
        <Route path="/profile/personsettings" />
        <Route path="/profile/preferences" />
        <Route path="/profile/support" />
        <Route path="/addtostah" />
        <Route path="/project" />
        <Route path="/community" element={<Community />} />
        <Route path="/inspo" />
      </Routes>
    </div>
  );
};
export default Switch;
