import React, { Component } from "react";

// ROUTER
import { Route, Switch } from "react-router-dom";

// CUSTOM COMPONENTS
import Home from "./components/Home/Home";
import Blog from "./components/Blog/Blog";
import Formulario from "./components/Formulario/Formulario";
import Peliculas from "./components/Peliculas/Peliculas";
import Error from "./components/Error/Error";

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

          {/* 404 NOT FOUND */}
          <Route component={Error}></Route>

          {/**
           * TEST ROUTING
           */}

          {/* ROUTES WITH CUSTOM RENDER */}
          <Route
            exact
            path="/pagina-1"
            render={() => <h1>Hola mundo desde la página 1</h1>}
          ></Route>

          {/* ROUTES WITH PARAMS */}
          <Route
            exact
            path="/pruebas/:nombre/:apellidos?"
            render={props => {
              let nombre = props.match.params.nombre;
              let apellidos = props.match.params.apellidos;
              return (
                <div id="content">
                  <h1 className="subheader">Página de pruebas</h1>
                  <h2>
                    {nombre && !apellidos && <span>{nombre}</span>}
                    {nombre && apellidos && (
                      <span>
                        {nombre} {apellidos}
                      </span>
                    )}
                  </h2>
                </div>
              );
            }}
          ></Route>
        </Switch>
      </div>
    );
  }
}
