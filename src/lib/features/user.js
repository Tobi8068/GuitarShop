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
export const fetchSingleUserData = createAsyncThunk('user/:id', async (id, { rejectWithValue }) => {
    try {
        const response = await API.get(`/user/${id}`);
        return response.data;
    } catch (error) {
        if (error.response && error.response.data) {
            return rejectWithValue(error.response.data.message);
        }
        return rejectWithValue(error.message);
    }
});

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

// Async thunk for edit user
export const updateUser = createAsyncThunk(
    'user/update',
    async ({ id, formData }, { rejectWithValue }) => {
        try {
            const response = await API.put(`/user/${id}`, formData);
            return response.data;
        } catch (error) {
            return rejectWithValue(error.response.data);
        }
    }
);

// Async thunk to change password 
export const changePassword = createAsyncThunk(
    'user/changePassword',
    async ({ id, formData }, { rejectWithValue }) => {
        try {
            const response = await API.put(`/user/password/${id}`, formData);
            return response.data;
        } catch (error) {
            return rejectWithValue(error.response.data);
        }
    }
);

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
        updateData: (state,action)=>{
            state.data = {...state.data,...action.payload};
        }
    },
    extraReducers: (builder) => {
        builder
            .addCase(fetchSingleUserData.pending, (state) => {
                state.isLoading = true;
                state.error = null;
            })
            .addCase(fetchSingleUserData.fulfilled, (state,action) => {
                state.isLoading = false;
                state.data = action.payload.user;
            })
            .addCase(fetchSingleUserData.rejected, (state, action) => {
                state.isLoading = false;
                state.error = action.payload.message;
            })
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
            .addCase(updateUser.pending, (state) => {
                state.isLoading = true;
                state.error = null;
            })
            .addCase(updateUser.fulfilled, (state, action) => {
                state.isLoading = false;
                // state.user = action.payload;
                state.error = null;
            })
            .addCase(updateUser.rejected, (state, action) => {
                state.isLoading = false;
                state.error = action.payload;
            })
            .addCase(changePassword.pending, (state) => {
                state.isLoading = true;
                state.error = null;
            })
            .addCase(changePassword.fulfilled, (state, action) => {
                state.isLoading = false;
                // state.user = action.payload;
                state.error = null;
            })
            .addCase(changePassword.rejected, (state, action) => {
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
export const { setUser, clearUser,updateData } = userSlice.actions;
export default userSlice.reducer;
