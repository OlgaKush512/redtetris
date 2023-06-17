import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { openForm } from './loginFormSlice';
import { openHomePage } from './homePageSlice';
import HomePage from './HomePage';

import './LoginForm.css';

const LoginForm = () => {
  const dispatch = useDispatch();
  const loginForm = useSelector((state) => state.loginForm.isOpen);
  const homePage = useSelector((state) => state.homePage.isOpen);
  console.log(`homePage: ${homePage}`);
  return (
    <>
      {loginForm === true ? (
        <div className="div-login">
          <form>
            <label>
              Your login: <input className="input" type="text" name="Login" />
            </label>
            {/* <label>
              E-mail: <input className="input" type="text" name="E-mail" />
            </label> */}
            <button
              className="input"
              type="submit"
              onClick={() => {
                dispatch(openHomePage(true));
                dispatch(openForm(false));
              }}
              value="Submit"
            >
              Submit
            </button>
          </form>
        </div>
      ) : (
        <></>
      )}
      {homePage === true ? <HomePage /> : <></>}
    </>
  );
};

export default LoginForm;
