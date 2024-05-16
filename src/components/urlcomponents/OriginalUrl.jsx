import { Container, Row, Col } from 'react-bootstrap';
import {CopyToClipboard} from 'react-copy-to-clipboard';
import { FaCopy } from "react-icons/fa";
import {  toast } from 'react-toastify';

function OriginalUrl({originalUrl, shortenedUrl }) {

  const sUrl=originalUrl;
     if (originalUrl)  {
        console.log("originalUrl");
        console.log(originalUrl);
        return (
        <Container >
          <Row className="mb-3 p-1 rounded-5 bg-field-label"> <Col>
          <p  value={window.location.href+shortenedUrl}>Shortened URL: {sUrl}</p>
        </Col>
        <Col>
          <p>Original URL: {originalUrl}</p>
        </Col>

        <Col md={1}>
        <CopyToClipboard text={sUrl}  ><FaCopy onClick={  () => toast("Copied to Clipboard")}/></CopyToClipboard>
        </Col>    </Row>
    </Container>
  );
}
  return(  <Container >
    <Row className="mb-3 p-1 rounded-5 ">
    </Row></Container >
        );
}//Copy Link automatically to be implement and toaasst copy action

export default OriginalUrl;