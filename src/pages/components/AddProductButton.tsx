import Button from "react-bootstrap/esm/Button"

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"

import type { Product } from "../../../types"

import { useAppDispatch, useAppSelector } from "../../../reduxHooks"
import { RootState } from "../../../store"

import { addItem, removeItem } from '../../features/cart/cartSlice'
import { faMinus } from "@fortawesome/free-solid-svg-icons/faMinus"
import { faPlus } from "@fortawesome/free-solid-svg-icons/faPlus"
import { faTrash } from "@fortawesome/free-solid-svg-icons"

import { Col } from "react-bootstrap"

const AddProductButton = ({ product } : { product: Product}) => {

    const cart = useAppSelector((state: RootState) => state.cart)
    const dispatch = useAppDispatch()
    
    const findItemIndex = cart.findIndex(item => item.id === product.id)

    const handleClick = (id: Product['id'], action: string) => {
        if(action === 'ADD'){
            dispatch(addItem(id))
        }
        if(action === 'REMOVE'){
            dispatch(removeItem(id))
        }
    }

    if(findItemIndex !== -1){
        return(
            <Col xs={5} className="d-flex align-items-center justify-content-end p-0">
                                
                <div className="float-end me-1" style={{ fontSize: '1rem' }}>
                    {product.price} €
                </div>
                <div>
                    <Button className="bg-transparent border-0 py-1 px-2 flex" style={{ color: 'greenyellow'}} onClick={() => handleClick(product.id, 'REMOVE')}>
                        {
                            cart[findItemIndex].quantity === 1 ?
                            <FontAwesomeIcon icon={faTrash} size="1x" style={{ fontSize: '1.3rem'}} />
                            :
                            <FontAwesomeIcon icon={faMinus} size="1x" style={{ fontSize: '1.5rem'}} />
                        }
                    </Button>
                    {cart[findItemIndex].quantity}
                    <Button className="bg-transparent border-0 py-1 px-2 flex" style={{ color: 'greenyellow'}} onClick={() => handleClick(product.id, 'ADD')}>
                        <FontAwesomeIcon icon={faPlus} size="1x" style={{ fontSize: '1.5rem'}} />
                    </Button>
                </div>

            </Col>
            
        )
    }

    return(
        <Col xs={5} className="d-flex align-items-center justify-content-end p-0">
                                
            <div className="float-end me-1 rounded p-1 text-white text-shadow" style={{ fontSize: '1rem' }}>
                {product.price} €
            </div>
            <div>
                <Button className="bg-transparent border-0 py-1 px-2 flex" style={{ color: 'greenyellow'}} onClick={() => handleClick(product.id, 'ADD')}>
                    <FontAwesomeIcon icon={faPlus} size="1x" style={{ fontSize: '1.5rem'}} />
                </Button>
            </div>

        </Col>
    )

}

export default AddProductButton