import React, { useState , useRef, createContext } from "react";
import "./Loginpage.css";
import { Link } from "react-router-dom";
import {useNavigate } from 'react-router-dom';

import FormInput from "./FormInput";

export default function Loginpage() {
  
  const emailRef = useRef();
  const passwordRef = useRef();

  const [data , setData] = useState();
  const [loggedin , setLoggedin] = useState(false)
 
  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoggedin(true);
    const newData = { email: emailRef.current.value, 
    password: passwordRef.current.value };
    await setData(newData);
    await login();
    navigate("/")
  };
 
  const login = async () => {
   console.log("11",data);
   const res= await fetch(`http://127.0.0.1:8000/login/`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(data),
  
  })
  const d=await res.json();
  localStorage.setItem("name", d);
}
const navigate=useNavigate()

  return (
    <div className="app">
      <form onSubmit={handleSubmit}>
        <h1 className="mt-3">Sign In</h1>
        <FormInput
          name="Email"
          placeholder="Email"
          refer={emailRef}
          type="text"
         
        />
        <FormInput
          name="password"
          placeholder="Password"
          refer={passwordRef}
          type="password"
         
        />
        <button type="submit" onClick={handleSubmit}>
          Login
        </button>
        <div className="registers mb-4">Don't have an account? <Link to="/signup">Register</Link> </div>
        
      </form>
      
    </div>
  );
}

