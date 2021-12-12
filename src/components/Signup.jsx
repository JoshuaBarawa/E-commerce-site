
import React from 'react'
import Input from './Input'
import StyledForm from "./styled/Form"
import {Link} from "react-router-dom"

function Signup() {
    return (
        <StyledForm>
        <h1>Create Account</h1>
        <p>Enter the credentials for your account</p>
      <form>
      <Input type="text" id="username" placeholder="username"/>
       <Input type="email" id="email" placeholder="email"/>
       <Input type="password" id="password" placeholder="password"/>
      
       <button id="l-btn">Sign Up</button>
      </form>
      <span>Already a member? </span><Link to="/login" id="login">Login</Link>
      </StyledForm>
    )
}

export default Signup
