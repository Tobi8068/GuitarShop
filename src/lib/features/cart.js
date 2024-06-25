import API from "@/config/config";
import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";

// Define initial state
const initialState = {
    items: [],
    isLoading: true,
    error: null,
};

// Async thunk for adding to cart
export const addToCart = createAsyncThunk('cart/addToCart', async (cartData, { rejectWithValue }) => {
    try {
        const response = await API.post('/cart', cartData);
        return response.data;
    } catch (error) {
        return rejectWithValue(error.response.data.message);
    }
});

// Async thunk for removing from cart
export const removeFromCart = createAsyncThunk('cart/removeFromCart', async (cartData, { rejectWithValue }) => {
    try {
        const response = await API.delete('/cart', { data: cartData });
        return response.data;
    } catch (error) {
        return rejectWithValue(error.response.data.message);
    }
});

// Async thunk for fetching cart items
export const fetchCartItems = createAsyncThunk('cart/fetchCartItems', async (userId, { rejectWithValue }) => {
    try {
        const response = await API.get(`/cart/${userId}`);
        return response.data;
    } catch (error) {
        return rejectWithValue(error.response.data.message);
    }
});

// Create the cart slice
const cartSlice = createSlice({
    name: 'cart',
    initialState,
    reducers: {
        clearCart: (state) => {
            state.items = [];
        },
    },
    extraReducers: (builder) => {
        builder
            .addCase(addToCart.pending, (state) => {
                state.isLoading = true;
                state.error = null;
            })
            .addCase(addToCart.fulfilled, (state, action) => {
                state.isLoading = false;
                const existingItem = state.items.find(item => item.product_id === action.payload.product_id);
                if (existingItem) {
                    existingItem.quantity += 1;
                } else {
                    state.items.push(action.payload);
                }
            })
            .addCase(addToCart.rejected, (state, action) => {
                state.isLoading = false;
                state.error = action.payload;
            })
            .addCase(removeFromCart.pending, (state) => {
                state.isLoading = true;
                state.error = null;
            })
            .addCase(removeFromCart.fulfilled, (state, action) => {
                state.isLoading = false;
                state.items = state.items.filter(item => item.product_id !== action.payload.product_id);
            })
            .addCase(removeFromCart.rejected, (state, action) => {
                state.isLoading = false;
                state.error = action.payload;
            })
            .addCase(fetchCartItems.pending, (state) => {
                state.isLoading = true;
                state.error = null;
            })
            .addCase(fetchCartItems.fulfilled, (state, action) => {
                state.isLoading = false;
                state.items = action.payload;
            })
            .addCase(fetchCartItems.rejected, (state, action) => {
                state.isLoading = false;
                state.error = action.payload;
            });
    },
});

// Export actions and reducer
export const { clearCart } = cartSlice.actions;
export default cartSlice.reducer;