import React from "react";
import "./assets/css/App.css";

// Components Imports.
import Header from "./components/Header/Header";
import Footer from "./components/Footer/Footer";

// Routes.
import Router from "./Router";
import { BrowserRouter } from "react-router-dom";

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Header></Header>
        <section>
          <Router></Router>
        </section>
        <Footer></Footer>
      </BrowserRouter>
    </div>
  );
}

export default App;
