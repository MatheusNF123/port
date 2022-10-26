import Form from 'react-bootstrap/Form';
import './Contact.css'
import {IoLogoWhatsapp} from "react-icons/io5";
import {GrLinkedin} from "react-icons/gr";
import {HiOutlineMail} from "react-icons/hi";
import Button from 'react-bootstrap/Button';
import Mycontext from '../../Context/MyContext';
import { useContext } from 'react';

function Contato() {
  const { ativaAnimationContato, elC} = useContext(Mycontext)

  return (
    <section className='container-contato'>
      <div className='content-contato' ref={elC}>
        <h2 id='contate'>Contate-me</h2>
        <article className='contato'>       
          <div className={`container-meu-contato ${ativaAnimationContato && 'animate'}`} data-anime='left' >
            <div className='meu-contato'>
              <HiOutlineMail className='icons'/>
              <p className='nome-rede'>Email</p>
              <p className='ende-contato'>matheus_cs.nf@hotmail.com</p>
              <a href='mailto:matheus_cs.nf@hotmail.com' target='_blank' rel="noreferrer">enviar mensagem</a>
            </div>
            <div className='meu-contato'>
           
            <GrLinkedin className='icons'/>
              <p className='nome-rede'>LinkedIn</p>
              <p className='ende-contato'>linkedin.com/in/matheus-almeida-saporito/</p>
              <a href='https://www.linkedin.com/in/matheus-almeida-saporito/' target='_blank' rel="noreferrer">enviar mensagem</a>
            </div>
            <div className='meu-contato'>
            <IoLogoWhatsapp className='icons'/>
              <p className='nome-rede'>WhatsApp</p>
              <p className='ende-contato'>(43) 99613-4320</p>
              <a href='https://api.whatsapp.com/send?phone=5543996134320' target='_blank' rel="noreferrer">enviar mensagem</a>
            </div>            
          </div>
          <Form className={`form-contato ${ativaAnimationContato && 'animate'}`} action='https://getform.io/f/ff2c1531-e22e-43dc-9948-130331673bf4' encType='multipart/form-data' method='POST' ref={elC} data-anime='right'>
          
              <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
              <Form.Label></Form.Label>
              <Form.Control type="text" name='name' placeholder='Nome'/>
            </Form.Group>
            <Form.Group className="mb-3"  controlId="exampleForm.ControlInput1">
              <Form.Label></Form.Label>
              <Form.Control type="email"  placeholder="name@example.com" name='email' />
            </Form.Group>
            <Form.Group className="mb-3"  controlId="exampleForm.ControlTextarea1">
              <Form.Label></Form.Label>
              <Form.Control as="textarea" rows={5} name='message' placeholder='Mensagem'/>
            </Form.Group>
              
            <Button as="input" type="submit" value="Enviar" size='lg' className='button-enviar'/>
          </Form>
        </article>
    </div>
    </section>
  );
}

export default Contato;