import Button from 'react-bootstrap/Button';
import Container from 'react-bootstrap/Container';
import Form from 'react-bootstrap/Form';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import NavDropdown from 'react-bootstrap/NavDropdown';
import { Link } from 'react-router-dom';

export const NavTop = () => {
  return (
    <Navbar bg="info" 
    fixed="top"
    expand="lg"
    variant="dark">
      <Container fluid>
        <Navbar.Brand href="#">Clínica Dental</Navbar.Brand>
        <Navbar.Toggle aria-controls="navbarScroll" />
        <Navbar.Collapse id="navbarScroll">
          <Nav
            className="me-auto my-2 my-lg-0"
            style={{ maxHeight: '100px' }}
            navbarScroll
          >
            <Nav.Link as={Link} to = '/'>Home</Nav.Link>
            {/* <Nav.Link as={Link} to = 'login'>Login</Nav.Link>
            <Nav.Link as={Link} to = 'signup'>Registro</Nav.Link> */}
            <NavDropdown title="Link" id="navbarScrollingDropdown">
              <NavDropdown.Item href="#action3">Action</NavDropdown.Item>
              <NavDropdown.Item href="#action4">
                Another action
              </NavDropdown.Item>
              <NavDropdown.Divider />
              <NavDropdown.Item href="#action5">
                Something else here
              </NavDropdown.Item>
            </NavDropdown>
            <Nav.Link href="#" disabled>
              Link
            </Nav.Link>
          </Nav>
          <Form className="d-flex">
            {/* <Form.Control
              type="search"
              placeholder="Search"
              className="me-2"
              aria-label="Search"
            />
            <Button variant="success">Search</Button> */}
                      <Nav
            className="me-auto my-2 my-lg-0"
            style={{ maxHeight: '100px' }}
            navbarScroll
          >
            <Nav.Link as={Link} to = '/login'>Login</Nav.Link>
            {/* <Nav.Link as={Link} to = 'login'>Login</Nav.Link>
            <Nav.Link as={Link} to = 'signup'>Registro</Nav.Link> */}
            <Nav.Link as={Link} to = '/'>Perfil</Nav.Link>
          </Nav>
          </Form>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}
