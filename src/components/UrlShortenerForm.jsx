import { Col,Row, Container, Button,Modal, InputGroup  } from 'react-bootstrap';
import Form from 'react-bootstrap/Form';
import { useState } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import {  faGreaterThan } from '@fortawesome/free-solid-svg-icons';

import axios from 'axios';


function UrlShortnerForm(){

  // State to manage form data
  const [formData, setFormData] = useState({
    originalUrl: '',
    urlSize: '5' // Default value for urlSize
  });

  // Handler function to update form data
  const handleChange = (event) => {
    const { name, value } = event.target;
    setFormData({ ...formData, [name]: value });
  };

  // Handler function to submit form data
  const handleSubmit = async (event) => {
    event.preventDefault();
    try {
      // Send form data to the local host using Axios
      const response = await axios.post('http://127.0.0.1:3000/api/shortenUrl', formData);
      console.log(response.data); // Log the response data
      // Handle the response as needed
    } catch (error) {
      console.error('Error:', error);
      // Handle errors
    }
  };

    return( 
    <> <form onSubmit={handleSubmit} className='bg-gradient-blue-green-2'> 
    <Container  className=' mx-auto p-5'>
   <Row >
    <Col>
    <InputGroup className="mb-3 mx-5">
        <Form.Control type="url" name='originalUrl' placeholder="https://www.example.com/abc" required className='rounded-start-5' onChange={handleChange} />
        <Button className='rounded-end-5 bg-color-vblue p-3 m-0'  type="submit"><span className='d-none d-sm-inline'>Shorten Url</span>  <FontAwesomeIcon icon={faGreaterThan} /></Button>
      </InputGroup>
    </Col>
</Row>
<Row> 
  <Col md={6} className='m-auto'  >
     <InputGroup className="mb-3  ">
        <Form.Label className='rounded-start-5 bg-color-vblue p-3 m-0'>URL Length</Form.Label>
        <Form.Select aria-label="Default select example"  required name='urlSize' className='rounded-end-5'  onChange={handleChange}>
          <option value="4">4</option>
          <option selected value="5">5</option>
          <option value="6">6</option>
          <option value="7">7</option>
          <option value="8">8</option>
          <option value="9">9</option>
          <option value="10">10</option>
          <option value="11">11</option>
        </Form.Select>
        </InputGroup>
    </Col>
    
    {/* <Col  md={6} >
    <Button variant="primary" className='m-auto' onClick={handleShow}>
        Get Premium
    </Button> </Col>
      <Modal show={show} onHide={handleClose}>
        <Modal.Header closeButton>
          <Modal.Title>Modal heading</Modal.Title>
        </Modal.Header>
        <Modal.Body>Woohoo, you are reading this text in a modal!</Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={handleClose}>
            Close
          </Button>
          <Button variant="primary" onClick={handleClose}>
            Save Changes
          </Button>
        </Modal.Footer>
      </Modal><Col>
    </Col> */}
    </Row>
</Container>
</form>
    </>
    );
}
export default UrlShortnerForm;