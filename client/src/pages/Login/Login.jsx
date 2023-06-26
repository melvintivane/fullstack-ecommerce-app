import React, { useState } from 'react';
import "./Login.scss"
import { useDispatch, useSelector } from 'react-redux';
import { loginFailure, loginStart, loginSuccess } from "../../redux/userReducer";
import { userRequest } from '../../requestMethods';
import { Link } from "react-router-dom";


const Login = () => {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const dispatch = useDispatch();
  const { isFetching, error } = useSelector((state) => state.user);


  const login = async (dispatch, user) => {
    dispatch(loginStart());

    try {
      const res = await userRequest.post("/auth/login", user);
      dispatch(loginSuccess(res.data));

      window.location.href = "http://localhost:5173";
    } catch (err) {
      dispatch(loginFailure());
    }
  }

  const handleClick = (e) => {
    e.preventDefault();
    login(dispatch, { username, password });
  };

    return (
      <div className='container'>
        <div className='wrapper'>
          <h1 className='title'>SIGN IN</h1>
          <form >
            <input placeholder="username" onChange={(e) => setUsername(e.target.value)}/>
            <input placeholder="password" type='password' onChange={(e) => setPassword(e.target.value)}/>
            <button onClick={handleClick} disabled={isFetching} >LOGIN</button>
            {error && <span>Something went wrong...</span>}
            <Link className="link" to="/register">
              CREATE A NEW ACCOUNT
            </Link>
              <a>DO NOT YOU REMEMBER THE PASSWORD?</a>
          </form>
        </div>
      </div>
    );
  };

export default Login;