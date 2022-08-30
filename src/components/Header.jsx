import React from "react";
import './Header.css'

function Header() {
  return(
    <header>
      <section className="div-content-header">
        <h3 id='home'>My-Port</h3>
        <ul className="listaNavegacao">
          <li> <a href="#home">Home</a> </li>
          <li> <a href="#sobre">Sobre</a> </li>
          <li> <a href="#projetos">Projetos</a> </li>
          <li> <a href="#contate">Contate-me</a> </li>
        </ul>
      </section>
    </header>
  )
}
export default Header