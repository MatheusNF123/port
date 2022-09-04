import React, { useContext } from "react";
// import { useState } from "react";
import { BsGithub } from "react-icons/bs";
import Mycontext from "../Context/MyContext";

function Card({img, titulo, infos}){
  const { ativaAnimationProject, elP,} = useContext(Mycontext)
  return(
    <div className={`cards-projetos ${ativaAnimationProject}`} ref={elP} data-anime='down'>
    <div className="card-img">
      <img src={img} alt={titulo + ' img'} />
    </div>
    <div className="infos-cards">
      <div className='infos-button'>
        <h4>{titulo}</h4>
        <p>{infos}</p>
        <div className="buttons-cards">
          <button>
          <BsGithub className="iconBtn-gitHub"/>
            Projeto Completo</button>
        </div>
      </div>
    </div>
  </div>
 
  )
}

export default Card