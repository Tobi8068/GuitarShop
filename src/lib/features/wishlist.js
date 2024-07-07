import API from "@/config/config";
import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";

// Define initial state
const initialState = {
    items: [],
    isLoading: true,
    error: null,
};

// Async thunk for adding to wishlist
export const addToWishlist = createAsyncThunk('wishlist/addToWishlist', async (wishListData, { rejectWithValue }) => {
    try {
        const response = await API.post('/wishlist', wishListData);
        console.log(response.data);
        return response.data;
    } catch (error) {
        return rejectWithValue(error.response.data.message);
    }
});

// Async thunk for removing from wishlist
export const removeFromWishlist = createAsyncThunk('wishlist/removeFromWishlist', async (wishListData, { rejectWithValue }) => {
    try {
        const response = await API.delete('/wishlist', { data: wishListData });
        return response.data;
    } catch (error) {
        return rejectWithValue(error.response.data.message);
    }
});

// Async thunk for fetching wishlist items
export const fetchWishlistItems = createAsyncThunk('wishlist/fetchWishlistItems', async (userId, { rejectWithValue }) => {
    try {
        const response = await API.get(`/wishlist/${userId}`);
        // console.log(response.data);
        return response.data;
    } catch (error) {
        return rejectWithValue(error.response.data.message);
    }
});

// Create the cart slice
const wishList = createSlice({
    name: 'cart',
    initialState,
    reducers: {
        clearCart: (state) => {
            state.items = [];
        },
    },
    extraReducers: (builder) => {
        builder
            .addCase(addToWishlist.pending, (state) => {
                state.isLoading = true;
                state.error = null;
            })
            .addCase(addToWishlist.fulfilled, (state, action) => {
                state.isLoading = false;
                state.error=null
            })
            .addCase(addToWishlist.rejected, (state, action) => {
                state.isLoading = false;
                state.error = action.payload;
            })
            .addCase(removeFromWishlist.pending, (state) => {
                state.error = null;
            })
            .addCase(removeFromWishlist.fulfilled, (state, action) => {
                state.isLoading = false;
                state.items = state.items.filter(item => item.product_id._id !== action.payload.product_id);
            })
            .addCase(removeFromWishlist.rejected, (state, action) => {
                state.isLoading = false;
                state.error = action.payload.message;
            })
            .addCase(fetchWishlistItems.pending, (state) => {
                state.isLoading = true;
                state.error = null;
            })
            .addCase(fetchWishlistItems.fulfilled, (state, action) => {
                state.isLoading = false;
                state.items = action.payload.data;
                // console.log(action.payload.data);
            })
            .addCase(fetchWishlistItems.rejected, (state, action) => {
                state.isLoading = false;
                state.error = action.payload.message;
            });
    },
});

// Export actions and reducer
export default wishList.reducer;
