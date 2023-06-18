import { configureStore } from '@reduxjs/toolkit';
import loginFormReducer from '../components/loginFormSlice';
import inputLoginReducer from '../components/inputLoginSlice';
import homePageReducer from '../components/homePageSlice';


export const store = configureStore({
  reducer: {
    loginForm: loginFormReducer,
    inputLogin: inputLoginReducer,
    homePage: homePageReducer,
  },
});
