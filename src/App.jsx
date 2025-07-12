// src/App.jsx
import { useState } from "react";
import NotasRapidas from "./components/NotasRapidas";
import Calculadora from "./components/Calculadora";
import RelojDigital from "./components/RelojDigital";
import ContadorClics from "./components/ContadorClics";
import FraseMotivadora from "./components/FraseMotivadora";
import Semaforo from "./components/Semaforo";
import ColorFavorito from "./components/ColorFavorito";
import "./App.css";

export default function App() {
  const [appSeleccionada, setAppSeleccionada] = useState("Notas");

  const renderComponente = () => {
    switch (appSeleccionada) {
      case "Notas":
        return <NotasRapidas />;
      case "Calculadora":
        return <Calculadora />;
      case "Reloj":
        return <RelojDigital />;
      case "Contador":
        return <ContadorClics />;
      case "Frase":
        return <FraseMotivadora />;
      case "Semaforo":
        return <Semaforo />;
      case "Color":
        return <ColorFavorito />;
      default:
        return null;
    }
  };

  return (
    <div className="app-container">
      <h1>Tarea02 - Demo01</h1>
      <select value={appSeleccionada} onChange={(e) => setAppSeleccionada(e.target.value)}>
        <option value="Notas">Notas Rápidas</option>
        <option value="Calculadora">Calculadora</option>
        <option value="Reloj">Reloj Digital</option>
        <option value="Contador">Contador de Clics</option>
        <option value="Frase">Frase Motivadora</option>
        <option value="Semaforo">Semáforo</option>
        <option value="Color">Color Favorito</option>
      </select>
      <hr />
      {renderComponente()}
    </div>
  );
}