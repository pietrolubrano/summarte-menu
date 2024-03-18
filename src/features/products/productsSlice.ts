import { createSlice } from '@reduxjs/toolkit'

import type { Product } from '../../../types'

import type { RootState } from '../../../store'
// Define a type for the slice state
interface ProductsState {
  data: Product[]
}

// Define the initial state using that type
const initialState: ProductsState = {
    data: [
        { id:0, name: 'Acqua Naturale', categoryName: 'Bevande Analcoliche', description: '0.75cl', price: 1 },
        { id:1, name: 'Acqua Gassata', categoryName: 'Bevande Analcoliche', description: '0.75cl', price: 1 },
        { id:2, name: 'Coca Cola', categoryName: 'Bevande Analcoliche', description: '0.33cl', price: 1.50 },
        { id:3, name: 'Sbriciolata al Cioccolato', description: 'Preparata in casa',  categoryName: 'Dolci', price: 3 },
        { id:4, name: 'Peroni', categoryName: 'Birre',  description: '0.33cl', price: 2.50 },
        { id:5, name: 'Ichnusa', categoryName: 'Birre',  description: '0.33cl', price: 3.50 }
    ]
}

export const cartSlice = createSlice({
  name: 'products',
  // `createSlice` will infer the state type from the `initialState` argument
  initialState,
  reducers: {
    
  },
})

export const { } = cartSlice.actions

// Other code such as selectors can use the imported `RootState` type
export const selectProducts = (state: RootState) => state.products

export default cartSlice.reducer