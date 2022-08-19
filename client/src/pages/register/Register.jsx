import React from "react";
import './register.css';
import axios from "axios";
import { useRef } from "react";
import { useNavigate, Link } from "react-router-dom";
export default function Register() {
    const email = useRef();
    const username = useRef();
    const password = useRef();
    const navigate = useNavigate();
    const handleSubmit=async(event)=>{
        event.preventDefault();
        try {
            await axios.post("/auth/register", {username:username.current.value,email:email.current.value, password: password.current.value })
            navigate('../login')
        } catch (err) {
            console.log(err);
        }
    }
    return (
        <div className="regPage">
            <div className="regWrapper">
                <form className="regBox" onSubmit={handleSubmit} >
                    <h1 className="regHead">Classroom</h1>
                    <input placeholder='Username' ref={username} className="regInput" required />
                    <input placeholder='Email' type='email' ref={email} className="regInput" required />
                    <input placeholder='Password' type='password' ref={password} className="regInput" required />
                    <button className="Submitbutton">Submit</button>
                    <button className="loginButton" type="submit"><Link className="link" to="/login">Login</Link></button>
                </form>
            </div>
        </div>
    )
}