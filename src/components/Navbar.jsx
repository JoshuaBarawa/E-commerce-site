
import React from  'react'
import {NavLink} from 'react-router-dom'
import StyledNavbar from './styled/Navbar'


class Navbar extends React.Component {
    render() { 
        return <StyledNavbar>
       <NavLink to='/' className="logo" >LOGO</NavLink>

<ul className="links">
    <li><NavLink className="link" to='/cart'><img className="image" src='./images/shopping_cart.png' alt=""/>Cart</NavLink></li>
    <li><NavLink className="link" to='/contact'>Contact</NavLink></li>
</ul>

        </StyledNavbar>;
    }
}
 
export default Navbar;