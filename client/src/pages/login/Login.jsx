import React, { useRef } from "react";
import './login.css';
import axios from "axios";

import { useNavigate, Link } from "react-router-dom";
import { useState } from "react";
export default function Login() {
    const [loggedIn,setLoggedIn]=useState(false)
    const email=useRef();
    const password=useRef();
    const navigate=useNavigate()
    const handleClick=async(event)=>{
        event.preventDefault();
        try {
            const res=await axios.post("/auth/login", {email:email.current.value, password: password.current.value })
            setLoggedIn(true)
            localStorage.setItem("token",res.data.data.token)
            navigate('/')
            
            console.log(res)
            
        } catch (err) {
            console.log(err);
        }
    }
    const clicked= async(event)=>{
        event.preventDefault();
        console.log("clicked");
        try {
            await axios.get("/auth/homeStudent",{headers:{
                "authorization":`Bearer ${localStorage.getItem("token")}`
            }})
            
        } catch (err) {
            console.log(err);
        }
    }
    return (
        <div className="loginPage">
            <div className="loginWrapper">
                <form className="loginBox" onSubmit={handleClick}>
                    <h1 className="loginHead">Classroom</h1>
                    <input placeholder='Email' type='email' className="loginInput" ref={email} required />
                    <input placeholder='Password' type='password' className="loginInput" ref={password} required/>
                    <button className="loginButton" type="submit">Log In</button>
                    <button className="loginSignUpbutton"><Link className="link" to="/register">Register</Link></button>
                    {/* {loggedIn&&<button onClick={clicked}>Check Auth</button>} */}
                </form>
            </div>
        </div>
    )
}