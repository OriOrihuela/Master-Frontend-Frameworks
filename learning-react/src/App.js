import React from "react";
import logo from "./assets/images/logo.svg";
import "./assets/css/App.css";

// Components Imports.
import Header from "./components/Header/Header";
import Slider from "./components/Slider/Slider";
import Sidebar from "./components/Sidebar/Sidebar";
import Footer from "./components/Footer/Footer";
import SeccionPruebas from "./components/SeccionPruebas/SeccionPruebas";

function App() {
  return (
    <div className="App">
      <Header></Header>
      <Slider></Slider>
      <div class="center">
        <SeccionPruebas></SeccionPruebas>
        <Sidebar></Sidebar>
      </div>
      <Footer></Footer>
    </div>
  );
}

export default App;
