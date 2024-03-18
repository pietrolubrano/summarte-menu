import React from "react"

import { useAppSelector } from '../../../reduxHooks'
import { RootState } from "../../../store"

import type { Category } from "../../../types"

import { Accordion, Col, ListGroup, Row } from "react-bootstrap"
import AddProductButton from "./AddProductButton"


const AccordionBody = ({ category } : { category: Category }) => {
    
    const products = useAppSelector((state: RootState) => state.products.data)

    return(
        <Accordion.Body className="p-0">
            <ListGroup>
                {
                    products
                    .filter(product => product.categoryName === category.name)
                    .map(product => <React.Fragment key={product.id}>
                        <ListGroup.Item  className="border-0 px-4 lh-sm fw-bold" style={{ fontSize: '0.9rem'}}>
                        <Row >

                            <Col xs={7} className="d-flex align-items-center">

                                <Row >
                                    <Col xs={12} className="px-2">
                                        {product.name}
                                    </Col>
                                    <Col xs={12} className="text-muted fst-italic ms-1" style={{ fontSize: '0.6rem'}}>
                                        {product.description}
                                    </Col>
                                </Row>
                            
                            </Col>
                           
                            <Col xs={5} className="d-flex align-items-center justify-content-end p-0">
                                
                                <span className="float-end me-1" style={{ fontSize: '0.9rem'}}>{product.price} €</span>
                                <AddProductButton product={product}/>

                            </Col>
                        </Row>
                        
                    </ListGroup.Item>
                    <hr className="p-0 m-0" />
                    </React.Fragment>)
                }
            </ListGroup>
        </Accordion.Body>
    )
}

export default AccordionBody