import { Col,Row, Container, Button, InputGroup  } from 'react-bootstrap';
import Form from 'react-bootstrap/Form';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import {  faGreaterThan } from '@fortawesome/free-solid-svg-icons';


function UrlShortnerForm({formData, handleChange,  handleSubmit}){

    


    return( 
    <> <form onSubmit={handleSubmit} className=''>
    <Container  className=' mx-auto p-5'>
   <Row >
    <Col>
    <InputGroup className="mb-3 mx-5">
        <Form.Control type="url" name='originalUrl'   value={formData.originalUrl}  placeholder="https://www.example.com/abc" required className='rounded-start-5 input-fields-bg' onChange={handleChange} />
        <Button className='rounded-end-5 bg-field-label p-3 m-0'  type="submit"><span className='d-none d-sm-inline'>Shorten Url</span>  <FontAwesomeIcon icon={faGreaterThan} /></Button>
      </InputGroup>
    </Col>
</Row>
<Row> 
  <Col md={6} className='m-auto'  >
     <InputGroup className="mb-3  ">
        <Form.Label className='rounded-start-5 bg-field-label p-3 m-0 color-white'>URL Length</Form.Label>
        <Form.Select aria-label="Enter URL Size"  required name='urlSize' className='input-fields-bg color rounded-end-5'  onChange={handleChange}>
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
    </Row>
</Container>
</form>
    </>
    );
}
export default UrlShortnerForm;