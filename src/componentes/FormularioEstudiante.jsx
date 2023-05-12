//Use Effect se usa para cargar una cosa solo una vez cuando la pagina inicie.

import { useEffect, useState } from "react";

export const FormularioEstudiante = ({
  agregar,
  estudiante,
  actEstudiante,
  estado,
  setEstado,
  id,
  setId,
  nombre,
  setNombre,
  semestre,
  setSemestre,
  facultad,
  setFacultad,
  genero,
  setGenero,
  programa,
  setPrograma,
}) => {
  const actualizarEst = (eve) => {
    if (nombre === "") {
      return alert("INGRESE UN VALOR EN NOMBRE");
    }
    if (semestre === "") {
      return alert("INGRESE UN VALOR EN SEMESTRE");
    }
    if (facultad === "") {
      return alert("ingrese un valor de facultad");
    }
    let estudianteNuevo = {
      id: id,
      nombre: nombre,
      semestre: semestre,
      facultad: facultad,
      genero: genero,
      programa: programa,
    };
    actEstudiante(estudiante, estudianteNuevo);
    setId("");
    setNombre("");
    setSemestre("");
    setFacultad("");
    setGenero("");
    setPrograma("");
    setEstado(!estado);
      
};
  const guardarEstudiante = (event) => {
    if (nombre == "") {
      return alert("INGRESE UN VALOR EN NOMBRE");
    }
    if (semestre == "") {
      return alert("INGRESE UN VALOR EN SEMESTRE");
    }
    if (facultad === "") {
      return alert("ingrese un valor de facultad");
    }
    let estudiante = {
      id: id,
      nombre: nombre,
      semestre: semestre,
      facultad: facultad,
      genero: genero,
      programa: programa,
    };
    agregar(estudiante);
    setId("");
    setNombre("");
    setSemestre("");
    setFacultad("");
    setGenero("");
  };
  const estructuraForm = (
    dondeGuardar,
    valorNombre,
    valorSemestre,
    valorFacultad,
    valorGenero,
    valorPrograma,
    estadoBTN
  ) => {
    return (
      <>
        {" "}
        <h1>Parcial Segundo Corte</h1>
        <form onSubmit={dondeGuardar}>
          <div class="contenedorG">
          <div className="form-groupN">
            <label htmlFor="nombre">Nombre</label>
            <input
              type="text"
              name="nombre"
              minLength={3}
              className="form-control"
              id="nombre"
              placeholder={valorNombre}
              value={nombre}
              onChange={(event) => setNombre(event.target.value)}
            />
          </div>
          <div className="form-groupS">
            <label htmlFor="semestre">Semestre</label>
            <select
              class="form-select"
              aria-label="Default select example"
              name="semestre"
              className="form-control"
              id="semestre"
              placeholder={valorSemestre}
              value={semestre}
              onChange={(event) => setSemestre(event.target.value)}
            >
              <option>1</option>
              <option>2</option>
              <option>3</option>
              <option>4</option>
              <option>5</option>
              <option>6</option>
              <option>7</option>
              <option>8</option>
              <option>9</option>
              <option>10</option>
            </select>
            <label htmlFor="facultad">Facultad:</label>
            <select
              class="form-select"
              aria-label="Default select example"
              name="facultad"
              className="form-control"
              id="facultad"
              placeholder={valorFacultad}
              value={facultad}
              onChange={(event) => setFacultad(event.target.value)}
            >
              <option>Medicina</option>
              <option>Derecho</option>
              <option>Ingeniería</option>
              <option>Comunicación</option>
            </select>
            <label htmlFor="genero">Genero</label>
            <select
              class="form-select"
              aria-label="Default select example"
              name="genero"
              className="form-control"
              id="genero"
              placeholder={valorGenero}
              value={genero}
              onChange={(event) => setGenero(event.target.value)}
            >
              <option>Masculino</option>
              <option>Femenino</option>
            </select>
            <label htmlFor="programa">Programa</label>
            <select
              class="form-select"
              aria-label="Default select example"
              name="programa"
              className="form-control"
              id="programa"
              placeholder={valorPrograma}
              value={programa}
              onChange={(event) => setPrograma(event.target.value)}
            >
              {facultad === "Medicina" && <option>Medicina</option>}
              {facultad === "Derecho" && (
                <>
                  <option>Derecho Civil</option>
                  <option>Derecho penal</option>
                </>
              )}
              {facultad === "Comunicación" && (
                <>
                  <option>Comunicación Audiovisual</option>
                  <option>Comunicación Social</option>
                  <option>Comunicación corporativa</option>
                </>
              )}
              {facultad ==="Ingeniería" && (
                  <>
                    <option>Ing.Informatica</option>
                    <option>Ing.Civil</option>
                    <option>Ing.Quimica</option>
                    <option>Ing.Mecanica</option>
                    <option>Ing.Agroindustrial</option>
                  </>
                )}
            </select>
          </div>
                <br />
                <div class="botonregistro">
                  <button type="submit" className="btn btn-primary">
                     {estadoBTN}
                   </button>
                </div>
                <br />
          </div>      
        </form>
      </>
    );
  };
  if (estado) {
    return (
      <>
        {estructuraForm(
          guardarEstudiante,
          "nombre",
          "semestre",
          "facultad",
          "genero",
          "programa",
          "Registrar"
        )}
      </>
    );
  } else {
    return (
      <>
        {estructuraForm(
          actualizarEst,
          estudiante.nombre,
          estudiante.semestre,
          estudiante.facultad,
          estudiante.genero,
          estudiante.programa,
          "Actualizar"
        )}
      </>
    );
  }
};
