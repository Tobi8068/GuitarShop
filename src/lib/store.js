import { configureStore } from '@reduxjs/toolkit'
import productReducer from './features/product'
import categoryReducer from './features/category'
import brandReducer from './features/brand'
import userReducer from './features/user'
import cartReducer from './features/cart'
import wishlistReducer from './features/wishlist'

export const makeStore = () => {
  return configureStore({
    reducer: {
        product: productReducer,
        category: categoryReducer,
        brand:brandReducer,
        user: userReducer,
        cart: cartReducer,
        wishlist: wishlistReducer
    }
  })
}