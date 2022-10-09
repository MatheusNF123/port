import React, {  useState } from "react";
import { AiOutlineMenu } from "react-icons/ai";
import './Header.css'
import 'animate.css'


function Header() {
const [menuAtivo, setMenuAtivo] = useState(false)
  const toggleMenu = () => {
    setMenuAtivo(!menuAtivo)
  }

  return(
    <header className="header">      
        <h3 className="logo">	&lt;Portfó<span>lio</span>/&gt;</h3>
        <nav id="navbar-example2" className={`${menuAtivo ? 'menuAtivo' : ''}`}>
          <button className="menu-mobile" onClick={toggleMenu}>
            <span className="spanMenu">Menu</span>
            <AiOutlineMenu className="iconeHambur"/>
          </button>
        <ul className="listaNavegacao">
          <li onClick={() => setMenuAtivo(false)}> <a href="#home">Início</a> </li>
          <li onClick={() => setMenuAtivo(false)}> <a href="#sobre">Sobre</a> </li>
          <li onClick={() => setMenuAtivo(false)}> <a href="#projetos">Projetos</a> </li>
          <li onClick={() => setMenuAtivo(false)}> <a href="#contate">Contate-me</a> </li>
        </ul>
        </nav>
     
    </header>
  )
}
export default Header