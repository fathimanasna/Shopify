import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import axios from "axios";


export const fetchProducts = createAsyncThunk('products/fetchProducts', async () => {
    const result = await axios.get('https://dummyjson.com/products')
    localStorage.setItem("products",JSON.stringify(result.data.products))
    return result.data.products
})

const productSlice = createSlice({
    name: 'products',
    initialState: {
        loading: true,
        allProducts: [],
        error: "",
        dummyProducts: []

    },
    reducers: {
        searchProducts: (state,action)=>{
            state.allProducts=state.dummyProducts.filter(pro=>pro.title.toLowerCase().includes(action.payload.toLowerCase()))
        }
    },
    extraReducers: (builder)=>{
        builder.addCase(fetchProducts.pending,(state,action)=>{
            state.loading=true
            state.allProducts=[]
            state.error=""
            state.dummyProducts=[]
        })
        builder.addCase(fetchProducts.fulfilled,(state,action)=>{
            state.loading=false
            state.allProducts=action.payload
            state.error=""
            state.dummyProducts=action.payload
        })
        builder.addCase(fetchProducts.rejected,(state,action)=>{
            state.loading=false
            state.allProducts=[]
            state.error="API Call Failed."
            state.dummyProducts=[]
        })
    }
})

export const {searchProducts}=productSlice.actions
export default productSlice.reducer