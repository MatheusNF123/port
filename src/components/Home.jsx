import React, { useContext } from "react";
import Mycontext from "../Context/MyContext";
import './Home.css'

function Home() {
  const {elH} = useContext(Mycontext)
  return(
    <section className="container-home">
      <span id='home'>#</span>
      <article className="content-all">
      <div className="div-content" ref={elH}>
        <p>Olá, Meu nome é</p>
        <h1>Matheus Almeida</h1>
        <p>Desenvolvedor Full Stack</p>
      <button>Saiba mais</button>
      </div>
      <div className="div-content-img">
        <img src='https://www.pngplay.com/wp-content/uploads/7/Happy-Person-PNG-Images-HD.png' alt="minha foto" />
      </div>
      </article>
    </section>
  )
}

export default Home