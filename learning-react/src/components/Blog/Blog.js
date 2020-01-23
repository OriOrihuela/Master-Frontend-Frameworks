import React, { Component } from "react";
import Slider from "../Slider/Slider";
import Sidebar from "../Sidebar/Sidebar";

export default class Blog extends Component {
  render() {
    return (
      <div id="blog">
        <Slider title="Blog" btn="" size="slider-small"></Slider>
        <div className="center">
          <div id="content">{/* ARTICLES LIST FROM THE API */}</div>
          <Sidebar blog="true"></Sidebar>
        </div>
      </div>
    );
  }
}
