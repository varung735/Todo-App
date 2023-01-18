import React from 'react'
import { useState } from "react";
import { ID } from "appwrite";
import { account } from "../appwrite/appwrite-config";
import { useNavigate } from "react-router-dom";

// The CSS comes from Login.css as i designed the login page first and pasted its code right here and modified it for the sign-up
function SignIn() {
  const navigate = useNavigate();
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  
  const signup = async (event) => {
      event.preventDefault();
      try {
          await account.create(
            ID.unique(),
            email,
            password,
            name
          );
          navigate('/dashboard');
      } catch (error) {
        alert("Sign-up failed")
        console.log(error);
      }
      
      setName("");
      setEmail("");
      setPassword("");
  }

  return (
    <div className='main-container'>

        {/* This div below contains quotes */}
        <div className="quotes-container image-overlay">
            <h1 className="quote">“If you really want to do something, you'll find a way. If you don't, you'll find an excuse.”</h1>
            <p className="quote-said-by">Jim Rohn</p>
        </div>

        {/* This div below contains login-div */}
        <div className="login-container image-overlay">
            <div className="login-div">

                <h1 className="login-div-heading">Sign Up</h1>

                {/* Sign-up form */}
                <form onSubmit={signup} method="post" className='login-form'>

                    <div className="form-input-div">
                        <input type="text" name='name' required className='form-input' value={name} onChange={(event)=>{setName(event.target.value)}}/>
                        <label htmlFor="name">Name</label>
                    </div>
                    
                    <div className="form-input-div">
                        <input type="email" name='email' required className='form-input' value={email} onChange={(event)=>{setEmail(event.target.value)}}/>
                        <label htmlFor="email">Email</label>
                    </div>
                    
                    <div className="form-input-div">
                        <input type="password" name='password' required className='form-input' value={password} onChange={(event)=>{setPassword(event.target.value)}}/>
                        <label htmlFor="password">Password</label>
                    </div>

                    {/* <div className="form-input-div">
                        <input type="password" name='confirm-password' required className='form-input'/>
                        <label htmlFor="confirm-password">Confirm Password</label>
                    </div> */}

                    <button className='form-btn' type='submit'>Create Your Account</button>
                </form>
                                
                <p className="or-text">--- or ---</p>

                {/* O-Auth button div */}
                <div className="OAuth-btns">
                    <button className='OAuth-btn'>Continue with Google</button>
                    <button className='OAuth-btn'>Continue with Apple</button>
                </div>
            </div>
        </div>
    </div>
  )
}

export default SignIn