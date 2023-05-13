export const postEstudiante=async(estudiante)=>{
    const url='http://localhost:8080/estudiante/agregar';
    const resp=await fetch(url,{
        method:'POST',
        headers:{'Content-type':'application/json'},
        body:JSON.stringify(estudiante)
    });
    const data= await resp.json();
    
}