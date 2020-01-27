import React, { Component } from "react";
import {Redirect} from "react-router-dom";

export default class Sidebar extends Component {
  /**
   * PROPERTIES
   */
  searchRef = React.createRef();
  state = {
    search: "",
    redirect: false
  };

  // Render method.
  render() {
    if (this.state.redirect) {
      return (
        <Redirect to={"/redirect/" + this.state.search}></Redirect>
      )
    }
    return (
      <div>
        <aside id="sidebar">
          {this.props.blog === "true" && (
            <div id="search" className="sidebar-item">
              <h3>Puedes hacer esto</h3>
              {/* <a href="#" className="btn btn-success">
                Crear artículo
              </a> */}
            </div>
          )}
          <div id="search" className="sidebar-item">
            <h3>Buscador</h3>
            <p>Encuentra el artículo que buscas</p>
            <form onSubmit={this.redirectToSearch}>
              <input type="text" name="search" ref={this.searchRef} />
              <input
                type="submit"
                value="Buscar"
                name="submit"
                className="btn"
              />
            </form>
          </div>
        </aside>
      </div>
    );
  }

  // Method to redirect to the search component whenever the user introduces some data in the form.
  redirectToSearch = event => {
    event.preventDefault();
    this.setState({
      search: this.searchRef.current.value,
      redirect: true
    })
  };
}
