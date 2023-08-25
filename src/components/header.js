import React from 'react';
import Typewriter from "typewriter-effect";

export const Header = ()=>{
    return(
        <header className="App-header">
            <div className="Panel-header-left">
                <div>
                    <img src='https://cdn.milenio.com/uploads/media/2019/12/24/hombre-meme-cara-pervertido-cara_0_48_611_380.jpg' alt='profile'/>
                </div>
                
            </div>
            <div className='Panel-header-right'>
                <nav>
                    <ul class="navbar">
                        <li><a href="#inicio">Home</a></li>
                        <li><a href="#skills">Skills</a></li>
                        <li><a href="#proyects">Proyects</a></li>
                        <li><a href="#contacto">Contact</a></li>
                    </ul>
                </nav>
                <div className='Panel-header-right-presentation'>
                    <h1 className='text-center name'>Jesus Fernando Salazar Soto</h1>
                    <div className="console">
                        <div className='console-header'>
                            <div className='red'></div>
                            <div className='yellow'></div>
                            <div className='green'></div>
                        </div>
                        <div>
                            <Typewriter 
                                options = {{loop:true}}
                                onInit={(typewriter) => {
                                    typewriter
                                        .typeString("[ Software Enginner ]")
                                        .pauseFor(1000)
                                        .deleteAll()
                                        .start();
                                }
                                
                            }
                            />
                        </div>
                    </div>


                </div>
            </div>
        </header>
    );
}


