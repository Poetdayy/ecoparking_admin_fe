import { combineReducers, configureStore } from '@reduxjs/toolkit'
import authSlice from '../Slice/authSlice'
import persistReducer from 'redux-persist/es/persistReducer'
import rootReducers from './reducer'
import { FLUSH, PAUSE, PERSIST, PURGE, REGISTER } from 'redux-persist'
import authReducer from '../Slice/authSlice';

export const store = configureStore({
  reducer: {
    auth: authReducer,
  }
})
