import { createSlice } from "@reduxjs/toolkit";

const savedWishlist = JSON.parse(
    localStorage.getItem("wishlist")
) || [];

const wishlistSlice = createSlice({

    name: 'wishlist',

    initialState: savedWishlist,

    reducers: {

        addToWishlist: (state, action) => {

            state.push(action.payload)

            localStorage.setItem(
                "wishlist",
                JSON.stringify(state)
            )

        },

        removeFromWishlist: (state, action) => {

            const updatedWishlist = state.filter(
                pro => pro.id !== action.payload
            )

            localStorage.setItem(
                "wishlist",
                JSON.stringify(updatedWishlist)
            )

            return updatedWishlist

        }

    }

})

export const {
    addToWishlist,
    removeFromWishlist
} = wishlistSlice.actions

export default wishlistSlice.reducer