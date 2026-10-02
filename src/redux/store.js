import { configureStore } from "@reduxjs/toolkit";
import productReducer from '../redux/slices/productSlice'
import wishlistReducer from '../redux/slices/wishlistSlice'
import cartReducer from '../redux/slices/cartSlice'


const store = configureStore({
    reducer: {
        products: productReducer,
        wishlist: wishlistReducer,
        cart: cartReducer
    }
})

export default store