import React, { useContext } from "react";
import { BsGithub, BsPlay } from "react-icons/bs";
import Mycontext from "../Context/MyContext";

function Card({img, titulo, infos, code, demo}){
  const { ativaAnimationProject, elP} = useContext(Mycontext)
  return(
    <div className={`cards-projetos ${ativaAnimationProject && 'animate'}`} ref={elP}  data-anime='down'>
    <div className="card-img">
      <img src={img} alt={titulo + ' img'} />
    </div>
    <div className="infos-cards">
      <div className='infos-button' >
        <h4 >{titulo}</h4>
        <p>{infos}</p>
        <div className="buttons-cards">
          <a href={code} target='_blank'
          rel="ir para codigo do github noreferrer">           
          <BsGithub className="iconBtn-gitHub"/>
            CODE        
          </a>
          {demo &&
          <a href={demo} target='_blank' rel="ir para o site noreferrer">
          <BsPlay className="iconBtn-gitHub"/>
            DEMO
          </a>}
        </div>
      </div>
    </div>
  </div>
 
  )
}

export default Card