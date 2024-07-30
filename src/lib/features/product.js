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
            queryParams.push(`category=${category}`);
        }
 
        // Construct the URL with query parameters if any
        const fullUrl = queryParams.length > 0 ? `${url}&${queryParams.join('&')}` : url;
        // console.log(fullUrl);
        const response = await API.get(fullUrl)
        return response.data;
    } catch (error) {
        console.log(error);
    }
})

export const addProduct = createAsyncThunk('addProduct', async (product)=>{
    try {
        const response = await API.post(`product/`,product)
        return response.data;
    } catch (error) {
        console.log(error);
    }
})

export const deleteProduct = createAsyncThunk('deleteProduct', async (id)=>{
    try {
        const response = await API.delete(`product/${id}`)
        return response.data;
    } catch (error) {
        console.log(error);
    }
})

export const updateProduct = createAsyncThunk(
    'product/update',
    async ({ id, formData }, { rejectWithValue }) => {
        try {
            const response = await API.put(`/product/${id}`, formData);
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

export const fetchSingleProduct = createAsyncThunk('fetchSingleProduct',async (id)=>{
    try {
        const response = await API.get(`product/${id}`)
        return response.data;
    } catch (error) {
        console.log(error);
    }
})

export const fetchTopRatedProduct = createAsyncThunk('fetchTopRatedProduct',async ()=>{
    try {
        const response = await API.get(`product/top-rated`)
        return response.data;
    } catch (error) {
        console.log(error);
    }
})

// Async thunk for searching products by name
export const searchProducts = createAsyncThunk('searchProductsByName', async (name, thunkAPI) => {
    try {
        const response = await API.get(`/product/search?name=${name}`);
        return response.data;
    } catch (error) {
        return thunkAPI.rejectWithValue({ message: error.response?.data?.message || error.message });
    }
});

const initialState={
    data: [],
    topRated: [],
    searchData: [],
    singleProductData :{},
    searchLoading:false,
    isLoading:true,
    error: null,
    searchError: null,
    status: "idle",
    totalPages: 1,
    totalProducts: 0
}

const productSlice = createSlice({
    name:'product',
    initialState: initialState,
    reducers: {
        setSearchLoading: (state, action) => {
            state.searchLoading = action.payload;
          },
        setSearchData: (state, action) => {
            state.searchData = [];
          },
        setSearchError: (state, action) => {
            state.searchError = action.payload;
          },
        incrementQuantity: (state, action) => {
            const quantity = action.payload.quantity || 1; // Default to 1 if no quantity provided
            if (state.singleProductData.quantity) {
                state.singleProductData.quantity += quantity;
            }
        },
        decrementQuantity: (state, action) => {
            const quantity = action.payload.quantity || 1; // Default to 1 if no quantity provided
            if (state.singleProductData.quantity >= quantity) {
                state.singleProductData.quantity -= quantity;
            } else {
                state.singleProductData.quantity = 0; // Ensure quantity doesn't go below 0
            }
        }
    },
    extraReducers: (builder)=>{
        builder.addCase(addProduct.pending,(state,action)=>{
            state.isLoading= true
        });
        builder.addCase(addProduct.fulfilled,(state,action)=>{
            state.isLoading= false
        });
        builder.addCase(addProduct.rejected,(state,action)=>{
            state.isLoading= false,
            state.error= true
        });
        builder.addCase(deleteProduct.pending,(state,action)=>{
            state.isLoading= true
        });
        builder.addCase(deleteProduct.fulfilled,(state,action)=>{
            state.isLoading= false
        });
        builder.addCase(deleteProduct.rejected,(state,action)=>{
            state.isLoading= false,
            state.error= action.payload.message
        });
        builder.addCase(updateProduct.pending,(state,action)=>{
            state.isLoading= true
        });
        builder.addCase(updateProduct.fulfilled,(state,action)=>{
            state.isLoading= false
        });
        builder.addCase(updateProduct.rejected,(state,action)=>{
            state.isLoading= false,
            state.error= action.payload.message
        });
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
        builder.addCase(fetchTopRatedProduct.pending,(state,action)=>{
            state.isLoading= true
        });
        builder.addCase(fetchTopRatedProduct.fulfilled,(state,action)=>{
            state.isLoading= false,
            state.topRated = action.payload
        });
        builder.addCase(fetchTopRatedProduct.rejected,(state,action)=>{
            state.isLoading= false,
            state.error= true
        });
        builder.addCase(searchProducts.pending, (state) => {
            state.searchLoading = true;
            state.error = false;
            state.searchError = false
        })
        .addCase(searchProducts.fulfilled, (state, action) => {
            state.searchLoading = false;
            state.searchData = action.payload.data;
            state.searchError = false
        })
        .addCase(searchProducts.rejected, (state, action) => {
            state.searchData = [];
            state.searchLoading = false;
            state.searchError = true,
            state.error = action.payload?.message || 'An error occurred';
        });
    }
})

export const { incrementQuantity, decrementQuantity,setSearchLoading,setSearchData,setSearchError  } = productSlice.actions;
export default productSlice.reducer