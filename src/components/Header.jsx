import React, { useEffect, useState } from "react";
// import {Link} from 'react-scroll'
import { GoThreeBars } from "react-icons/go";
import './Header.css'

function Header() {
const [menuAtivo, setMenuAtivo] = useState(false)
  const toggleMenu = (e) => {
    if(e.type === 'touchstart') e.preventDefault()
    setMenuAtivo(!menuAtivo)
  }

  return(
    <header className="header">      
        <h3>My-Port</h3>
        <nav id="navbar-example2" className={`navbar ${menuAtivo ? 'menuAtivo' : ''}`}>
          <button className="menu-mobile" onClick={toggleMenu} onTouchStart={toggleMenu}>
            <span className="spanMenu">Menu</span>
            <GoThreeBars className="iconeHambur"/>
          </button>
        <ul className="listaNavegacao">
          <li> <a href="#home">Home</a> </li>
          <li> <a href="#sobre">Sobre</a> </li>
          <li> <a href="#projetos">Projetos</a> </li>
          <li> <a href="#contate">Contate-me</a> </li>
        </ul>
        </nav>
     
    </header>
  )
}
export default Header