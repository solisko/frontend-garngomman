import { Start, Stash } from "@solisko/components-garngomman";
import { Routes, Route } from "react-router";

const Switch = () => {
  return (
    <div>
      <Routes>
        <Route path="/" element={<Start />} />
        <Route path="/login" />
        <Route path="/registration" />
        <Route
          path="/stash"
          element={
            <Stash
              title1="Stash"
              title2="Garn"
              title3="Nålar"
              title4="Tillbehör"
            />
          }
        />
        <Route path="/profile" />
        <Route path="/addtostah" />
        <Route path="/project" />
        <Route path="/community" />
        <Route path="/inspo" />
      </Routes>
    </div>
  );
};
export default Switch;
