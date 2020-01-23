import React, { Component } from "react";

export default class Slider extends Component {
  render() {
    return (
      <div>
        <div id="slider" className={this.props.size}>
          <h1>{this.props.title}</h1>
          {this.props.btn && (
            <a href="blog.html" className="btn-white">
              {this.props.btn}
            </a>
          )}
        </div>
      </div>
    );
  }
}
