import API from "@/config/config";
import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";

export const fetchCategory = createAsyncThunk('fetchCategory',async ()=>{
    try {
        const response = await API.get('category')
        return response.data;
    } catch (error) {
        console.log(error);
    }
})

const initialState={
    data: [],
    isLoading:true,
    error: null,
    totalCategory: 0
}

const categorySlice = createSlice({
    name:'category',
    initialState: initialState,
    extraReducers: (builder)=>{
        builder.addCase(fetchCategory.pending,(state,action)=>{
            state.isLoading= true
        });
        builder.addCase(fetchCategory.fulfilled,(state,action)=>{
            state.isLoading= false,
            state.data = action.payload.category,
            state.totalCategory = action.payload.totalCategory
        });
        builder.addCase(fetchCategory.rejected,(state,action)=>{
            state.isLoading= false,
            state.error= true
        });
    }
})

export default categorySlice.reducer