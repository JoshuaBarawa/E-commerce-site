

import React from 'react'
import Input from './Input'
import {Link} from "react-router-dom"
import StyledForm from "./styled/Form"

function Login() {
    return (
    <StyledForm>
  <h1>Account Login</h1>
  <p>Enter email and password to login</p>
<form>
 <Input type="email" id="email" placeholder="email"/>
 <Input type="password" id="password" placeholder="password"/>

 <button id="l-btn">Login</button>
</form>
<span>Don't have an account? </span><Link to="/signup" id="signup">Sign Up</Link>
</StyledForm>
    )
}

export default Login
