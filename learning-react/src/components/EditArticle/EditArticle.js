import React, { Component } from "react";
import Sidebar from "../Sidebar/Sidebar";

// Importing the Back-end API url / HTTP requests.
import axios from "axios";
import GLOBAL from "../../Global";

// Custom CSS.
import "../EditArticle/EditArticle.css";
import ReactImage from "../../assets/images/logo.svg";

// Validator of React.
import SimpleReactValidator from "simple-react-validator";

// Redirecting import.
import { Redirect } from "react-router-dom";

// Custom alerts.
import swal from "sweetalert";

export default class EditArticle extends Component {
  /**
   * PROPERTIES
   */
  url = GLOBAL.url;

  articleId = null;

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

  // Whenever the component is built.
  componentDidMount() {
    this.articleId = this.props.match.params.id;
    this.getArticle(this.articleId);
  }

  // Render method.
  render() {
    if (this.state.status === "success") {
      return <Redirect to="/blog"></Redirect>;
    }

    let article = this.state.article;

    return (
      <div className="center">
        <section id="content">
          <h1 className="subheader">Editar artículo</h1>
          {article.title && (
            <form className="mid-form" onSubmit={this.saveData}>
              <div className="form-group">
                <label htmlFor="title">Título</label>
                <input
                  type="text"
                  name="title"
                  defaultValue={article.title}
                  ref={this.titleRef}
                  onChange={this.changeState}
                ></input>
                {this.validator.message(
                  "title",
                  article.title,
                  "required|alpha_num_space"
                )}
              </div>
              <div className="form-group">
                <label htmlFor="content">Contenido</label>
                <textarea
                  type="text"
                  name="content"
                  defaultValue={article.content}
                  ref={this.contentRef}
                  onChange={this.changeState}
                ></textarea>
                {this.validator.message("content", article.content, "required|alpha_num_space")}
              </div>
              <div className="form-group">
                <label htmlFor="file0">Imagen</label>
                <div className="image-wrap">
                  {article.image !== null ? (
                    <img
                      src={this.url + "get-image/" + article.image}
                      alt={article.title}
                    />
                  ) : (
                    <img src={ReactImage} alt={article.title} />
                  )}
                </div>
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
          )}
          {!article.title && <h1 className="subheader">Cargando...</h1>}
        </section>
        <Sidebar />
      </div>
    );
  }

  // Method to retrieve an article from the DB.
  getArticle = id => {
    axios.get(this.url + "article/" + id).then(response => {
      this.setState({
        article: response.data.article
      });
    });
  };

  // Method to save the data of the form.
  saveData = event => {
    event.preventDefault();
    // Fill the state with the form values.
    this.changeState();
    // Checking if the form validation is correct.
    if (this.validator.allValid()) {
      this.editArticle();
    } else {
      this.validator.showMessages();
      this.forceUpdate();
      this.setState({
        status: "failed"
      });
    }
  };

  // Method to save an article in the DB.
  editArticle = () => {
    // Make an HTTP request to save the article in the DB.
    axios.put(this.url + "article/", this.articleId).then(response => {
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

  // Method to change the state of the component whenever the "editArticle" is called.
  changeState = () => {
    this.setState({
      article: {
        title: this.titleRef.current.value,
        content: this.contentRef.current.value,
        image: this.state.article.image
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
