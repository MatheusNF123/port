import React from "react";
import  html from './html.png'
import  css from './css.png'
import  js from './js.png'
import  react from './react.png'
import  redux from './redux.png'
import  nodejs from './nodejs.png'
import  mysql from './mysql.png'
import  bootstrap from './bootstrap.png'
import  docker from './docker.png'
import  ts from './ts.png'
import  jest from './jest.png'
import  testingLibrary from './testingLibrary.png'
import  express from './express.png'

export default function Imagens({type}){
  const icones = {
    html: <img src={html} alt="imagem html" />,
    css: <img src={css} alt="imagem css" />,
    js: <img src={js} alt="imagem js" />,
    react: <img src={react} alt="imagem react" />,
    redux: <img src={redux} alt="imagem redux" />,
    nodejs: <img src={nodejs} alt="imagem nodejs" />,
    mysql: <img src={mysql} alt="imagem mysql" />,
    bootstrap: <img src={bootstrap} alt="imagem bootstrap" />,
    testingLibrary: <img src={testingLibrary} alt="imagem testingLibrary" />,
    jest: <img src={jest} alt="imagem jest" />,
    docker: <img src={docker} alt="imagem docker" />,
    ts: <img src={ts} alt="imagem typescript" />,
    express: <img src={express} alt="imagem express" />
  }
  return icones[type]
}