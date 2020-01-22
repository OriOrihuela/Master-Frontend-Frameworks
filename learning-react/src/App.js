import React from "react";
import logo from "./assets/images/logo.svg";
import "./assets/css/App.css";

// Components Imports.
import MiComponente from "./components/MiComponente/MiComponente";
import Peliculas from "./components/Peliculas/Peliculas";

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        <section className="componentes">
          <MiComponente></MiComponente>
          <Peliculas></Peliculas>
        </section>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
      </header>
    </div>
  );
}

export default App;
