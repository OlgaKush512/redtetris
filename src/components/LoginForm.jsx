import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { openForm } from './loginFormSlice';

import './LoginForm.css';

const LoginForm = () => {
  const dispatch = useDispatch();
  const loginForm = useSelector((state) => state.loginForm.isOpen);
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
            <input className="input" type="submit" value="Submit" />
            {/* <p>
              Do you have already an account?{' '}
              <span onClick={null}>Click here</span>
            </p> */}
          </form>
        </div>
      ) : (
        <></>
      )}
    </>
  );
};

export default LoginForm;
