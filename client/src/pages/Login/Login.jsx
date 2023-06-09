import React from 'react'
import "./Login.scss"


const Login = () => {
    return (
      <div className='container'>
        <div className='wrapper'>
          <h1 className='title'>SIGN IN</h1>
          <form >
            <input placeholder="username" />
            <input placeholder="password" />
            <button>LOGIN</button>
            <a>DO NOT YOU REMEMBER THE PASSWORD?</a>
            <a>CREATE A NEW ACCOUNT</a>
          </form>
        </div>
      </div>
    );
  };

export default Login;