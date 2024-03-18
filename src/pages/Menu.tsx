import { Accordion, Col, Container, Row } from "react-bootstrap"
import { categories } from "./useMenu"

import AccordionBody from "./components/AccordionBody"
import { useParams } from "react-router-dom"
import RiepilogoOrdine from "./components/RiepilogoOrdine"

const Menu = () => {
    let { numeroTavolo } = useParams();

    console.log(numeroTavolo)
    return(<>
        <Container className="my-4">
            <Row>
                <Col className="p-0">
                    <Accordion defaultActiveKey={[]} className="rounded-none" alwaysOpen>
                    {
                        categories.map(category => <Accordion.Item key={category.name} className="border-0" eventKey={category.name}>
                            <Accordion.Header><span className="fw-bold">{category.name}</span></Accordion.Header>
                            <AccordionBody category={category}/>
                        </Accordion.Item>)
                    }
                    </Accordion>
                </Col>
            </Row>
        </Container>
        <RiepilogoOrdine />
    </>)
}

export default Menu