import {
  Start,
  Login,
  Community,
  Profil,
  Gdpr,
  /* accountSettings, */
  Membership,
  PersonSettings,
  Preferences,
  Support,
} from "@solisko/components-garngomman";
import { Routes, Route } from "react-router";
import StashComp from "../components/StashComp";

const Switch = () => {
  return (
    <div>
      <Routes>
        <Route path="/" element={<Start />} />
        <Route path="/login" element={<Login />} /> 
        <Route path="/registration" />
        <Route path="/stash" element={<StashComp />} />
        <Route path="/Profile" element={<Profil />} />
        <Route path="/profile/gdpr" element={<Gdpr />} />
        {/*<Route path="/profile/accountsettings" element={<accountSettings />} /> */}
        <Route path="/profile/membership" element={<Membership />} />
        <Route path="/profile/personsettings" element={<PersonSettings />} />
        <Route path="/profile/preferences" element={<Preferences />} />
        <Route path="/profile/support" element={<Support />} />
        <Route path="/addtostash" />
        <Route path="/project" />
        <Route path="/community" element={<Community />} />
        <Route path="/inspo" />
      </Routes>
    </div>
  );
};
export default Switch;
