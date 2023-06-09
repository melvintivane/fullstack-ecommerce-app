import React from 'react';
import "./Register.scss"

const Register = () => {
    return (
        <div className='container'>
            <div className='wrapper'>
                <h1>CREATE AN ACCOUNT</h1>
                <form>
                    <input placeholder="name" />
                    <input placeholder="last name" />
                    <input placeholder="username" />
                    <input placeholder="email" />
                    <input placeholder="password" />
                    <input placeholder="confirm password" />
                    <span>
                        By creating an account, I consent to the processing of my personal
                        data in accordance with the <b>PRIVACY POLICY</b>
                    </span>
                    <button>CREATE</button>
                </form>
            </div>
        </div>
    );
  };

export default Register;