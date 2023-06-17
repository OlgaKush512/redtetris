import { configureStore } from '@reduxjs/toolkit';
import loginFormReducer from '../components/loginFormSlice';
// import inputReducer from '../components/inputSlice';
import homePageReducer from '../components/homePageSlice';


export const store = configureStore({
  reducer: {
    loginForm: loginFormReducer,
    // inputLoginForm: inputLoginFormReducer,
    homePage: homePageReducer,

  },
});
