import React, { Component } from "react";
import axios from "axios";
import { Redirect } from "react-router-dom";
import GLOBAL from "../../Global";
import Sidebar from "../Sidebar/Sidebar";
import "../CreateArticle/CreateArticle.css";

export default class CreateArticle extends Component {
  /**
   * PROPERTIES
   */
  url = GLOBAL.url;

  titleRef = React.createRef();
  contentRef = React.createRef();

  state = {
    article: {},
    status: null
  };

  // Render method.
  render() {
    if (this.state.status === "success") {
      return <Redirect to="/blog"></Redirect>;
    }
    return (
      <div className="center">
        <section id="content">
          <h1 className="subheader">Crear artículo</h1>
          <form className="mid-form" onSubmit={this.saveArticle}>
            <div className="form-group">
              <label htmlFor="title">Título</label>
              <input
                type="text"
                name="title"
                ref={this.titleRef}
                onChange={this.changeState}
              ></input>
            </div>
            <div className="form-group">
              <label htmlFor="content">Contenido</label>
              <textarea
                type="text"
                name="content"
                ref={this.contentRef}
                onChange={this.changeState}
              ></textarea>
            </div>
            <div className="form-group">
              <label htmlFor="file0">Imagen</label>
              <input type="file" name="file0"></input>
            </div>
            <input
              type="submit"
              value="Guardar"
              className="btn btn-success"
            ></input>
          </form>
        </section>
        <Sidebar />
      </div>
    );
  }

  // Method to save an article in the DB.
  saveArticle = event => {
    event.preventDefault();
    // Fill the state with the form values.
    this.changeState();
    // Make an HTTP request to save the article in the DB.
    axios.post(this.url + "save", this.state.article).then(response => {
      if (response.data.article) {
        this.setState({
          article: response.data.article,
          status: "success"
        });
      } else {
        this.setState({
          status: "failed"
        });
      }
    });
  };

  // Method to change the state of the component whenever the "saveArticle" is called.
  changeState = () => {
    this.setState({
      article: {
        title: this.titleRef.current.value,
        content: this.contentRef.current.value
      }
    });
  };
}
