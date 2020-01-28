import React, { Component } from "react";
import Sidebar from "../Sidebar/Sidebar";
import ReactImage from "../../assets/images/logo.svg";

// Importing the Back-end API url / HTTP requests.
import axios from "axios";
import GLOBAL from "../../Global";

// CSS import.
import "../Article/Article.css";

// Moment library to format dates.
import Moment from "react-moment";
import "moment/locale/es";

// Custom alerts.
import swal from "sweetalert";

// Redirect to another components.
import { Redirect, Link } from "react-router-dom";

export default class Article extends Component {
  /**
   * PROPERTIES
   */
  url = GLOBAL.url;
  state = {
    article: false,
    status: null
  };

  // Whenever the component is built...
  componentDidMount() {
    this.getArticle();
  }

  // Render method.
  render() {
    if (this.state.status === "deleted")
      return <Redirect to="/blog"></Redirect>;

    let article = this.state.article;

    return (
      <div className="center">
        <section id="content">
          {this.state.article && (
            <article className="article-item article-detail">
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
              <h1 className="subheader">{article.title}</h1>
              <span className="date">
                <Moment fromNow locale="es">
                  {article.date}
                </Moment>
              </span>
              <p>{article.content}</p>
              <div className="buttons">
                <Link to={"/blog/editar/" + article._id} className="btn btn-warning">Editar</Link>
                <button className="btn btn-danger" onClick={this.deleteArticle}>
                  Eliminar
                </button>
              </div>
              {/* LIMPIAR FLOATS */}
              <div className="clearfix"></div>
            </article>
          )}
          {!this.state.article && this.state.status === "success" && (
            <div id="article">
              <h2 className="subheader">El artículo no existe</h2>
            </div>
          )}
          {this.state.status === null && (
            <div id="article">
              <h2 className="subheader">Cargando...</h2>
              <p>Espere unos segundos</p>
            </div>
          )}
        </section>
        <Sidebar></Sidebar>
        {/* LIMPIAR FLOATS */}
        <div className="clearfix"></div>
      </div>
    );
  }

  // Method to retrieve the desired article from the DB.
  getArticle = () => {
    let id = this.props.match.params.id;
    axios
      .get(this.url + "article/" + id)
      .then(response => {
        this.setState({
          article: response.data.article,
          status: "success"
        });
      })
      .catch(error => {
        this.setState({
          article: false,
          status: "success"
        });
      });
  };

  // Method to delete an article from the DB.
  deleteArticle = () => {
    swal({
      title: "¿Estás seguro",
      text: "Una vez borrado, no podrás recuperar el artículo",
      icon: "warning",
      buttons: true,
      dangerMode: true
    }).then(willDelete => {
      if (willDelete) {
        const ARTICLE_ID = this.state.article._id;
        axios.delete(this.url + "article/" + ARTICLE_ID).then(response => {
          this.setState({
            article: false,
            status: "deleted"
          });
        });
        swal("¡Poof! El artículo ha sido eliminado correctamente", {
          icon: "success"
        });
      } else {
        swal("El artículo no ha sido borrado", {
          icon: "success"
        });
      }
    });
  };
}
