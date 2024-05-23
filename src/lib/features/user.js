import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import API from "@/config/config";

// Define initial state
const initialState = {
    data: null,
    token: null,
    isLoading: false,
    error: null,
    // success:false
};

// Async thunk for login
export const loginUser = createAsyncThunk('/login', async ({ email, password }, { rejectWithValue }) => {
    try {
        const response = await API.post('/auth/login', { email, password });
        return response.data;
    } catch (error) {
        return rejectWithValue(error.response.data.message);
    }
});

// Async thunk for logout
export const logoutUser = createAsyncThunk('user/logout', async (_, { rejectWithValue }) => {
    try {
        const response = await API.post('/auth/logout');
        return response.data
    } catch (error) {
        return rejectWithValue(error.response.data);
    }
});

// Create the user slice
const userSlice = createSlice({
    name: 'user',
    initialState,
    reducers: {
        setUser: (state, action) => {
            state.data = action.payload.user;
            state.token = action.payload.token;
        },
        clearUser: (state) => {
            state.data = null;
            state.token = null;
        },
    },
    extraReducers: (builder) => {
        builder
            .addCase(loginUser.pending, (state) => {
                state.isLoading = true;
                state.error = null;
            })
            .addCase(loginUser.fulfilled, (state, action) => {
                state.isLoading = false;
                state.data = action.payload.user;
                state.token = action.payload.token;
            })
            .addCase(loginUser.rejected, (state, action) => {
                state.isLoading = false;
                state.error = action.payload.message;
            })
            .addCase(logoutUser.pending, (state) => {
                state.isLoading = true;
                state.error = null;
            })
            .addCase(logoutUser.fulfilled, (state) => {
                state.isLoading = false;
                state.data = null;
                state.token = null;
            })
            .addCase(logoutUser.rejected, (state, action) => {
                state.isLoading = false;
                state.error = action.payload.message;
            });
    },
});

// Export actions and reducer
export const { setUser, clearUser } = userSlice.actions;
export default userSlice.reducer;
