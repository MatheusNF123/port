import React from "react";
import  html from './html.png'
import  css from './css.png'
import  js from './js.png'
import  react from './react.png'
import  nodejs from './nodejs.png'
import  mysql from './mysql.png'
import  bootstrap from './bootstrap.png'
import  docker from './docker.png'

export default function Imagens({type}){
  const icones = {
    html: <img src={html} alt="imagem html" />,
    css: <img src={css} alt="imagem css" />,
    js: <img src={js} alt="imagem js" />,
    react: <img src={react} alt="imagem react" />,
    nodejs: <img src={nodejs} alt="imagem nodejs" />,
    mysql: <img src={mysql} alt="imagem mysql" />,
    bootstrap: <img src={bootstrap} alt="imagem bootstrap" />,
    docker: <img src={docker} alt="imagem docker" />,
  }
  return icones[type]
}