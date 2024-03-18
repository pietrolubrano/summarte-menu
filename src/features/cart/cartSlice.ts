import { createSlice } from '@reduxjs/toolkit'
import type { PayloadAction } from '@reduxjs/toolkit'

import type { RootState } from '../../../store'
// Define a type for the slice state
import type { CartItem, Product } from '../../../types'
// Define the initial state using that type
const initialState: CartItem[] = []

export const cartSlice = createSlice({
  name: 'cart',
  // `createSlice` will infer the state type from the `initialState` argument
  initialState,
  reducers: {
    addItem: (state, { payload } : { payload: Product['id']}) => {
      const findItemIndex = state.findIndex(item => item.id === payload)
      if(findItemIndex === -1){
        state.push({id: payload, quantity: 1})
      } else {
        state[findItemIndex].quantity += 1
      }
    },
    removeItem: (state, { payload }) => {
      const findItemIndex = state.findIndex(item => item.id === payload)

      if(state[findItemIndex].quantity === 1){
        state.splice(findItemIndex)
      } else {
        state[findItemIndex].quantity -= 1
      }
    },
    // Use the PayloadAction type to declare the contents of `action.payload`
    incrementByAmount: (state, action: PayloadAction<number>) => {
      /* state.value += action.payload */
    },
  },
})

export const { addItem, removeItem, incrementByAmount } = cartSlice.actions

// Other code such as selectors can use the imported `RootState` type
export const selectCount = (state: RootState) => state.cart

export default cartSlice.reducer