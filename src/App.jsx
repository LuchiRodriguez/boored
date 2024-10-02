import { useState } from "react";
import "./App.css";
import logo from "./assets/logo-bored.png";
import bean from "./assets/logo.png";
import separate from "./assets/separate.png";
import { getActivity, findByType } from "./api/services";

function App() {
  const [type, setType] = useState();
  const [activity, setActivity] = useState();

  const handleGenerateActivity = () => {
    if (type) {
      findByType(type).then((data) => setActivity(data.activity));
    } else {
      getActivity().then((data) => {
        setActivity(data.activity), setType(data.type);
      });
    }
  };

  return (
    <>
      <header>
        <img src={logo} alt="" />
        BOORED
      </header>

      <main>
        <section id="generate">
          <nav>
            <button
              className={type === "education" ? "active" : ""}
              onClick={() => setType("education")}
            >
              Educació
            </button>
            <button
              className={type === "recreational" ? "active" : ""}
              onClick={() => setType("recreational")}
            >
              Recreatiu
            </button>
            <button
              className={type === "social" ? "active" : ""}
              onClick={() => setType("social")}
            >
              Social
            </button>
            <button
              className={type === "charity" ? "active" : ""}
              onClick={() => setType("charity")}
            >
              Caritat
            </button>
            <button
              className={type === "cooking" ? "active" : ""}
              onClick={() => setType("cooking")}
            >
              Cuinar
            </button>
            <button
              className={type === "relaxation" ? "active" : ""}
              onClick={() => setType("relaxation")}
            >
              Relaxació
            </button>
            <button
              className={type === "busywork" ? "active" : ""}
              onClick={() => setType("busywork")}
            >
              Busywork
            </button>
          </nav>
          <img src={bean} alt="" />
          <div>
            <h4>
              TROBA ALGUNA <br />
              COSA A FER
            </h4>
            <button onClick={() => handleGenerateActivity()}>Generar</button>
          </div>
        </section>
        <section id="activity">
          <img src={separate} alt="" />
          <h4>Activitat:</h4>
          <h6>{activity}</h6>
        </section>
      </main>
    </>
  );
}

export default App;
