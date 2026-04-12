import { useState } from "react";
import { catalogo } from "./data";
import CustomHeader from "./components/CustomHeader";
import CardGrid from "./components/CardGrid";
import "./styles.css";

function App() {
  const [searchTerm, setSearchTerm] = useState("");

  const handleSearch = (term) => {
    setSearchTerm(term.toLowerCase());
  };

  const filteredItems = catalogo.filter(
    (item) =>
      item.titulo.toLowerCase().includes(searchTerm) ||
      item.categoria.toLowerCase().includes(searchTerm)
  );

  return (
    <>
      <CustomHeader onSearch={handleSearch} />
      <CardGrid items={filteredItems} />
      <footer className="footer">© 2026 - Proyecto Interactivo en React</footer>
    </>
  );
}

export default App;
