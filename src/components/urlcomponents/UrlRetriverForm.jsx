import { Col,Row, Container, Button, InputGroup  } from 'react-bootstrap';
import Form from 'react-bootstrap/Form';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import {  faGreaterThan } from '@fortawesome/free-solid-svg-icons';


function UrlRetriver({ retriveFormData, handleChangeShortUrl,  handleSubmitRetrive}){
    return( 
    <> <form onSubmit={handleSubmitRetrive} className=''>
    <Container  className=' mx-auto p-5'>
   <Row >
    <Col>
    <InputGroup className="mb-3 mx-5">
        <Form.Control type="url" name='shortUrl' value={retriveFormData} placeholder={"(Enter Short URL)"+window.location.href+"/xyz-_ "} required className='rounded-start-5 input-fields-bg' onChange={handleChangeShortUrl} />
        <Button className='rounded-end-5 bg-field-label p-3 m-0'  type="submit"><span className='d-none d-sm-inline'>Get Url</span>  <FontAwesomeIcon icon={faGreaterThan} /></Button>
      </InputGroup>
    </Col>
</Row>

</Container>
</form>
    </>
    );
}
export default UrlRetriver;