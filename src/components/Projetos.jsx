import React from 'react';
import  'bootstrap/dist/css/bootstrap.min.css' ;
import './Projetos.css';
import dataProjetos from '../dataProjetos'
import Card from './Cards';

function Projetos() {

  return (
    <section className='container-projeto'>
      
      <article className='container-projetos'>
      {/* <span className='span-projetos'>Projetos</span> */}
      <h3 className='titulo-projetos' id='projetos'>Projetos</h3>
      <div className='projetos' >
      {dataProjetos.map((elemento) => <Card img={elemento.img} titulo={elemento.titulo} infos={elemento.infos} />)}
      </div>
       
      </article>
     
    </section>
  );
}

export default Projetos;