import React, { useContext } from "react";
import Mycontext from "../../Context/MyContext";
import './Home.css'
import me from '../../image/foto.jpg'

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
        <a href="#sobre">Saiba mais</a>
        </div>
        <div className="home-me">
          <div className="div-content-img">
            <img src={me} alt="minha foto" />
          </div>
        </div>
      </article>
    </section>
  )
}

export default Home