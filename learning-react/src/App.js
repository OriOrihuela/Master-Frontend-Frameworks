import React from "react";
import "./assets/css/App.css";

// Components Imports.
import Header from "./components/Header/Header";
import Slider from "./components/Slider/Slider";
import Sidebar from "./components/Sidebar/Sidebar";
import Footer from "./components/Footer/Footer";

// Routes.
import Router from "./Router";
import { BrowserRouter } from "react-router-dom";

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Header></Header>
        <Slider></Slider>
        <div className="center">
          <section id="content">
            <Router></Router>
          </section>
          <Sidebar></Sidebar>
        </div>
        <Footer></Footer>
      </BrowserRouter>
    </div>
  );
}

export default App;
