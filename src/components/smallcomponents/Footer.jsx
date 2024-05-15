import { Col,Row, Container } from "react-bootstrap"
import { FaFacebook,FaInstagram } from "react-icons/fa";
import { FaXTwitter } from "react-icons/fa6";
function Footer() {
    return(<>
        <footer className="p-5  ">
            <Container className="my-4  px-5 mx-auto">
                <Row>
                    <Col md='5'>

                <Row href="#" className="  fs-1      fw-semibold ">BiTE URL</Row>
                <Row href="#" className="  fs-10     fw-lighter ">Get Your Byte URL</Row>
                </Col>
                <Col  md='5 '>
                    <Row> <span href="#" className="  fs-5  ">Shorten URL</span></Row>
                    <Row> <span href="#" className="  fs-5  ">About</span></Row>
                    <Row> <span href="#" className="  fs-5      ">Home</span></Row>
                </Col>
                <Col  md='2'>
                    <Row>
                    <Col>
                    <FaFacebook  /></Col>
                    <Col>
                    <FaInstagram /></Col>   
                    <Col>
                    <FaXTwitter /></Col>
                    </Row>
                    <Row className="px-2 mt-2">Lottegollahali,</Row>
                    <Row className="px-2">Bengaluru.</Row>
                </Col>
                </Row>

            </Container>
        </footer>
    </>)
}
export default Footer
 