import React, { Component } from "react";
import Slider from "../Slider/Slider";
import Sidebar from "../Sidebar/Sidebar";
import Articles from '../Articles/Articles'

export default class Home extends Component {
  render() {
    return (
      <div id="home">
        <Slider title="Bienvenido al curso sobre React" btn="Ir al blog" size="slider-big"></Slider>
        <div className="center">
          <div id="content">
            <h1 className="subheader">Últimos artículos</h1>
            <Articles home="true"></Articles>
          </div>
          <Sidebar></Sidebar>
        </div>
      </div>
    );
  }
}
