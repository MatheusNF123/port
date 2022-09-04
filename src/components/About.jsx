import React from "react";
import './About.css'
import Imagens from "../assets/Imagens";
import { useContext } from "react";
import Mycontext from "../Context/MyContext";


function About(){
  const { ativaAnimation, el,} = useContext(Mycontext)



  return(
    <section className="container-about">
       
      <span id='sobre'>#</span>
      <div className="content-About">      
        <article className={`sobreMim ${ativaAnimation}`} ref={el} data-anime='left'>
          <span>Sobre mim</span>
          <h2>Quem Sou eu</h2>
          <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. At officiis quod ullam repudiandae fuga dolorum sapiente error minima. Sit tempora suscipit fuga numquam inventore rerum excepturi delectus dignissimos dolores totam!</p>
          <button>Projetos</button>
          </article>
          <article className={`skills ${ativaAnimation}`} data-anime='right' ref={el}>
          <span>Habilidades</span>
            <h2>Minhas skills</h2>
            <ul>
              <li> <Imagens type={'html'}/> HTML5</li>
              <li> <Imagens type={'css'} /> CSS</li>
              <li> <Imagens type={'js'} /> Javascript</li>
              <li> <Imagens type={'react'} /> ReactJs</li>
              <li> <Imagens type={'nodejs'} /> NodeJs</li>
              <li> <Imagens type={'mysql'} /> Docker</li>
              <li> <Imagens type={'bootstrap'} /> MySQL</li>
              <li> <Imagens type={'docker'} alt="" /> BootsTrap</li>
            </ul>
          </article>
       
      </div>
    </section>
  )
}

export default About