import { Button, Col, Container, Row, Table } from "react-bootstrap"
import { useAppSelector } from "../../../reduxHooks"
import { RootState } from "../../../store"
import TableRow from "./TableRow"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { faWhatsapp } from "@fortawesome/free-brands-svg-icons/faWhatsapp"
import { useParams } from "react-router-dom"

const RiepilogoOrdine = () => {

    let { numeroTavolo } = useParams();
    
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

    const sendMessage = () => {
        const testoNumeroTavolo = `TAVOLO ${numeroTavolo}`

        const text = [testoNumeroTavolo, '%0D%0D']

        cart.forEach(cartItem => {
            const findItemIndex = products.findIndex(item => item.id === cartItem.id)
            const productName = products[findItemIndex].name
            
            text.push( encodeURI('- ' + cartItem.quantity + ' ' + productName) + '%0D')
        })

        window.open(
            `https://wa.me/${import.meta.env.VITE_WA_PHONE_NUMBER}?text=${text.join('')}`,
            '_blank'
        );
    }

    if(cart[0]){
        return (
            <Container className="p-4 my-4">

                <Row>
                    <Col className="text-uppercase fw-bold fs-5">
                        <p>Riepilogo Ordine</p>
                    </Col>
                </Row>
                <Row>
                    <Col className="border border-4 m-2 p-0 fw-bold" style={{ fontSize: '0.9rem' }}>
                        <Table className="mb-1">
                            <tbody>
                                {
                                    cart.map(item => <TableRow key={item.id} item={item}/>)
                                }
                                <tr className="fw-bold">
                                    <td colSpan={2} className="border-0 ps-4 pt-3 text-end">TOTALE</td>
                                    <td className="text-end border-0 pt-3 pe-3" style={{  width: 80 }}>
                                        {calcolaTotaleOrdine()} €
                                    </td>
                                </tr>
                            </tbody>
                            
                        </Table>
                    </Col>
                </Row>
                
                <Row>
                    <Col className="px-2">
                        <Button onClick={() => sendMessage()} className="w-100 border-4 rounded-0 bg-transparent text-uppercase" style={{ borderColor: 'greenyellow', color: 'greenyellow' }}>
                            Invia ordine <FontAwesomeIcon icon={faWhatsapp} />
                        </Button>
                    </Col>
                </Row>
            </Container>
        )           
    }
}

export default RiepilogoOrdine