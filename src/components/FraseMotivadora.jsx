import { useState } from "react";

const frases = [
  "¡Tú puedes con todo!",
  "Sigue adelante, lo estás haciendo bien.",
  "El éxito es la suma de pequeños esfuerzos.",
  "Cree en ti mismo.",
  "Cada día es una nueva oportunidad."
];

export default function FraseMotivadora() {
  const [frase, setFrase] = useState(frases[Math.floor(Math.random() * frases.length)]);

  const nuevaFrase = () => {
    const aleatoria = frases[Math.floor(Math.random() * frases.length)];
    setFrase(aleatoria);
  };

  return (
    <div className="text-center space-y-4">
      <p className="text-xl italic">{frase}</p>
      <button onClick={nuevaFrase} className="bg-green-500 px-4 py-2 text-white rounded">
        Nueva frase
      </button>
    </div>
  );
}