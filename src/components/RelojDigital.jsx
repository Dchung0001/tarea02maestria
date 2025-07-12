import { useState, useEffect } from "react";

export default function RelojDigital() {
  const [hora, setHora] = useState(new Date());

  useEffect(() => {
    const timer = setInterval(() => setHora(new Date()), 1000);
    return () => clearInterval(timer);
  }, []);

  return <h1 className="text-3xl font-bold">{hora.toLocaleTimeString()}</h1>;
}