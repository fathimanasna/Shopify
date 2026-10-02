import { createSlice } from "@reduxjs/toolkit";

const savedCart = JSON.parse(
    localStorage.getItem("cart")
) || [];

const cartSlice = createSlice({

    name: 'cart',

    initialState: savedCart,

    reducers: {

        addToCart: (state, action) => {

            let existingProduct = state.find(
                pro => pro.id == action.payload.id
            )

            if (existingProduct) {

                existingProduct.quantity++

                existingProduct.totalPrice =
                    existingProduct.quantity * existingProduct.price

            }
            else {

                state.push({
                    ...action.payload,
                    quantity: 1,
                    totalPrice: action.payload.price
                })

            }

            localStorage.setItem(
                "cart",
                JSON.stringify(state)
            )

        },


        incrementQuantity: (state, action) => {

            let product = state.find(
                pro => pro.id == action.payload
            )

            if (product) {

                product.quantity++

                product.totalPrice =
                    product.quantity * product.price

            }

            localStorage.setItem(
                "cart",
                JSON.stringify(state)
            )

        },


        decrementQuantity: (state, action) => {

            let product = state.find(
                pro => pro.id == action.payload
            )

            if (product && product.quantity > 1) {

                product.quantity--

                product.totalPrice =
                    product.quantity * product.price

            }

            localStorage.setItem(
                "cart",
                JSON.stringify(state)
            )

        },


        removeFromCart: (state, action) => {

            const updatedCart = state.filter(
                pro => pro.id !== action.payload
            )

            localStorage.setItem(
                "cart",
                JSON.stringify(updatedCart)
            )

            return updatedCart

        },


        clearCart: () => {

            localStorage.removeItem("cart")

            return []

        }

    }

})

export const {
    addToCart,
    incrementQuantity,
    decrementQuantity,
    removeFromCart,
    clearCart
} = cartSlice.actions

export default cartSlice.reducer