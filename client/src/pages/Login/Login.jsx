import React, { useEffect, useState } from 'react';
import "./Login.scss"
import { useDispatch, useSelector } from 'react-redux';
import { loginFailure, loginStart, loginSuccess } from "../../redux/userReducer";
import { publicRequest } from '../../requestMethods';
import { Link } from "react-router-dom";


const Login = () => {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const dispatch = useDispatch();
  const { isFetching, error } = useSelector((state) => state.usuario);

  //TEMPORARY SOLUTION
  useEffect(() => {
    dispatch(loginSuccess()); // Redefine o estado do error ao montar o componente
  }, [dispatch]);

  const login = async (dispatch, usuario) => {
    dispatch(loginStart());

    try {
      const res = await publicRequest.post("/auth/login", usuario);
      dispatch(loginSuccess(res.data));

      //window.location.href = "http://localhost:5173";
    } catch (err) {
      dispatch(loginFailure());
    }
  }

  const handleClick = (event) => {
    event.preventDefault();

    login(dispatch, { username, password });
  };

    return (
      <div className='container'>
        <div className='wrapper'>
          <h1 className='title'>SIGN IN</h1>
          <form >
            <input name='username' placeholder="username" onChange={(e) => setUsername(e.target.value)}/>
            <input name='password' placeholder="password" type='password' onChange={(e) => setPassword(e.target.value)}/>
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