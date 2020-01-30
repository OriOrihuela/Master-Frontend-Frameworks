import React, { Component } from "react";
import Sidebar from "../Sidebar/Sidebar";

// Importing the Back-end API url / HTTP requests.
import GLOBAL from "../../Global";
import axios from "axios";

// Custom CSS.
import "../CreateArticle/CreateArticle.css";

// Validator of React.
import SimpleReactValidator from "simple-react-validator";

// Redirecting import.
import { Redirect } from "react-router-dom";

// Custom alerts.
import swal from "sweetalert";

export default class CreateArticle extends Component {
  /**
   * PROPERTIES
   */
  url = GLOBAL.url;

  titleRef = React.createRef();
  contentRef = React.createRef();

  validator = new SimpleReactValidator();

  // validator = new SimpleReactValidator({
  //   messages: {
  //     required: "CUSTOM MESSAGE"
  //   }
  // });

  state = {
    article: {},
    status: null,
    selectedFile: null
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
          <form className="mid-form" onSubmit={this.saveData}>
            <div className="form-group">
              <label htmlFor="title">Título</label>
              <input
                type="text"
                name="title"
                ref={this.titleRef}
                onChange={this.changeState}
              ></input>
              {this.validator.message(
                "title",
                this.state.article.title,
                "required|alpha_num_space"
              )}
            </div>
            <div className="form-group">
              <label htmlFor="content">Contenido</label>
              <textarea
                type="text"
                name="content"
                ref={this.contentRef}
                onChange={this.changeState}
              ></textarea>
              {this.validator.message(
                "content",
                this.state.article.content,
                "required|alpha_num_space"
              )}
            </div>
            <div className="form-group">
              <label htmlFor="file0">Imagen</label>
              <input
                type="file"
                name="file0"
                onChange={this.fileChange}
              ></input>
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

  // Method to save the data of the form.
  saveData = event => {
    event.preventDefault();
    // Fill the state with the form values.
    this.changeState();
    // Checking if the form validation is correct.
    if (this.validator.allValid()) {
      this.saveArticle();
    } else {
      this.validator.showMessages();
      this.forceUpdate();
      this.setState({
        status: "failed"
      });
    }
  };

  // Method to save an article in the DB.
  saveArticle = () => {
    // Make an HTTP request to save the article in the DB.
    axios.post(this.url + "save", this.state.article).then(response => {
      if (response.data.article) {
        this.setState({
          article: response.data.article,
          status: "waiting"
        });
        // Custom alert to tell the user the article has been created.
        swal(
          "Artículo creado",
          "El artículo ha sido creado correctamente",
          "success"
        );
        // Uploading the image to the article.
        if (this.state.selectedFile !== null) {
          this.saveImage(response);
        } else {
          this.setState({
            status: "success"
          });
        }
      } else {
        this.setState({
          status: "failed"
        });
      }
    });
  };

  // Method to save the image of an article.
  saveImage = () => {
    // Retrieve the article's ID.
    const ARTICLE_ID = this.state.article._id;
    // Create a Form data and add the file.
    const FORM_DATA = new FormData();
    FORM_DATA.append(
      "file0",
      this.state.selectedFile,
      this.state.selectedFile.name
    );
    // AJAX request.
    axios
      .post(this.url + "upload-image/" + ARTICLE_ID, FORM_DATA)
      .then(response => {
        if (response.data.article) {
          this.setState({
            article: response.data.article,
            status: "success"
          });
        } else {
          this.setState({
            article: response.data.article,
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
    this.validator.showMessages();
    this.forceUpdate();
  };

  // Method to
  fileChange = event => {
    this.setState({
      selectedFile: event.target.files[0]
    });
  };
}
