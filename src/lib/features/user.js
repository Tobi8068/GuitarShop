// userSlice.js

import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import API from "@/config/config";

// Define initial state
const initialState = {
    data: null,
    token: null,
    isLoading: false,
    error: null,
};

// Async thunk for register
export const registerUser = createAsyncThunk('auth/register', async (userData, { rejectWithValue }) => {
    try {
        const response = await API.post('/auth/register', userData);
        return response.data;
    } catch (error) {
        if (error.response && error.response.data) {
            return rejectWithValue(error.response.data.message);
        }
        return rejectWithValue(error.message);
    }
});

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
        return response.data;
    } catch (error) {
        return rejectWithValue(error.response.data);
    }
});

// Async thunk for auth
export const checkAuth = createAsyncThunk('user/checkAuth', async (_, { rejectWithValue }) => {
    try {
        const response = await API.get('/auth/user');
        // console.log(response.data);
        return response.data;
        
    } catch (error) {
        if (error.response && error.response.status === 401) {
            return rejectWithValue('unauthorized');
        }
        return rejectWithValue('An error occurred');
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
            .addCase(registerUser.pending, (state) => {
                state.isLoading = true;
                state.error = null;
            })
            .addCase(registerUser.fulfilled, (state) => {
                state.isLoading = false;
            })
            .addCase(registerUser.rejected, (state, action) => {
                state.isLoading = false;
                state.error = action.payload.message;
            })
            .addCase(loginUser.pending, (state) => {
                state.isLoading = true;
                state.error = null;
            })
            .addCase(loginUser.fulfilled, (state, action) => {
                state.isLoading = false;
                // state.data = action.payload.user;
                state.token = action.payload.token;
            })
            .addCase(loginUser.rejected, (state, action) => {
                state.isLoading = false;
                state.error = action.payload;
            })
            .addCase(logoutUser.pending, (state) => {
                state.isLoading = true;
                state.error = null;
                // console.log('pend');
            })
            .addCase(logoutUser.fulfilled, (state,action) => {
                state.isLoading = false;
                state.data = null;
                state.token = null;
                // console.log('done');
               
            })
            .addCase(logoutUser.rejected, (state, action) => {
                state.isLoading = false;
                state.error = action.payload;
                // console.log('no');
            })
            .addCase(checkAuth.pending, (state) => {
                state.isLoading = true;
                state.error = null;
            })
            .addCase(checkAuth.fulfilled, (state, action) => {
                state.isLoading = false;
                state.data = action.payload.user;
            })
            .addCase(checkAuth.rejected, (state, action) => {
                state.isLoading = false;
                state.error = action.payload;
                state.data = null; // Clear the user data on unauthorized
            });
    },
});

// Export actions and reducer
export const { setUser, clearUser } = userSlice.actions;
export default userSlice.reducer;
