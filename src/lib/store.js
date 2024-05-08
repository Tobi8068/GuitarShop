import { configureStore } from '@reduxjs/toolkit'
import productReducer from './features/product'
import categoryReducer from './features/category'

export const makeStore = () => {
  return configureStore({
    reducer: {
        product: productReducer,
        category: categoryReducer
    }
  })
}