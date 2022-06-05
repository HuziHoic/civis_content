import React, { useState , useRef } from "react";
import "./Registerpage.css";
import { Link,useNavigate } from "react-router-dom";

import FormInput from "./FormInput";

function Registerpage() {
  const navigate=useNavigate()
  const usernameRef = useRef();
  const emailRef = useRef();
  const confirmPasswordRef = useRef();
  const passwordRef = useRef();
  const ageRef = useRef();
  const [data,setData]=useState();
  const handleSubmit = async(e) => {
    e.preventDefault();
    const newData = {name:usernameRef.current.value , 
                    email:emailRef.current.value ,
                    age : ageRef.current.value,
                    password1:passwordRef.current.value,
                    password2:confirmPasswordRef.current.value 
                  };
    setData(newData);
    signup();
    
  };

  const signup = async () => {
    // console.log("11",data);
    const res=await fetch(`http://127.0.0.1:8000/sign_up/`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(data),
    });
    navigate("/")
    
  };
  
  return (
    <div className="app">
      <form onSubmit={handleSubmit}>
        <h1 className="mt-3">Register</h1>
        <FormInput
          name="username"
          placeholder="Username"
          refer={usernameRef}
          type="text"
         
        />
        <FormInput
          name="email"
          placeholder="Email"
          refer={emailRef}
          type="email"
         
        />

<FormInput
          name="age"
          placeholder="age"
          refer={ageRef}
          type="text"
         
        />
        <FormInput
          name="password"
          placeholder="Password"
          refer={passwordRef}
          type="password"
         
        />
        <FormInput
          name="confirm password"
          placeholder="Confirm Password"
          refer={confirmPasswordRef}
          type="password"
         
        />
        <button>Register</button>
        <div className="registers mb-4">Already have an account? <Link to="/login">Login</Link> </div>
      </form>
    </div>
  );
}

export default Registerpage;

