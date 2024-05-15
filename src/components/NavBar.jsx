import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';



function NavBar(){
    return( 
           <Navbar expand="lg" className='  color-navbar  text-shadow-light'>
      <Container>
        <Navbar.Brand href="#" className="  fs-1 mx-0   fw-medium ">BiTE <span className="  fs-2 m-0 me-5   fw-medium "> URL</span> </Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="me-auto">

          {/* </Nav>
        <Nav className="ms-auto"> */}
          <Nav.Link href="#home" className="fs-3  fw-medium ">Home</Nav.Link>
          <Nav.Link href="#link" className="fs-3   fw-medium">About</Nav.Link>
        </Nav>
        </Navbar.Collapse>    
      </Container>
    </Navbar>
  );
                                                                                                                                                                                                                                                                                                                                                                                                       
}
export default NavBar