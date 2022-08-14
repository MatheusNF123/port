import Form from 'react-bootstrap/Form';

function Contato() {
  return (
    <section>
    <Form >
        <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
        <Form.Label>Nome</Form.Label>
        <Form.Control type="text" />
      </Form.Group>
      <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
        <Form.Label>Email</Form.Label>
        <Form.Control type="email" placeholder="name@example.com" />
      </Form.Group>
      <Form.Group className="mb-3" controlId="exampleForm.ControlTextarea1">
        <Form.Label>Mensagem</Form.Label>
        <Form.Control as="textarea" rows={5} />
      </Form.Group>
    </Form>
    <div>
      <h2>Meu contato</h2>
      <span>55-555-5555-55555</span>
      <span>matheus_cs.nf@hotmail.com</span>
      <div>
        <img src="" alt="icone-linkedin" />
        <img src="" alt="icone-gitHub" />
        <img src="" alt="icone-e-mail" />
      </div>
    </div>
    </section>
  );
}

export default Contato;