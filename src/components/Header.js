import React, {Component} from 'react'
import logo from '../assets/images/logo.svg'
import { NavLink } from 'react-router-dom'
class Header extends Component{
    render(){
        return(
            <React.Fragment>
                <header id="header">
            
            <div className="center">
                    {/*Esto es un comentario*/}
                <div id="menu">
                    <nav id="menu">
                        <ul>
                            <li>
                                <NavLink to="/home">Inicio</NavLink>
                            </li>
                            <li>
                                <NavLink to="/listarestuadiantes">Listar Estudiantes</NavLink>
                            </li>
                            <li>
                            <NavLink to="/insertar">Insertar Estudiante</NavLink>
                            </li>
                        </ul>
                    </nav>
                </div>
            </div>
            <div id="logo">
                <img src={logo} className="app-logo" alt="Logo del proyecto" /><br/>
                <span id="marca">
                    <strong>Clase fullstack</strong>
               </span>
               

            </div>
        </header>
            </React.Fragment>
        )
    }
}
export default Header