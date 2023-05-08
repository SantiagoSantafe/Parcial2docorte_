import { useEffect, useState } from "react"
import { FormularioEstudiante } from "./componentes/FormularioEstudiante";
import { TablaEstudiante } from "./componentes/TablaEstudiante";
import { Buscador } from "./componentes/Buscador";
import { getEstudiantes } from "./peticiones/getEstudiantes";
import { postEstudiante } from "./peticiones/postEstudiantes";
export const EstudiantesApp = () => {

    const [estudiantes, setEstudiantes] = useState([]);
    const[estado,setEstado]=useState(true); //true es registrar, false es actualizar
    const [buscar,setBuscar]=useState("");
    const [estudianteAct,setEstudianteACT]=useState([]);
    const [id, setId] = useState("");
    const [nombre, setNombre] = useState("");
    const [semestre, setSemestre] = useState(1);
    const [facultad,setFacultad]=useState();
    const[genero,setGenero]=useState();

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
            setEstudiantes(
                estudiantes.map((estudiante) => {
                    if(estudianteAnterior.id == estudiante.id){
                        estudiante.id = estudianteACTUALIZADO.id
                        estudiante.nombre = estudianteACTUALIZADO.nombre
                        estudiante.semestre = estudianteACTUALIZADO.semestre
                        estudiante.genero=estudianteACTUALIZADO.genero
                    }
                    return(estudiante)
                })
            )
        }
    }
    const eliminar=(estuia)=>{
        setEstudiantes(estudiantes.filter((estudiante) => estudiante.id!==estuia.id))
    }
    const FiltrolistaEstudiantes= estudiantes.filter((estudiante) =>
    estudiante.nombre.toLowerCase().includes(buscar.toLowerCase())
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
                setEstudianteACT(estudiante)
            }}
            />
              
        </>
    )
}

