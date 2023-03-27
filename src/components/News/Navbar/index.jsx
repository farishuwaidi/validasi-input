import React from 'react'
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';

const index = () => {
  return (
    <div>
      <Navbar bg="dark" variant="dark" className='p-4 fixed-top'>
        <Container>
          <Navbar.Brand href="#home">Menitcom</Navbar.Brand>
          <Nav>
            <input id="search-input" class="form-control" type="search" placeholder="Search" aria-label="Search" />
          </Nav>
        </Container>
      </Navbar>
    </div>
  )
}

export default index
