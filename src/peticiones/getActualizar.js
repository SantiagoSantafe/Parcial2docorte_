export const getActualizar=async(codigo, estudiante)=>{
    const url=`http://localhost:8080/estudiante/actualizar/${codigo}`;
    const resp=await fetch(url,{
        method:'PUT',
        headers:{'Content-type':'application/json'},
        body:JSON.stringify(estudiante)
    });
}