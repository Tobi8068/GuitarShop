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

export const addCategory = createAsyncThunk('addCategory', async (category)=>{
    try {
        const response = await API.post(`category`,category)
        return response.data;
    } catch (error) {
        console.log(error);
    }
})

export const deleteCategory = createAsyncThunk('deleteCategory', async (id)=>{
    try {
        const response = await API.delete(`category/${id}`)
        return response.data;
    } catch (error) {
        console.log(error);
    }
})

export const updateCategory = createAsyncThunk(
    'updateCategory',
    async ({ id, formData }, { rejectWithValue }) => {
        try {
            const response = await API.put(`/category/${id}`, formData);
            return response.data;
        } catch (error) {
            if (error.response && error.response.data) {
                // If the error has a response with data, return it as rejectWithValue
                return rejectWithValue(error.response.data);
            } else {
                // Otherwise, return a general error message
                return rejectWithValue({ message: 'An error occurred while updating the product' });
            }
        }
    }
);


export const fetchSingleCategory = createAsyncThunk('fetchSingleCategory',async (id)=>{
    try {
        const response = await API.get(`category/${id}`)
        return response.data;
    } catch (error) {
        console.log(error);
    }
})

const initialState={
    data: [],
    singleCategoryData:{},
    isLoading:true,
    error: null,
    totalCategory: 0
}

const categorySlice = createSlice({
    name:'category',
    initialState: initialState,
    extraReducers: (builder)=>{
        builder.addCase(addCategory.pending,(state,action)=>{
            state.isLoading= true
        });
        builder.addCase(addCategory.fulfilled,(state,action)=>{
            state.isLoading= false
        });
        builder.addCase(addCategory.rejected,(state,action)=>{
            state.isLoading= false,
            state.error= true
        });
        builder.addCase(deleteCategory.pending,(state,action)=>{
            state.isLoading= true
        });
        builder.addCase(deleteCategory.fulfilled,(state,action)=>{
            state.isLoading= false
        });
        builder.addCase(deleteCategory.rejected,(state,action)=>{
            state.isLoading= false,
            state.error= action.payload.message
        });
        builder.addCase(updateCategory.pending,(state,action)=>{
            state.isLoading= true
        });
        builder.addCase(updateCategory.fulfilled,(state,action)=>{
            state.isLoading= false
        });
        builder.addCase(updateCategory.rejected,(state,action)=>{
            state.isLoading= false,
            state.error= action.payload.message
        });
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

        builder.addCase(fetchSingleCategory.pending,(state,action)=>{
            state.isLoading= true
        });
        builder.addCase(fetchSingleCategory.fulfilled,(state,action)=>{
            state.isLoading= false,
            state.singleCategoryData = action.payload
        });
        builder.addCase(fetchSingleCategory.rejected,(state,action)=>{
            state.isLoading= false,
            state.error= true
        });
    }
})

export default categorySlice.reducer