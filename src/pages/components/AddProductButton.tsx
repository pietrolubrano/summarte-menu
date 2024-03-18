import Button from "react-bootstrap/esm/Button"

import { faCircleMinus } from "@fortawesome/free-solid-svg-icons/faCircleMinus"
import { faCirclePlus } from "@fortawesome/free-solid-svg-icons/faCirclePlus"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"

import type { Product } from "../../../types"

import { useAppDispatch, useAppSelector } from "../../../reduxHooks"
import { RootState } from "../../../store"

import { addItem, removeItem } from '../../features/cart/cartSlice'

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
            <div>
                <Button className="bg-transparent border-0 py-1 px-2 flex" style={{ color: 'greenyellow'}} onClick={() => handleClick(product.id, 'REMOVE')}>
                    <FontAwesomeIcon icon={faCircleMinus} size="1x" style={{ fontSize: '1.5rem'}} />
                </Button>
                {cart[findItemIndex].quantity}
                <Button className="bg-transparent border-0 py-1 px-2 flex" style={{ color: 'greenyellow'}} onClick={() => handleClick(product.id, 'ADD')}>
                    <FontAwesomeIcon icon={faCirclePlus} size="1x" style={{ fontSize: '1.5rem'}} />
                </Button>
            </div>
        )
    }

    return(
        <div>
            <Button className="bg-transparent border-0 py-1 px-2 flex" style={{ color: 'greenyellow'}} onClick={() => handleClick(product.id, 'ADD')}>
                <FontAwesomeIcon icon={faCirclePlus} size="1x" style={{ fontSize: '1.5rem'}} />
            </Button>
        </div>
    )

}

export default AddProductButton