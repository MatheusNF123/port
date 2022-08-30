import Form from 'react-bootstrap/Form';
import './Contato.css'
import {IoLogoWhatsapp} from "react-icons/io5";
import {GrLinkedin} from "react-icons/gr";
import {HiOutlineMail} from "react-icons/hi";
import Button from 'react-bootstrap/Button';
import emailjs from 'emailjs-com';
import { useRef } from 'react';
// import {useRef} from 'react'

function Contato() {
  const form = useRef();
const enviar = (e) => {
 
    e.preventDefault();

    emailjs.sendForm('service_isge17h', 'template_g5vf8z4', form.current, 'Wfl_H2UKt1OPN6X2W')
      .then((result) => {
          alert('Mensagem enviada com sucesso')
      }, (error) => {
        alert(error.message)
      });
}

  return (
    <section className='container-contato'>
      <div className='content-contato'>
        <h2 id='contate'>Contate-me</h2>
        <article className='contato'>       
          <div className='container-meu-contato'>
            {/* <h4>Meu contato</h4> */}
            <div className='meu-contato'>
              {/* <img src="" alt="icone-e-mail" /> */}
              <HiOutlineMail className='icons'/>
              <p className='nome-rede'>Email</p>
              <p className='ende-contato'>matheus_cs.nf@hotmail.com</p>
              <a href='mailto:matheus_cs.nf@hotmail.com' target='_blank' rel="noreferrer">enviar mensagem</a>
            </div>
            <div className='meu-contato'>
            {/* <img src="" alt="icone-linkedin" /> */}
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
          <Form className='form-contato' action='https://api.staticforms.xyz/submit' method='POST'  /* ref={form} onSubmit={enviar} */>
          
              <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
              <input type="hidden" name="accessKey" value="3b2ee920-da30-44af-b5bb-1ada5bf4ff5c"/>
              <Form.Label>Nome</Form.Label>
              <Form.Control type="text" name='name'/>
            </Form.Group>
            <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
              <Form.Label>Email</Form.Label>
              <Form.Control type="email" placeholder="name@example.com" name='email' />
            </Form.Group>
            <Form.Group className="mb-3" controlId="exampleForm.ControlTextarea1">
              <Form.Label>Mensagem</Form.Label>
              <input type="hidden" name="redirectTo" value="http://localhost:3000/"></input>
              <Form.Control as="textarea" rows={5} name='message'/>
            </Form.Group>
              
            <Button as="input" type="submit" value="Enviar" size='lg' className='button-enviar'/>
          </Form>
        </article>
    </div>
    </section>
  );
}

export default Contato;