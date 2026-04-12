import ItemCard from "./ItemCard";

export default function CardGrid({ items }) {
  return (
    <main className="grid">
      {items.map((item) => (
        <ItemCard 
          key={item.id} 
          titulo={item.titulo} 
          categoria={item.categoria} 
          anio={item.anio} 
          destacado={item.destacado} 
        />
      ))}
    </main>
  );
}
