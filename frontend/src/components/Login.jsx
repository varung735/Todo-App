import React, { useState } from 'react';
import { useNavigate } from "react-router-dom";
import '../styles/Login.css';
import { account, loginUser } from '../appwrite/appwrite-config';

function Login() {
  const navigate = useNavigate();  
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const login = async (event) => {
    event.preventDefault();
    
    try {
        const response = await account.createEmailSession(email, password);
        console.log(response);
        navigate('/dashboard');
    } catch (error) {
        alert("login failed");
        console.log(error);
    }    

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

                <h1 className="login-div-heading">Login</h1>

                {/* Login form */}
                <form onSubmit={login} method="post" className='login-form'>

                    <div className="form-input-div">
                        <input type="email" name='email' required className='form-input' value={email} onChange={(event)=>{setEmail(event.target.value)}}/>
                        <label htmlFor="email">Email</label>
                    </div>

                    <div className="form-input-div">
                        <input type="password" name='password' required className='form-input' value={password} onChange={(event)=>{setPassword(event.target.value)}}/>
                        <label htmlFor="password">Password</label>
                    </div>

                    <button className='form-btn' type='submit'>Submit</button>
                </form>
                
                {/* forget password link */}
                <a href="#" className='forgot-pass'>Forgot Password?</a>
                
                <p className="or-text">--- or ---</p>

                {/* O-Auth button div */}
                 <div className="OAuth-btns">
                     <button className='OAuth-btn'>Google</button>
                     <button className='OAuth-btn'>Apple</button>
                </div>
            </div>
        </div>
    </div>
  )
}

export default Login