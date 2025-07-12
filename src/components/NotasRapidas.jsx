// src/components/NotasRapidas.jsx
import { useState, useEffect } from "react";
import "../App.css";

export default function NotasRapidas() {
  const [nota, setNota] = useState(localStorage.getItem("nota") || "");
  const [busqueda, setBusqueda] = useState("");
  const [coincide, setCoincide] = useState(true);

  useEffect(() => {
    localStorage.setItem("nota", nota);
  }, [nota]);

  const borrarNota = () => {
    setNota("");
    localStorage.removeItem("nota");
  };

  const buscarNota = () => {
  const guardada = localStorage.getItem("nota") || "";
    setCoincide(guardada.includes(busqueda));
  };

return (
    <div className="app-container">
      <h2>Notas rápidas</h2>
      <textarea
        value={nota}
        onChange={(e) => setNota(e.target.value)}
        placeholder="Escribe tu nota aquí..."
        rows={10}
      />
      <div className="center-text">
        <button onClick={borrarNota}>Borrar nota</button>
      </div>
      <hr />
      <h3>Buscar texto en la nota guardada:</h3>
      <input
        type="text"
        value={busqueda}
        onChange={(e) => setBusqueda(e.target.value)}
        placeholder="Texto a buscar"
      />
      <button onClick={buscarNota}>Buscar</button>
      {!coincide && <p style={{ color: "red" }}>No se encontró coincidencia en la nota.</p>}
      {coincide && busqueda && <p style={{ color: "green" }}>Texto encontrado en la nota.</p>}
    </div>
  );
}
