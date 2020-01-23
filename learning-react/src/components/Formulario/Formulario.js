import React, { Component } from "react";
import Sidebar from "../Sidebar/Sidebar";
import swal from "sweetalert";

export default class Formulario extends Component {
  /**
   * PROPERTIES
   */
  nombreRef = React.createRef();
  apellidosRef = React.createRef();
  bioRef = React.createRef();
  generoHombreRef = React.createRef();
  generoMujerRef = React.createRef();
  generoOtroRef = React.createRef();

  state = {
    user: {}
  };

  render() {
    return (
      <div id="blog">
        <div className="center">
          <div id="content">
            <h1 className="subheader">Formulario</h1>

            {/* FORM */}
            <form
              action="#"
              className="mid-form"
              onSubmit={this.recibirFormulario}
              // onChange={this.recibirFormulario} REACTIVE FORMS
            >
              <div className="form-group">
                <label htmlFor="nombre">Nombre</label>
                <input type="text" name="nombre" ref={this.nombreRef} />
              </div>
              <div className="form-group">
                <label htmlFor="apellidos">Apellidos</label>
                <input type="text" name="apellidos" ref={this.apellidosRef} />
              </div>
              <div className="form-group">
                <label htmlFor="bio">Biografia</label>
                <textarea
                  name="bio"
                  cols="30"
                  rows="10"
                  ref={this.bioRef}
                ></textarea>
              </div>
              <div className="form-group radibuttons">
                <input
                  type="radio"
                  name="genero"
                  value="hombre"
                  ref={this.generoHombreRef}
                />{" "}
                Hombre
                <input
                  type="radio"
                  name="genero"
                  ref={this.generoMujerRef}
                />{" "}
                Mujer
                <input
                  type="radio"
                  name="genero"
                  ref={this.generoOtroRef}
                />{" "}
                Otro
              </div>

              {/* LIMPIAR FLOATS */}
              <div className="clearfix"></div>

              {/* SUBMIT */}
              <input type="submit" value="Enviar" className="btn btn-success" />
            </form>
          </div>
          <Sidebar blog="false"></Sidebar>
        </div>
      </div>
    );
  }

  /**
   * OWN METHODS
   */

  recibirFormulario = event => {
    event.preventDefault();
    const USER = {
      nombre: this.nombreRef.current.value,
      apellidos: this.apellidosRef.current.value,
      bio: this.bioRef.current.value,
      genero: this.comprobarGenero()
    };
    swal(
      "Formulario enviado",
      "El formulario ha sido enviado correctamente, " + USER.nombre,
      "success"
    );
    this.setState({
      user: USER
    });
  };

  comprobarGenero = () => {
    let genero = "";
    if (this.generoHombreRef.current.checked) {
      genero = "hombre";
    } else if (this.generoMujerRef.current.checked) {
      genero = "mujer";
    } else {
      genero = "otro";
    }
    return genero;
  };
}
