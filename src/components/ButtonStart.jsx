import React, { useState } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { openForm } from './loginFormSlice';
import './ButtonStart.css';

const ButtonStart = () => {
  const dispatch = useDispatch();
  const loginForm = useSelector((state) => state.loginForm.isOpen);
  console.log(loginForm)

  return (
    <>
      {loginForm === false ? (
        <button
          className="button-start"
          onClick={() => dispatch(openForm(true))}
        >
          Let's start
        </button>
      ) : (
        <></>
      )}{' '}
    </>
  );
};

export default ButtonStart;
