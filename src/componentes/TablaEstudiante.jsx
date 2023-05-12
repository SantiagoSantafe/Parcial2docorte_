export const TablaEstudiante = ({
  eliminarEstudiantes,
  FiltrolistaEstudiantes,
  editar,
}) => {
  return (
    <>
      <table className="table">
        <thead>
          <tr>
            <th scope="col">Id estudiante</th>
            <th scope="col">Nombre</th>
            <th scope="col">Semestre</th>
            <th scope="col">Facultad</th>
            <th scope="col">Genero</th>
            <th scope="col">Programa</th>
            <th scope="col">Acciones</th>
          
          </tr>
        </thead>
        <tbody>
          {FiltrolistaEstudiantes.map((estudiante) => (
            <tr key={estudiante.id}>
              <td>{estudiante.id}</td>
              <td>{estudiante.nombre}</td>
              <td>{estudiante.semestre}</td>
              <td>{estudiante.facultad}</td>
              <td>{estudiante.genero}</td>
              <td>{estudiante.programa}</td>
              <td>
                {" "}
                <button
                  className="botoneditar"
                  onClick={() => editar(estudiante)}
                >
                  Editar
                 
                </button>
              </td>

              <td>
                {" "}
                <button
                  className="botoneliminar"
                  onClick={() => eliminarEstudiantes(estudiante)}
                >
                  Eliminar
                </button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>

      <br />
      
      <p className="h6">
        Trabajo realizado por: Andrés Santiago Santafe Silva, Oscar David
        Vergara, Hector José Guzmán.
      </p>
      <a
        className="h6"
        href="https://github.com/SantiagoSantafe/Parcial2docorte_"
      >
        Link del GitHub
      </a>
    </>
  );
};
