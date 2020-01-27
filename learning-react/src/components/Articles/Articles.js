import React, { Component } from "react";
import axios from "axios";
import GLOBAL from "../../Global";
import ReactImage from "../../assets/images/logo.svg";

// Date format.
import Moment from "react-moment";
import "moment/locale/es";

export default class Articles extends Component {
  /**
   * PROPERTIES
   */
  state = {
    articles: [],
    status: null
  };

  url = GLOBAL.url;

  // Render method.
  render() {
    if (this.state.articles.length >= 1) {
      let articlesList = this.state.articles.map(article => {
        return (
          <article id="article-template" class="article-item">
            <div class="image-wrap">
              {article.image !== null ? (
                <img
                  src={this.url + "get-image/" + article.image}
                  alt={article.title}
                />
              ) : (
                <img src={ReactImage} alt={article.title} />
              )}
            </div>
            <h2>{article.title}</h2>
            <span class="date">
              <Moment locale="es" fromNow>{article.date}</Moment>
            </span>
            <a href="#">Leer más</a>

            {/* CLEAN FLOATS */}
            <div class="clearfix"></div>
          </article>
        );
      });
      return <div id="articles">{articlesList}</div>;
    } else if (
      this.state.articles.length === 0 &&
      this.state.status === "success"
    ) {
      return (
        <div id="articles">
          <h1>No hay artículos para mostrar</h1>
          <p>Todavía no hay contenido en ésta sección</p>
        </div>
      );
    } else {
      return (
        <div id="articles">
          <h1>Cargando...</h1>
          <p>Espere mientras carga el contenido</p>
        </div>
      );
    }
  }

  /**
   * COMPONENT METHODS
   */

  // Whenever the component is mounted...
  componentDidMount() {
    this.getArticles();
  }

  // Method to retrieve all the articles from the DB.
  getArticles = () => {
    axios.get(this.url + "articles").then(response => {
      this.setState({
        articles: response.data.articles,
        status: "success"
      });
    });
  };
}
