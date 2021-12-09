
import React from 'react'

import {StyledCheckout} from './styled/CheckoutPage'
import {Link} from 'react-router-dom'

const Checkout = () =>{
    return (
        <StyledCheckout>
        <div class="wrapper">

        <div class="container">
            <form action="">
                <h1> Shipping Details</h1>
                   
                <div class="name">
                    <div>
                        <label for="f-name">First</label>
                        <input type="text" name="f-name"/>
                    </div>

                    <div>
                        <label for="l-name">Last</label>
                        <input type="text" name="l-name"/>
                    </div>
                </div>

                <div>
                    <label for="email">Email</label>
                    <input type="email" name="email"/>
                    </div>

                 <div className="place">
                  <div>
                    <label for="city">City</label>
                    <input type="text" name="city"/>
                    </div>

                <div class="street">
                    <label for="name">Street</label>
                    <input type="text" name="address"/>
                </div>
                </div>

                <h1> Payment Information </h1>
                  
            
                <div class="cc-num">
                    <label for="card-num">Mobile No.</label>
                    <input type="text" name="card-num" />
                </div>

                <div className="btns">
                <Link id="link" to="/cart">Back to cart</Link>
                <button>Confirm and Pay</button>
                   
                </div>

            </form>
        </div>
    </div>

    </StyledCheckout>
    )
}

export default Checkout
