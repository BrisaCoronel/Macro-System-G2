import React, { useEffect, useState } from "react";
import { obtenerCantidadTickets } from "../api/api";

function App() {
  const [cantidadTickets, setCantidadTickets] = useState(null);

  useEffect(() => {
    obtenerCantidadTickets()
      .then(cantidad => setCantidadTickets(cantidad));
  }, []);

  return (
    <div>
      <h1>Cantidad de tickets: {cantidadTickets}</h1>
    </div>
  );
}

export default App;
