import { Container, Row, Col } from 'react-bootstrap';
import {CopyToClipboard} from 'react-copy-to-clipboard';
import { FaCopy } from "react-icons/fa";


function ShortUrlRow({ msg, originalUrl, shortenedUrl }) {


  const sUrl=window.location.protocol+'//'+window.location.host+"/"+shortenedUrl;

  return (
    <Container >
      <Row className="mb-3 p-4 rounded-5 bg-field-label">
        <Col>
          <p>Message: {msg}</p>
        </Col>
      
        <Col>
          <p>Original URL: {originalUrl}</p>
        </Col>
     
        <Col>
          <p  value={window.location.href+shortenedUrl}>Shortened URL: {sUrl}</p>
        </Col>
        <Col md={1}>
        <CopyToClipboard text={sUrl}><FaCopy/></CopyToClipboard>
        </Col>
          
      </Row>
    </Container>
  );
}//Copy Link automatically to be implement and toaasst copy action

export default ShortUrlRow;