import { useState, useEffect } from "react";

export default function ContadorClicks() {
  const [count, setCount] = useState(() => Number(localStorage.getItem("clicks")) || 0);

  useEffect(() => {
    localStorage.setItem("clicks", count);
  }, [count]);

  return (
    <div className="text-center">
      <p className="text-xl mb-4">Clics: {count}</p>
      <button
        onClick={() => setCount(count + 1)}
        className="px-4 py-2 bg-blue-600 text-white rounded"
      >
        Click
      </button>
    </div>
  );
}