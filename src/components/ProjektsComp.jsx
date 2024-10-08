import { useNavigate } from "react-router";
import projektsData from "../mockData/projektsData.json";
import TabsComp from "./TabsComp";

const ProjektsComp = () => {
  const navigate = useNavigate();

  const handleTabClick = () => {
    navigate("/stash");
  };
  return (
    <div>
      <div>
        <TabsComp handleTabClick={handleTabClick} />
      </div>
      {projektsData.length === 0 ? (
        <p>
          Du har inga påbörjade projekt! <br />
          Gå till en flik och börja markera saker i gömman för att skapa ett
          nytt projekt.
        </p>
      ) : (
        <div style={{ display: "flex", gap: "20px" }}>
          {projektsData.map((projekt, idx) => (
            <div
              style={{
                height: "100px",
                width: "100px",
                backgroundColor: "beige",
              }}
              key={idx}
            >
              <p>{projekt.name}</p>
            </div>
          ))}
        </div>
      )}
    </div>
  );
};
export default ProjektsComp;
