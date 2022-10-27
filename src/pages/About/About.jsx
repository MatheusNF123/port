import React from "react";
import './About.css'
import Imagens from "../../assets/Imagens";
import { useContext } from "react";
import Mycontext from "../../Context/MyContext";


function About(){
  const { ativaAnimation, el,} = useContext(Mycontext)



  return(
    <section className="container-about">
       
      <span id='sobre'>#</span>
      <div className="content-About" ref={el}>      
        <article className={`sobreMim ${ativaAnimation && 'animate'}`} ref={el} data-anime='left'>
          <span>Sobre mim</span>
          <h2>Quem Sou eu</h2>
          <p>Olá me chamo Matheus Almeida Saporito, tenho 26 anos, e sou uma pessoa apaixonado pela área da tecnologia. Atualmente estudando desenvolvimento Web, através de cursos, video aulas e  muitos projetos na prática assim venho aprendendo bastante tanto Front-End quanto Back-End.
          Meu objetivo é sempre estar me envolvendo em projetos que me façam aprender e crescer.
          E busco oportunidade onde eu possa estar agregando conhecimento para me tornar um profissional completo, prezando sempre pela empatia e pela colaboração.
          </p>
          <a href="#projetos">Projetos</a>
          </article>
          <article className={`skills ${ativaAnimation && 'animate'}`} data-anime='right' ref={el}>
          <span>Habilidades</span>
            <h2>Minhas skills</h2>
            <ul>
              <li> <Imagens type={'html'}/> HTML5</li>
              <li> <Imagens type={'css'} /> CSS</li>
              <li> <Imagens type={'js'} /> Javascript</li>
              <li> <Imagens type={'react'} /> ReactJs</li>
              <li> <Imagens type={'ts'} /> Typescript</li>
              <li> <Imagens type={'react'} /> ReactJs</li>
              <li> <Imagens type={'nodejs'} /> NodeJs</li>
              <li> <Imagens type={'mysql'} /> MySQL</li>
              <li> <Imagens type={'bootstrap'} /> BootsTrap</li>
              <li> <Imagens type={'testingLibrary'} /> Testing Library</li>
              <li> <Imagens type={'jest'} /> Jest</li>
              <li> <Imagens type={'docker'} /> Docker</li>
              <li> <Imagens type={'express'} /> Express</li>
            </ul>
          </article>
       
      </div>
    </section>
  )
}

export default About