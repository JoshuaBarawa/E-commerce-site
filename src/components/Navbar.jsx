
import React from  'react'
import {NavLink} from 'react-router-dom'
import StyledNavbar from './styled/Navbar'


const Navbar = ({orders}) => {
        return <StyledNavbar>
       <NavLink to='/' className="logo" >E-Cart</NavLink>

<ul className="links">
    <li><NavLink className="link" to='/cart'><button type="button" class="btn btn-primary position-relative">
    <img className="image" src='./images/shopping_cart.png' alt=""/>
  Cart
  <span class="position-absolute top-0 start-100 translate-middle badge rounded-pill bg-danger">
    {orders}
  </span>
</button></NavLink></li>
    <li><NavLink className="link" to='/login'>Login</NavLink></li>
    <li><NavLink className="link" to='/signup'>Sign Up</NavLink></li>
</ul>

        </StyledNavbar>;
    
}
 
export default Navbar;