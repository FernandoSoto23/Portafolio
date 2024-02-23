import React from "react";
import Typewriter from "typewriter-effect";
const foto = require("./../img/foto.jpeg");
export const Header = () => {
  return (
    <header className="header">
      
      <Navbar ></Navbar>
      <div className="header-presentation">
        <div className="Panel-header-left">
          <div>
            <img src={foto} alt="profile" />
          </div>
        </div>
        <div className="Panel-header-right">
          <div className="Panel-header-right-presentation">
            <h1 className="text-center name" style={{marginBottom : 0}}>Jesus Fernando Salazar Soto</h1>
            <h4 className="text-center">Lic. Sistemas Computacionales</h4>
            <div className="console">
              <div className="console-header">
                <div className="red"></div>
                <div className="yellow"></div>
                <div className="green"></div>
              </div>
              <div>
                <Typewriter
                  options={{ loop: true }}
                  onInit={(typewriter) => {
                    typewriter
                      .typeString("[ Software Enginner ]")

                      .pauseFor(1000)
                      .deleteAll()
                      .typeString("[ FullStack Developer ]")

                      .pauseFor(1000)
                      .deleteAll()
                      .start();
                  }}
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    </header>
  );
};
export const Navbar = ({fixed}) => {
  return (
    <nav className="navbar" style={{position : `${fixed ? "fixed" : ""}`}}>
      <ul>
        <li>
          <a href="/">Home</a>
        </li>
        <li>
          <a href="/#skills">Skills</a>
        </li>
        <li>
          <a href="#proyects">Proyects</a>
        </li>
        <li>
          <a href="#contacto">Contact</a>
        </li>
      </ul>
    </nav>
  );
};
