import React from 'react'
import { Container, Nav, Navbar } from 'react-bootstrap'


const Pagina = (props) => {
  return (
    <>
     <Navbar bg="success" data-bs-theme="success">
        <Container>
          <Navbar.Brand href="/">FRONT-END</Navbar.Brand>
          <Nav className="me-auto">
            <Nav.Link href="/">INICIAL</Nav.Link>
            <Nav.Link href="/alertas">ALERTAS</Nav.Link>
            <Nav.Link href="/botoes">BOTÕES</Nav.Link>
            <Nav.Link href="/contador">CONTADOR</Nav.Link>
            <Nav.Link href="/endereco">ENDEREÇO</Nav.Link>
            <Nav.Link href="/disney">DISNEY</Nav.Link>
          </Nav>
        </Container>
      </Navbar>

      <Container className='mt-3'>
     {props.children}
      </Container>
    </>
  )
}

export default Pagina