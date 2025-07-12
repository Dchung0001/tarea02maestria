// src/components/Calculadora.jsx
import { useState } from "react";
import "../App.css";

export default function Calculadora() {
  const [a, setA] = useState(0);
  const [b, setB] = useState(0);
  const [resultado, setResultado] = useState(null);

  return (
    <div className="app-container">
      <h2>Calculadora</h2>
      <input type="number" value={a} onChange={(e) => setA(+e.target.value)} />
      <input type="number" value={b} onChange={(e) => setB(+e.target.value)} />
      <div className="center-text">
        <button onClick={() => setResultado(a + b)}>+</button>
        <button onClick={() => setResultado(a - b)}>-</button>
        <button onClick={() => setResultado(a * b)}>*</button>
        <button onClick={() => setResultado(b !== 0 ? a / b : "∞")}>/</button>
      </div>
      <p className="center-text">Resultado: {resultado}</p>
    </div>
  );
}