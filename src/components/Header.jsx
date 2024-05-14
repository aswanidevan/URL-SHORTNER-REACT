import { Col, Container, Row } from 'react-bootstrap';

function Header(){
    return( 
    <> 
    <header className='  bg-gradient-blue-green-1 '>       
     <Container className='bg-transparent font-bradley rounded-bottom-5 '>
            <Row>
            <Col className='fs-bolder fs-1 text-center color-white py-5 text-shadow-light'>Create Your Short URLs</Col>
                </Row>  
                <Row>
            <Col className='fw-light fs-4 text-center text-shadow-light-2 pb-5 '>
                Create Your Byte sized Short URLs with fast and Customisable URLs on Byte URL
            </Col>
            </Row>  
        </Container>
        </header>

    </>
    );
}
export default Header;
