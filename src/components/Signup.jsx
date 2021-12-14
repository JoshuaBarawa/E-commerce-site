
import React from 'react'

import StyledForm from "./styled/Form"
import {Link} from "react-router-dom"

function Signup({email, password, setEmail, setPassword, handleSignUp, emailError, passwordError}) {
    return (
        <StyledForm>
        <h1>Create Account</h1>
        <p>Enter the credentials for your account</p>
      <form>
       <input type="email" required autofoucs id="email" placeholder="email"  onChange={(event) => setEmail(event.target.value)} value={email} /><br/>
       <span>{emailError}</span><br/>
       <input type="password" required id="password" placeholder="password" onChange={(event) => setPassword(event.target.value)} value={password}/><br/>
      <span>{passwordError}</span><br/>
       <button id="l-btn" onClick={handleSignUp}>Sign Up</button>
      </form>
      <span>Already a member? </span><Link to="/login" id="login">Login</Link>
      </StyledForm>
    )
}

export default Signup
