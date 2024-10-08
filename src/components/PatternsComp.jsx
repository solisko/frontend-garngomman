import patternsData from "../mockData/patternsData.json";

const PatternsComp = () => {
  return (
    <div>
      {patternsData.length === 0 ? (
        <p>
          Du har inga påbörjade projekt! <br />
          Gå till en flik och börja markera saker i gömman för att skapa ett
          nytt projekt.
        </p>
      ) : (
        <div style={{ display: "flex", gap: "20px" }}>
          {patternsData.map((projekt, idx) => (
            <div
              style={{
                height: "80px",
                width: "80px",
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
export default PatternsComp;
