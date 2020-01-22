import React, { Component } from "react";
import logo from "../../assets/images/logo.svg";

export default class Header extends Component {
  render() {
    return (
      <div>
        <header id="header">
          <div className="center">
            {/* LOGO */}
            <div id="logo">
              <img src={logo} alt="logotipo" className="app-logo" />
              <span id="brand">
                <strong>Curso</strong> React
              </span>
            </div>
            {/* NAVIGATION MENU */}
            <nav id="menu">
              <ul>
                <li>
                  <a href="index.html">Inicio</a>
                </li>
                <li>
                  <a href="blog.html">Blog</a>
                </li>
                <li>
                  <a href="formulario.html">Formulario</a>
                </li>
              </ul>
            </nav>
            {/* CLEAN FLOATS */}
            <div className="clearfix"></div>
          </div>
        </header>
      </div>
    );
  }
}
