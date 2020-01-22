import React from "react";
import "./assets/css/App.css";

// Components Imports.
import Header from "./components/Header/Header";
import Slider from "./components/Slider/Slider";
import Sidebar from "./components/Sidebar/Sidebar";
import Footer from "./components/Footer/Footer";
import Peliculas from "./components/Peliculas/Peliculas";

function App() {
  return (
    <div className="App">
      <Header></Header>
      <Slider></Slider>
      <div className="center">
        <Peliculas></Peliculas>
        <Sidebar></Sidebar>
      </div>
      <Footer></Footer>
    </div>
  );
}

export default App;
