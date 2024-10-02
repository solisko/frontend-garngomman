import "./App.css";
import { Header } from "@solisko/components-garngomman";
// import { Start } from "@solisko/components-garngomman";
import { Stash } from "@solisko/components-garngomman";

function App() {
  // const FetchFromBackEnd = async () => {
  //   try {
  //     const response = await fetch("http://localhost:3000/api/user");

  //     if (!response.ok) {
  //       throw new Error("Wtf");
  //     }
  //     const data = await response.json();
  //     console.log(data);
  //   } catch (error) {
  //     console.error("catchen");
  //   }
  // };

  // FetchFromBackEnd();

  return (
    <>
      <Header />
      {/* <Start /> */}
      <Stash/>
    </>
  );
}

export default App;
