import React, { Component } from "react";
import { Link } from "react-router-dom";

export default class Slider extends Component {
  render() {
    return (
      <div>
        <div id="slider" className={this.props.size}>
          <h1>{this.props.title}</h1>
          {this.props.btn && (
            <Link href="blog.html" className="btn-white">
              {this.props.btn}
            </Link>
          )}
        </div>
      </div>
    );
  }
}
