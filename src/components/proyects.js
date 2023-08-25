import { useEffect, useState } from "react";

export const Proyects = ()=>{
    const [proyect,setProyect] = useState([]);

    
    const LoadProyects = async ()=>{
        const url = "http://portafoliobackendsekyh.somee.com/proyect";
        const resp = await fetch(url);
        const datos = await resp.json();
        setProyect(datos);
    }   

    useEffect(()=>{
        LoadProyects();           
    },[]);


    return (
        <section className="content-grid" id="proyects">
        
            {proyect.map((e)=>
            <div  className="card-content proyect" key={e.id}>
                <div className="card-imagen">
                    <img src={e.imagen} alt="proyect" className="imagen"></img>
                    
                </div>
                <div className="card-text">
                    <h3 className="text-center">{e.name}</h3>
                    <h4>Tecnologias:{e.technology}</h4>
                    <p>{e.description}</p>
                </div>

            </div>)}
        

        </section>
    );
}