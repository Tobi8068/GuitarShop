import API from "@/config/config";
import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";

export const fetchProducts = createAsyncThunk('fetchProducts',async (url)=>{
    try {
        const response = await API.get(url)
        return response.data;
    } catch (error) {
        console.log(error);
    }
})

const initialState={
    data: [],
    singleProductData :{},
    message: null,
    error: null,
    status: "idle",
    totalPages: 1,
    totalProducts: 0
}

const productSlice = createSlice({
    name:'product',
    initialState: initialState,
    extraReducers: (builder)=>{
        builder.addCase(fetchProducts.pending,(state,action)=>{
            state.isLoading= true
        });
        builder.addCase(fetchProducts.fulfilled,(state,action)=>{
            state.isLoading= false,
            state.data = action.payload.products,
            state.totalProducts = action.payload.total,
            state.totalPages = action.payload.totalPages
        });
        builder.addCase(fetchProducts.rejected,(state,action)=>{
            state.isLoading= false,
            state.error= true
        });
    }
})

export default productSlice.reducer