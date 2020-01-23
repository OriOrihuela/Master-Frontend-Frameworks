import React, { Component } from "react";
import logo from "../../assets/images/logo.svg";
import { NavLink } from "react-router-dom";

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
                  <NavLink to="/home" activeClassName="active">Inicio</NavLink>
                </li>
                <li>
                  <NavLink to="/ruta-prueba">Blog</NavLink>
                </li>
                <li>
                  <NavLink to="/página-1">Formulario</NavLink>
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
