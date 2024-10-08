import {
  Start,
  EmailLoginPage,
  EmailPasswordPage,
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
import PatternsComp from "../components/PatternsComp";

const Switch = () => {
  return (
    <div>
      <Routes>
        <Route path="/" element={<Start />} />
        <Route path="/login" element={<EmailLoginPage />} />
        <Route path="/password" element={<EmailPasswordPage />} />
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
        <Route path="/patterns" element={<PatternsComp/>}/>
      </Routes>
    </div>
  );
};
export default Switch;
