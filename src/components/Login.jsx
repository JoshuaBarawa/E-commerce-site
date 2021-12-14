

import React from 'react'
import {Link} from "react-router-dom"
import StyledForm from "./styled/Form"

function Login({email, password, setEmail, setPassword, handleLogin, emailError, passwordError}) {
    return (
    <StyledForm>
  <h1>Account Login</h1>
  <p>Enter email and password to login</p>
<div>
 <input type="email" autofocus required id="email" value={email} onChange={(e) => setEmail(e.target.value)} placeholder="email" /><br/>
 <span id='error'>{emailError}</span><br/>
 <input type="password" required id="password" value={password} onChange={(e) => setPassword(e.target.value)} placeholder="password" /><br/>
 <span id='error' >{passwordError}</span><br/>
 <button id="l-btn" onClick={handleLogin}>Login</button>
</div>
<span>Don't have an account? </span><Link to="/signup" id="signup">Sign Up</Link>
</StyledForm>
    )
}

export default Login
