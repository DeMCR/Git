import React from 'react';
import { NavLink } from "react-router-dom";
import '../styles/layout/nav.css';

const Nav = (props) => {
    return (
        <nav>
            <div>
                <ul>
                    <li><NavLink to="/" className={({ isActive }) => isActive ? "activo" : undefined} >Home</NavLink></li>
                    <li><NavLink to="/sede" className={({ isActive }) => isActive ? "activo" : undefined} >Nuestra Sede</NavLink></li>
                    <li><NavLink to="/profesores" className={({ isActive }) => isActive ? "activo" : undefined} >Profesores</NavLink></li>
                    <li><NavLink to="/contacto" className={({ isActive }) => isActive ? "activo" : undefined} >Contacto</NavLink></li>
                </ul>
            </div>
        </nav>
    );
}
export default Nav;