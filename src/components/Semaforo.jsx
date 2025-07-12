import { useState } from "react";
import "../App.css";

export default function Semaforo() {
  const [color, setColor] = useState("");

  return (
    <div className="app-container">
      <h2>Semáforo Interactivo</h2>
      <div className="semaforo">
        <div className={`semaforo-luz red ${color === "red" ? "activa" : ""}`}></div>
        <div className={`semaforo-luz yellow ${color === "yellow" ? "activa" : ""}`}></div>
        <div className={`semaforo-luz green ${color === "green" ? "activa" : ""}`}></div>
      </div>
      <div className="center-text">
        <button onClick={() => setColor("red")}>Rojo</button>
        <button onClick={() => setColor("yellow")}>Amarillo</button>
        <button onClick={() => setColor("green")}>Verde</button>
      </div>
    </div>
  );
}
