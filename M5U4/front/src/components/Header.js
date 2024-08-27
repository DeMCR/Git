import React from 'react';
import '../styles/layout/header.css'
import Nav from './Nav';
const Header = (props) => {
    return (
        <header>
             <div className="holder">
                <img src="img/logo.png" width="100" alt="Fuerza Límite" />
            
                 
            </div>
            <Nav />
         </header>
    );
}
export default Header;