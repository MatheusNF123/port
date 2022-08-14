import React from "react";
import './Header.css'

function Header() {
  return(
    <header>
      <section className="div-content-header">
        <h3>My-Port</h3>
        <ul className="listaNavegacao">
          <li>Home</li>
          <li>Sobre</li>
          <li>Projetos</li>
          <li>Contate-me</li>
        </ul>
      </section>
    </header>
  )
}
export default Header