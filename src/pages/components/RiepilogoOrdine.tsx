import { Col, Container, Row, Table } from "react-bootstrap"
import { useAppSelector } from "../../../reduxHooks"
import { RootState } from "../../../store"
import TableRow from "./TableRow"

const RiepilogoOrdine = () => {

    const cart = useAppSelector((state: RootState) => state.cart)
    const products = useAppSelector((state: RootState) => state.products.data)

    const calcolaTotaleOrdine = () => {
        const newArr: number[] = []
        cart.forEach(cartItem => {
            const findItemIndex = products.findIndex(item => item.id === cartItem.id)
            const price = products[findItemIndex].price * cartItem.quantity
            newArr.push(price)
        })
        return newArr.reduce((total, item) => total + item, 0)
    }

    if(cart[0]){
        return (
            <Container className="p-4 my-4">
                <Row>
                    <Col className="mb-2">
                        <h4>Riepilogo Ordine</h4>
                    </Col>
                </Row>
                <Row>
                    <Col>
                        <Table>
                            <tbody>
                                {
                                    cart.map(item => <TableRow key={item.id} item={item}/>)
                                }
                                <tr className="fw-bold">
                                    <td colSpan={2} className="border-0 ps-4 pt-3 text-end">TOTALE</td>
                                    <td className="text-end border-0 pt-3">{calcolaTotaleOrdine()} €</td>
                                </tr>
                            </tbody>
                            
                        </Table>
                    </Col>
                </Row>
            </Container>
        )           
    }
}

export default RiepilogoOrdine