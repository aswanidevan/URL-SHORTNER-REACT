import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';



function NavBar(){
    return( 
           <Navbar expand="lg" className='bg-gradient-blue-green color-ivory text-shadow-light'>
      <Container>
        <Navbar.Brand href="#" className="  fs-1     fw-semibold gradient-text">BYTE URL</Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="me-auto">

          {/* </Nav>
        <Nav className="ms-auto"> */}
          <Nav.Link href="#home" className="fs-3  fw-medium ">Home</Nav.Link>
          <Nav.Link href="#link" className="fs-3  fw-medium">About</Nav.Link>
        </Nav>
        </Navbar.Collapse>    
      </Container>
    </Navbar>
  );
                                                                                                                                                                                                                                                                                                                                                                                                       
}
export default NavBar