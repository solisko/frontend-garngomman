import "./App.css";
import { Header } from "@solisko/components-garngomman";
import Switch from "./routes/Switch";
import NavbarComp from "./components/NavbarComp";
import styles from "./styles/General.module.css";
import { useNavigate } from "react-router";

function App() {
  const navigate = useNavigate();

  const handleHeaderClick = () => {
    navigate("/"); // Navigera till "/"
  };

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

  // FetchFromBackEnd()

  return (
    <div className={styles.mainContainer}>
      <div onClick={handleHeaderClick}>
        <Header />
      </div>
      <div className={styles.contentContainer}>
        <Switch />
      </div>
      <NavbarComp />
    </div>
  );
}

export default App;
