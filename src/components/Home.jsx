import React from "react";
import './Home.css'
import foto from '../image/minha-foto.jpg'

function Home() {
  return(
    <section className="container-home">
      <article className="content-all">

      <div className="div-content">
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