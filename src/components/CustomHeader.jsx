export default function CustomHeader({ onSearch }) {
  const handleInputChange = (e) => {
    onSearch(e.target.value);
  };

  return (
    <header className="header">
      <h1>🎮 Catálogo Interactivo</h1>
      <h2>React + Vite + JSX</h2>
      <input
        type="text"
        placeholder="Buscar por título o categoría..."
        onChange={handleInputChange}
        className="search-input"
      />
    </header>
  );
}
