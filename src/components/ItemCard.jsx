import { useState } from "react";

export default function ItemCard({ titulo, categoria, anio, destacado }) {
  const [favorito, setFavorito] = useState(false);

  const handleFavorito = () => {
    setFavorito(!favorito);
  };

  const cardClass = `
    item-card 
    ${destacado ? "destacado" : ""} 
    ${favorito ? "favorito" : ""}
  `;

  return (
    <div className={cardClass}>
      <h3>{titulo}</h3>
      <p>{categoria}</p>
      <p><strong>Año:</strong> {anio}</p>
      <button onClick={handleFavorito}>
        {favorito ? "💖 Quitar Favorito" : "🤍 Marcar Favorito"}
      </button>
    </div>
  );
}
