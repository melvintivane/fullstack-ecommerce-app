import React, { useState } from 'react';
import "./Register.scss"
import { Link } from "react-router-dom";
import { publicRequest } from '../../requestMethods';

const Register = () => {
    const [name, setName] = useState("");
    const [lastname, setLastname] = useState("");
    const [username, setUsername] = useState("");
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");

    const register = async (e) => {
        e.preventDefault();
        try {
            const response = await publicRequest.post("/auth/register", {
                name,
                lastname,
                username,
                email,
                password
            });
            console.log(response.data); // Exibe a resposta do servidor no console
            // Lógica adicional após o registro ser bem-sucedido
            window.location.href = "http://localhost:5173/login";
        } catch (error) {
            console.log(error);
        }
    } 

    return (
        <div className='container'>
            <div className='wrapper'>
                <h1>CREATE AN ACCOUNT</h1>
                <form>
                    <input name='name' placeholder="name" onChange={ (event)=>setName(event.target.value) } />
                    <input name='lastname' placeholder="last name" onChange={ (event)=>setLastname(event.target.value) } />
                    <input name='username' placeholder="username" onChange={ (event)=>setUsername(event.target.value) } />
                    <input name='email' placeholder="email" onChange={ (event)=>setEmail(event.target.value) } />
                    <input name='password' placeholder="password" onChange={ (event)=>setPassword(event.target.value) } />
                    <input placeholder="confirm password" />
                    <span>
                        By creating an account, I consent to the processing of my personal
                        data in accordance with the <b>PRIVACY POLICY</b>
                    </span>
                    <Link className="link" to="/login">
                        ALREADY HAS ACCOUNT? LOGIN
                    </Link>
                    <button onClick={register}>CREATE</button>
                </form>
            </div>
        </div>
    );
  };

export default Register;