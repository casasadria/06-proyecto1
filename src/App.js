import { useState } from "react";
import { Buscador } from "./components/Buscador";
import { Crear } from "./components/Crear";
import { Listado } from "./components/Listado";

function App() {
    const[listadoState, setListadoState] = useState([]);
  return (
    <div className="layout">
    {/*Cabecera*/}
    <header className="header">
        <div className="logo">
            <div className="play"></div>
        </div>
        <h1>MisPelis</h1>
    </header>

    {/*Barra de navegación*/}
    <nav className="nav">
        <ul>
            <li><a href="/#">Inicio</a></li>
            <li><a href="/#">Peliculas</a></li>
            <li><a href="/#">Blog</a></li>
            <li><a href="/#">Contacto</a></li>
        </ul>
    </nav>

    {/*Contenido Principal*/}
    <section className="content">
        {/*Aqui van las peliculas*/}
        <Listado listadoState={listadoState} setListadoState={setListadoState} />
    </section>
    <aside className="lateral">
        <Buscador listadoState={listadoState} setListadoState={setListadoState}/>
        <Crear setListadoState={setListadoState}/>
    </aside>
    {/*Pie de pàgina*/}
    <footer className="footer">
        &copy; Master en JavaScript ES12 y TypeScript - <a href="https://adriacasas.es">adriacasas.es</a>
    </footer>
</div>
  );
}

export default App;
