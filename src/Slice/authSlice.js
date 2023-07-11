import { createAsyncThunk, createSlice } from '@reduxjs/toolkit'
import customerApi from '../Api/customerApi';

const initialState = {
  userInfo: [],
  status: 'loggedOut',
  error: '',
};

export const thunkLogin = createAsyncThunk(
    '/login',
    async (payload, __thunkAPI) => {
        try {
            const result = await customerApi.login({email: payload?.email, password: payload?.password});
            // console.log({result})
            if (result.data) {
                return result.data
            } else {
                return result;
            }
        } catch (e) {
            return __thunkAPI.rejectWithValue(e);
        }
    }
)

export const actions = {};

export const authSlice = createSlice({
  name: 'auth',
  initialState,
  reducers: actions,
  extraReducers: builder => builder
    .addCase(thunkLogin.pending, state => {
        state.status = 'loggingIn';
    })
    .addCase(thunkLogin.rejected, (state, {payload}) => {
        state.status = 'loggedOut';
    })
    .addCase(thunkLogin.fulfilled, (state, {payload}) => {
        console.log(payload);
        if (payload.status !== 'error') {
            state.status = 'loggedIn';
            state.userInfo = payload;
        } else {
            state.error = payload.message.error;
        }
    }),
})

export default authSlice.reducer