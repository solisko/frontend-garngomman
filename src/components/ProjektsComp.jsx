import { useNavigate } from "react-router";
import projektsData from "../mockData/projektsData.json";
import TabsComp from "../components/TabsComp";

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
                minheight: "100px",
                minWidth: "100px",
                backgroundColor: "beige",
              }}
              key={idx}
            >
              <h4>{projekt.name}</h4>
              <p>{projekt.description}</p>
            </div>
          ))}
        </div>
      )}
    </div>
  );
};
export default ProjektsComp;
