import { configureStore } from '@reduxjs/toolkit';
import loginFormReducer from '../components/loginFormSlice';
// import inputReducer from '../components/inputSlice';

export const store = configureStore({
  reducer: {
    loginForm: loginFormReducer,
    // inputLoginForm: inputLoginFormReducer,
  },
});
