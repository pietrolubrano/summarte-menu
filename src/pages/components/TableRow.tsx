import { useAppSelector } from "../../../reduxHooks"
import { RootState } from "../../../store"
import { CartItem } from "../../../types"

const TableRow = ({ item } : { item: CartItem }) => {

    const products = useAppSelector((state: RootState) => state.products.data)
    
    const findItem = () => {
        const findProductIndex = products.findIndex(product => product.id === item.id)
        return products[findProductIndex]
    }

    return(
        <tr>
            <td>
                {item.quantity}
            </td>
            <td>
                {findItem().name}
            </td>
            <td className="text-end">
                {findItem().price*item.quantity} €
            </td>
        </tr>
    )
}

export default TableRow