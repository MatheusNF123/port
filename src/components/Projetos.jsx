import React, { useContext } from 'react';
import  'bootstrap/dist/css/bootstrap.min.css' ;
import './Projetos.css';
import dataProjetos from '../dataProjetos'
import Card from './Cards';
import Mycontext from '../Context/MyContext';


function Projetos() {
  const {elP} = useContext(Mycontext)

  return (
    <section className='container-projeto' ref={elP} >
      
      <article className='container-projetos'>
      <h3 className='titulo-projetos' id='projetos'>Projetos</h3>
      <div className='projetos'  >
      {dataProjetos.map((elemento, index) => <Card key={index} img={elemento.img} titulo={elemento.titulo} infos={elemento.infos} />)}
      </div>
       
      </article>
     
    </section>
  );
}

export default Projetos;