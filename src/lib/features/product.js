import API from "@/config/config";
import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";

export const fetchProducts = createAsyncThunk('fetchProducts',async ({ url, minPrice, maxPrice ,category})=>{
    try {
         // Initialize an empty array to store query parameters
         const queryParams = [];

         // Check if minPrice is provided and add it to the queryParams array
         if (minPrice && minPrice !== '') {
             queryParams.push(`minPrice=${minPrice}`);
         }
 
         // Check if maxPrice is provided and add it to the queryParams array
         if (maxPrice && maxPrice !== '') {
             queryParams.push(`maxPrice=${maxPrice}`);
         }

        // Check if category is provided and add it to the queryParams array
        if (category && category.length!==0) {
            console.log('cat is here');
            queryParams.push(`category=${category}`);
        }
 
        // Construct the URL with query parameters if any
        const fullUrl = queryParams.length > 0 ? `${url}&${queryParams.join('&')}` : url;
        console.log(fullUrl);
        const response = await API.get(fullUrl)
        return response.data;
    } catch (error) {
        console.log(error);
    }
})

export const fetchSingleProduct = createAsyncThunk('fetchSingleProduct',async (id)=>{
    try {
        const response = await API.get(`product/${id}`)
        return response.data;
    } catch (error) {
        console.log(error);
    }
})

const initialState={
    data: [],
    singleProductData :{},
    isLoading:true,
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
        builder.addCase(fetchSingleProduct.pending,(state,action)=>{
            state.isLoading= true
        });
        builder.addCase(fetchSingleProduct.fulfilled,(state,action)=>{
            state.isLoading= false,
            state.singleProductData = action.payload
        });
        builder.addCase(fetchSingleProduct.rejected,(state,action)=>{
            state.isLoading= false,
            state.error= true
        });
    }
})

export default productSlice.reducer