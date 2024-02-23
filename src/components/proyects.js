import { useEffect, useState } from "react";
import { Navbar } from "./header";
import { Link } from "react-router-dom";
const jsonProyects = require("./prueba.json");
export const Proyects = () => {
  return (
    <section className="layout-proyects">
      <div className="container content-grid" id="proyects">
        {jsonProyects.map((e) => (
          <CardProyect
            key={e.id}
            link={e.link}
            name={e.name}
            imagen={e.imagen}
            description={e.description}
            technology={e.technology}
            color={e.color}
          />
        ))}
      </div>
      <Link to={"/Proyects"} className="button-more-proyects">
        Ver mas proyectos
      </Link>
    </section>
  );
};

export const CardProyect = ({
  link,
  imagen,
  name,
  technology,
  description,
  key,
  color,
}) => {
  useEffect(() => {
    leerInfo();
  }, []);
  return (
    <div className="proyect" key={key} id="proyect">
      <a href={link} target="_blank">
        <div className="card-imagen">
          <img  src={imagen} alt="proyect" className="imagen"></img>
        </div>
        <div
          className="card-text"
          style={{ backgroundImage: `url(${imagen})` }}
        >
          <div className="card-text-body">
            <h3 className="text-center text-proyect"  style={{ backgroundColor: `${color}` }}>{name}</h3>
            <h4 className="text-center">Tecnologias:{technology}</h4>
            <p className="text-description">{description}</p>
          </div>
        </div>
        <div
          className="card-opacity"
         /*  style={{ backgroundColor: `${color}` }} */
        ></div>
      </a>
    </div>
  );
};

export const LayoutProyects = () => {
  return (
    <div>
      <Navbar />
      <h1>Cargando Proyectos...</h1>
    </div>
  );
};

function leerInfo() {
  const cardProy = document.querySelector("#proyect");

  cardProy.addEventListener("click", () => {
    console.log("Hola");
  });
}
