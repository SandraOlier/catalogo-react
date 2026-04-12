🎮 Catálogo Interactivo en React
📌 Descripción
Aplicación desarrollada con Vite + React + JSX que muestra un catálogo interactivo de videojuegos y animes.
El proyecto demuestra dominio en:

Creación y reutilización de componentes.

Flujo de datos mediante Props.

Manejo de estado con useState.

Renderizado condicional y estilos dinámicos.

🚀 Tecnologías Utilizadas
Vite → Inicialización rápida del proyecto.

React → Librería principal para la construcción de interfaces.

JSX → Sintaxis para combinar JavaScript y HTML.

CSS → Estilos dinámicos y condicionales.

📂 Estructura del Proyecto
Código
src/
 ├── components/
 │    ├── CustomHeader.jsx   # Encabezado con buscador
 │    ├── CardGrid.jsx       # Contenedor que renderiza tarjetas con .map()
 │    └── ItemCard.jsx       # Tarjeta individual con interactividad
 ├── data.js                 # Mock Data del catálogo
 ├── App.jsx                 # Orquestador principal
 ├── main.jsx                # Punto de entrada
 └── styles.css              # Estilos globales y condicionales
⚙️ Funcionalidades
Buscador en tiempo real: filtra por título o categoría.

Favoritos dinámicos: cada tarjeta puede marcarse como favorita con estilos condicionales.

Estilos destacados: borde dorado para ítems destacados desde el mock data.

Animaciones sutiles: hover con transform: scale(1.05) para dar vida al catálogo.

🧩 Componentes
CustomHeader: título, subtítulo y buscador interactivo.

CardGrid: recibe el arreglo filtrado y renderiza las tarjetas con .map().

ItemCard: muestra la información individual y permite marcar favoritos.

🎨 Estilos Dinámicos
destacado: borde dorado y fondo especial.

favorito: borde rojo y fondo rosado.

Hover: efecto de escala para dar sensación de interacción.

📋 Rúbrica de Evaluación
✔️ Setup correcto: compila sin errores con npm run dev.
✔️ Estructura clara: separación de responsabilidades en componentes.
✔️ Props: flujo de datos padre → hijo sin variables globales.
✔️ Uso de .map(): renderizado de listas con key único.
✔️ Estado y estilos: useState modifica la vista y estilos condicionales aplicados.

▶️ Ejecución
Clonar el repositorio:

bash
git clone <URL-del-repo>
Instalar dependencias:

bash
npm install
Ejecutar en modo desarrollo:

bash
npm run dev