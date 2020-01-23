import React, { Component } from "react";
import Slider from "../Slider/Slider";
import Sidebar from "../Sidebar/Sidebar";

export default class Formulario extends Component {
  render() {
    return (
      <div id="blog">
        <Slider title="Formulario" size="slider-small"></Slider>
        <div className="center">
          <div id="content">{/* ARTICLES LIST FROM THE API */}</div>
          <Sidebar blog="false"></Sidebar>
        </div>
      </div>
    );
  }
}
