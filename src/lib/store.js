import { configureStore } from '@reduxjs/toolkit'
import productReducer from './features/product'
import categoryReducer from './features/category'
import userReducer from './features/user'
import cartReducer from './features/cart'

export const makeStore = () => {
  return configureStore({
    reducer: {
        product: productReducer,
        category: categoryReducer,
        user: userReducer,
        cart: cartReducer
    }
  })
}