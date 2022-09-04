import React, { useEffect, useState } from "react";
// import {Link} from 'react-scroll'
import './Header.css'

function Header() {

  return(
    <header>     
      <section className="div-content-header">
        <h3>My-Port</h3>
        <nav id="navbar-example2" className="navbar bg-bg-dark ">
        <ul className="listaNavegacao">
          <li> <a href="#home">Home</a> </li>
          <li> <a href="#sobre">Sobre</a> </li>
          <li> <a href="#projetos">Projetos</a> </li>
          <li> <a href="#contate">Contate-me</a> </li>
        </ul>
        </nav>
      </section>
    </header>
  )
}
export default Header