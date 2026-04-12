import ItemCard from "./ItemCard";

export default function CardGrid({ items }) {
  return (
    <main className="grid">
      {items.length > 0 ? (
        items.map((item) => (
          <ItemCard
            key={item.id}
            titulo={item.titulo}
            categoria={item.categoria}
            anio={item.anio}
            destacado={item.destacado}
          />
        ))
      ) : (
        <p className="no-results">No se encontraron resultados.</p>
      )}
    </main>
  );
}
