import API from "@/config/config";
import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";

export const fetchBrands = createAsyncThunk('fetchBrands',async ()=>{
    try {
        const response = await API.get('brand')
        return response.data;
    } catch (error) {
        console.log(error);
    }
})

const initialState={
    data: [],
    isLoading:true,
    error: null,
    totalBrand: 0
}

const brandSlice = createSlice({
    name:'category',
    initialState: initialState,
    extraReducers: (builder)=>{
        builder.addCase(fetchBrands.pending,(state,action)=>{
            state.isLoading= true
        });
        builder.addCase(fetchBrands.fulfilled,(state,action)=>{
            state.isLoading= false,
            state.data = action.payload.brand,
            state.totalBrand = action.payload.totalBrand
        });
        builder.addCase(fetchBrands.rejected,(state,action)=>{
            state.isLoading= false,
            state.error= true
        });
    }
})

export default brandSlice.reducer