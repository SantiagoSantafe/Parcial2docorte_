import { useEffect, useState } from "react"
import { FormularioEstudiante } from "./componentes/FormularioEstudiante";
import { TablaEstudiante } from "./componentes/TablaEstudiante";
import { Buscador } from "./componentes/Buscador";
import { getEstudiantes } from "./peticiones/getEstudiantes";
import { postEstudiante } from "./peticiones/postEstudiantes";
import { eliminarEstudiantes } from "./peticiones/deleteEstudiante";

import { getActualizar } from "./peticiones/getActualizar";
export const EstudiantesApp = () => {

    const [estudiantes, setEstudiantes] = useState([]);
    const[estado,setEstado]=useState(true); //true es registrar, false es actualizar
    const [buscar,setBuscar]=useState("");
    const [estudianteAct,setEstudianteACT]=useState([]);
    const [id, setId] = useState("");
    const [nombre, setNombre] = useState("");
    const [semestre, setSemestre] = useState(1);
    const [facultad,setFacultad]=useState("Medicina");
    const[genero,setGenero]=useState("Masculino");
    const[programa,setPrograma]=useState("Medicina")
    const cargeEstudiantes=async()=>{
        const datos=await getEstudiantes();
        console.log(datos)
        setEstudiantes(datos)
    }
    useEffect(()=>{
        cargeEstudiantes();
    },[])

    const agregarEstudiante = (estudiante) => {
        let verificacion=true
        estudiantes.map((estu)=>{
            if(estu.id == estudiante.id){
                <div class="alert alert-danger" role="alert">
                Ese id ya lo tiene otro estudiante
                </div>
                verificacion=false
            }
        });
        if (verificacion) {
            setEstudiantes([...estudiantes, estudiante])
            postEstudiante(estudiante)
        }
    }
    const VerificarEstudiante = (estudianteAnterior, estudianteACTUALIZADO) => {
        let validacion=true;
        estudiantes.map((estudiante) => {
            if ( estudianteACTUALIZADO.id == estudiante.id && estudiante.id != estudianteAnterior.id){
                alert('Ese ID ya esta en uso, VUELVA A INTENTARLO')
                validacion=false
            } 
        }) 
        if (validacion) {
            getActualizar(estudianteAnterior.id,estudianteACTUALIZADO)
            setEstudiantes(
                estudiantes.map((estudiante) => {
                    if(estudianteAnterior.id == estudiante.id){
                        estudiante.id = estudianteACTUALIZADO.id
                        estudiante.nombre = estudianteACTUALIZADO.nombre
                        estudiante.semestre = estudianteACTUALIZADO.semestre
                        estudiante.facultad =estudianteACTUALIZADO.facultad
                        estudiante.genero=estudianteACTUALIZADO.genero
                        estudiante.programa=estudianteACTUALIZADO.programa
                    }
                    return(estudiante)
                }))
        }
    }
    const eliminar=(estuia)=>{
        setEstudiantes(estudiantes.filter((estudiante) => estudiante.id!==estuia.id))
        eliminarEstudiantes(estuia.id);
    }
    const FiltrolistaEstudiantes= estudiantes.filter((estudiante) =>
    estudiante.facultad.toLowerCase().includes(buscar.toLowerCase())
    );
        
    return (
        <>

            <FormularioEstudiante agregar={(estu) => agregarEstudiante(estu)} 
            estudiante={estudianteAct} 
            actEstudiante={(estudiante, nuevoEstudiante) => { VerificarEstudiante(estudiante,nuevoEstudiante) }}
            estado={estado} 
            setEstado={(est)=>{setEstado(est)}}
            id={id}
            setId={(id)=>setId(id)}
            nombre={nombre}
            setNombre={(nombre)=>setNombre(nombre)}
            semestre={semestre}
            setSemestre={(semestre)=>setSemestre(semestre)}
            facultad={facultad}
            setFacultad={(facultad)=>setFacultad(facultad)}
            genero={genero}
            setGenero={(genero)=> setGenero(genero)}
            programa={programa}
            setPrograma={(programa)=>setPrograma(programa)}
            />            
            <Buscador 
            buscar={buscar} 
            setBuscar={(busqueda)=>setBuscar(busqueda)}/>   
            <TablaEstudiante 
            eliminarEstudiantes={(estuia)=>{eliminar(estuia)}} 
            FiltrolistaEstudiantes={FiltrolistaEstudiantes} 
            editar={(estudiante)=>{
                setEstado(!estado)
                setId(estudiante.id)
                setNombre(estudiante.nombre)
                setSemestre(estudiante.semestre)
                setFacultad(estudiante.facultad)
                setGenero(estudiante.genero)
                setPrograma(estudiante.programa)
                setEstudianteACT(estudiante)
            }}
            />
              
        </>
    )
}

