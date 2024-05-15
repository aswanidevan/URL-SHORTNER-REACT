import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';



function NavBar(){
    return( 
           <Navbar expand="lg" className='color-navbar text-shadow-light'>
      <Container>
        <a href="#" className="fs-1 mx-0 fw-medium text-decoration-none ">BiTE <span className="fs-2 m-0 me-5 fw-medium"> URL</span> </a>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="me-auto">

          {/* </Nav>
        <Nav className="ms-auto"> */}
          <a href="#home" className="fs-3 mx-3 fw-medium text-decoration-none nav-hover-effect">Home</a>
          <a href="#link" className="fs-3 mx-3 fw-medium text-decoration-none nav-hover-effect">About</a>
        </Nav>
        </Navbar.Collapse>    
      </Container>
    </Navbar>
  );
                                                                                                                                                                                                                                                                                                                                                                                                       
}
export default NavBar