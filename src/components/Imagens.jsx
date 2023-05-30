import React from "react";
import  html from '../assets/html.png'
import  css from '../assets/css.png'
import  js from '../assets/js.png'
import  react from '../assets/react.png'
import  redux from '../assets/redux.png'
import  nodejs from '../assets/nodejs.png'
import  mysql from '../assets/mysql.png'
import  bootstrap from '../assets/bootstrap.png'
import  docker from '../assets/docker.png'
import  ts from '../assets/ts.png'
import  jest from '../assets/jest.png'
import  testingLibrary from '../assets/testingLibrary.png'
import  express from '../assets/express.png'
import  styledComponents from '../assets/styled-components.png'
import  mui from '../assets/MUI.png'
import  python from '../assets/python.png'

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
    express: <img src={express} alt="imagem express" />,
    styledComponents: <img src={styledComponents} alt="imagem styled components" />,
    mui: <img src={mui} alt="imagem Material UI" />,
    python: <img src={python} alt="imagem python" />
  }
  return icones[type]
}