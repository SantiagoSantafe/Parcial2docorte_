export const buscarEstudiante= async(facultad)=>{
    const url='http://localhost:8080"/estudiante/buscar';
    const resp=await fetch(url,{
        method:'GET',
        headers:{'Content-type':'application/json'},
        body:JSON.stringify(estudiante.facultad)
    });
    const data= await resp.json();
    const busqueda=data.map(estudiante=>({
        id:estudiante.codigo,
        nombre:estudiante.nombre,
        semestre:estudiante.semestre,
        facultad:estudiante.facultad,
        genero:estudiante.genero,
        programa:estudiante.programa
     }))
     return busqueda;
}