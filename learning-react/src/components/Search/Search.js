import React, { Component } from "react";
import Slider from "../Slider/Slider";
import Sidebar from "../Sidebar/Sidebar";
import Articles from "../Articles/Articles";

export default class Search extends Component {
  render() {
    let searched = this.props.match.params.search;
    return (
      <div id="blog">
        <Slider
          title={"Búsqueda: " + searched}
          btn=""
          size="slider-small"
        ></Slider>
        <div className="center">
          <div id="content">
            {/* ARTICLES LIST FROM THE API */}
            <Articles search={searched}></Articles>
          </div>
          <Sidebar blog="true"></Sidebar>
        </div>
      </div>
    );
  }
}
