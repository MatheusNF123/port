import React from "react";
import { BsGithub } from "react-icons/bs";

function Card({img, titulo, infos}){
  return(
    <div className='cards-projetos'>
    <div className="card-img">
      <img src={img} alt={titulo + ' img'} />
    </div>
    <div className="infos-cards">
        <h4>{titulo}</h4>
      <div className="infos-button">
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