
import { useState, useEffect } from "react";
import { catalogo } from "./data"; // ✅ corregido: apunta a src/data.js
import CustomHeader from "./components/CustomHeader";
import CardGrid from "./components/CardGrid";
import "./styles.css";

function App() {
  const [searchTerm, setSearchTerm] = useState("");
  const [loading, setLoading] = useState(true); // ✅ estado de carga

  // Simula un pequeño tiempo de carga
  useEffect(() => {
    const timer = setTimeout(() => setLoading(false), 1000);
    return () => clearTimeout(timer);
  }, []);

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

      {loading ? (
        <div className="loading-container">
          <div className="spinner"></div>
          <p>Cargando catálogo…</p>
        </div>
      ) : (
        <CardGrid items={filteredItems} />
      )}

      <footer className="footer">© 2026 - Catálogo Interactivo en React</footer>
    </>
  );
}

export default App;
