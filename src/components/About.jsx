import React from "react";
import './About.css'
import  html from '../assets/html.png'
import  css from '../assets/css.png'
import  js from '../assets/js.png'
import  react from '../assets/react.png'
import  nodejs from '../assets/nodejs.png'
import  mysql from '../assets/mysql.png'
import  bootstrap from '../assets/bootstrap.png'
import  docker from '../assets/docker.png'

function About(){
  return(
    <section className="container-about">
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
              <li> <img src={html} alt="imagem html" />  HTML5</li>
              <li> <img src={css} alt="" /> CSS</li>
              <li> <img src={js} alt="" /> Javascript</li>
              <li> <img src={react} alt="" /> ReactJs</li>
              <li> <img src={nodejs} alt="" /> NodeJs</li>
              <li> <img src={docker} alt="" /> Docker</li>
              <li> <img src={mysql} alt="" /> MySQL</li>
              <li> <img src={bootstrap} alt="" /> BootsTrap</li>
            </ul>
          </article>
       
      </div>
    </section>
  )
}

export default About