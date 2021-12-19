
import React from  'react'
import {NavLink} from 'react-router-dom'
import StyledNavbar from './styled/Navbar'


const Navbar = ({orders, handleLogout, user}) => {
        return <StyledNavbar>
       <NavLink to='/' className="logo"><img id="logo-img" src="./images/logo.png" alt=""/>E-Cart</NavLink>

<ul className="links">
    <li><NavLink className="link" id="order" to='/cart'><img className="image" src='./images/shopping_cart.png' alt=""/>{orders} Items</NavLink></li>
    
{user? <li><NavLink className="link" onClick={handleLogout} to='/logout'>Logout</NavLink></li> : <li><NavLink className="link" to='/login'>Login</NavLink></li>}
    
    
</ul>

        </StyledNavbar>;
    
}
 
export default Navbar;