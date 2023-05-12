
export const Buscador=({buscar,setBuscar})=>{
    
    return (
        <body>
        
            <>
        <br/>
        
        <div className="Busqueda">

            <label htmlFor="id">BUSCAR</label>
                <input 
                    type="text" 
                    className="form-control" 
                    id="facu" 
                    placeholder="BUSCAR POR FACULTAD" 
                    value={buscar} onChange={(event) => setBuscar(event.target.value)} />

            </div>
            <br />
        </>
 

        </body>
      
        )
}