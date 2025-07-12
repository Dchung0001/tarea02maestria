import { useState, useEffect } from "react";

export default function ColorFavorito() {
  const [color, setColor] = useState(localStorage.getItem("color") || "#ffffff");

  useEffect(() => {
    localStorage.setItem("color", color);
    document.body.style.backgroundColor = color;
  }, [color]);

  return (
    <div className="p-4">
      <label>Elige tu color favorito: </label>
      <input type="color" value={color} onChange={(e) => setColor(e.target.value)} />
    </div>
  );
}