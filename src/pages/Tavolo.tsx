import { Col, Container, Row } from "react-bootstrap";
import { useParams } from "react-router-dom";
import Menu from "./Menu";

const Tavolo = () => {

    let { numeroTavolo } = useParams();

    return(<>
        <Container className="mb-4">
            <Row>
                <Col xs={8} className="p-3 pb-1" style={{ fontSize: '0.9rem'}}>
                    <p className="fs-4 mb-1 fw-bold" style={{ color: 'greenyellow'}}>
                        Benvenuto :-)
                    </p>
                    <p>
                        puoi compilare qui la tua ordinazione
                    </p>
                </Col>
                <Col xs={4} className="p-3 pb-1 text-center fs-3">
                    Tavolo <br /> 
                    <span className="fs-1" style={{ color: 'greenyellow'}}>{numeroTavolo}</span>
                </Col>
            </Row>
        </Container>
        <Menu/>
    </>)
}

export default Tavolo