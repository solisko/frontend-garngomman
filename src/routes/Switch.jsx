import {
  Community,
  Profil,
  Gdpr,
  AccountSettings,
  Membership,
  PersonSettings,
  Preferences,
  Support,
} from "@solisko/components-garngomman";
import { Routes, Route } from "react-router";
import StashComp from "../components/StashComp";
import AdToStash from "../components/AdToStash";
import ProjektsComp from "../components/ProjektsComp";
import StartComp from "../components/StartComp";
import LoginComp from "../components/LoginComp";
import PasswordComp from "../components/PasswordComp";

const Switch = () => {
  return (
    <div>
      <Routes>
        <Route path="/" element={<StartComp />} />
        <Route path="/login" element={<LoginComp />} />
        <Route path="/password" element={<PasswordComp/>} />
        <Route path="/stash" element={<StashComp />} />
        <Route path="/profile" element={<Profil />} />
        <Route path="/profile/gdpr" element={<Gdpr />} />
        <Route path="/profile/accountsettings" element={<AccountSettings />} />
        <Route path="/profile/membership" element={<Membership />} />
        <Route path="/profile/personsettings" element={<PersonSettings />} />
        <Route path="/profile/preferences" element={<Preferences />} />
        <Route path="/profile/support" element={<Support />} />
        <Route path="/addtostash" element={<AdToStash />} />
        <Route path="/project" element={<ProjektsComp />} />
        <Route path="/community" element={<Community />} />
      </Routes>
    </div>
  );
};
export default Switch;
