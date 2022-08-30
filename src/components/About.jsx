import React from "react";
import './About.css'
import Imagens from "../assets/Imagens";
// import  html from '../assets/html.png'
// import  css from '../assets/css.png'
// import  js from '../assets/js.png'
// import  react from '../assets/react.png'
// import  nodejs from '../assets/nodejs.png'
// import  mysql from '../assets/mysql.png'
// import  bootstrap from '../assets/bootstrap.png'
// import  docker from '../assets/docker.png'

function About(){
  return(
    <section className="container-about">
      <span id='sobre'>asdasdas</span>
      <div className="content-About">      
        <article className="sobreMim">
          <span>Sobre mim</span>
          <h2>Quem Sou eu</h2>
          <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. At officiis quod ullam repudiandae fuga dolorum sapiente error minima. Sit tempora suscipit fuga numquam inventore rerum excepturi delectus dignissimos dolores totam!</p>
          <button>Projetos</button>
          </article>
          <article className="skills">
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