import React, { Component } from "react";

// ROUTER
import { Route, Switch, Redirect } from "react-router-dom";

// CUSTOM COMPONENTS
import Home from "./components/Home/Home";
import Blog from "./components/Blog/Blog";
import Formulario from "./components/Formulario/Formulario";
import Peliculas from "./components/Peliculas/Peliculas";
import Error from "./components/Error/Error";
import Search from "./components/Search/Search";

export default class Router extends Component {
  render() {
    return (
      <div>
        {/* CONFIGURE ROUTES AND PAGES */}
        <Switch>
          <Route exact path="/" component={Home}></Route>
          <Route exact path="/home" component={Home}></Route>
          <Route exact path="/blog" component={Blog}></Route>
          <Route exact path="/formulario" component={Formulario}></Route>
          <Route exact path="/peliculas" component={Peliculas}></Route>

          {/* ROUTES WITH CUSTOM RENDER */}
          <Route
            exact
            path="/blog/articulo/:id"
            render={() => (
              <div>
                <h1>Página individual del artículo</h1>
              </div>
            )}
          ></Route>

          {/* ROUTES WITH PARAMS */}
          <Route exact path="/blog/busqueda/:search" component={Search}></Route>
          <Route
            exact
            path="/redirect/:search"
            render={props => {
              let search = props.match.params.search;
              return <Redirect to={"/blog/busqueda/" + search}></Redirect>;
            }}
          ></Route>

          {/* 404 NOT FOUND */}
          <Route component={Error}></Route>
        </Switch>
      </div>
    );
  }
}
