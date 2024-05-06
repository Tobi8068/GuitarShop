import { configureStore } from '@reduxjs/toolkit'
import productReducer from './features/product'

export const makeStore = () => {
  return configureStore({
    reducer: {
        product: productReducer
    }
  })
}