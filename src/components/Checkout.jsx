
import React from 'react'

import {StyledCheckout} from './styled/CheckoutPage'
import {Link} from 'react-router-dom'

const Checkout = ({amount}) =>{
    return (
        <StyledCheckout>
        <div class="wrapper">

        <div class="container">
            <form action="/checkout_done" method="get">
                <h1> Shipping Details</h1><span>(Delivery Within Nairobi Only)</span>

                <h1> Payment Information </h1>

                 <h1>Total Amount:${amount.toFixed(2)}</h1>
                <div class="cc-num">
                    <label for="card-num">Mobile No</label>
                    <input type="number" name="card-num" required="sdsd"/>
                </div>

                <div class="location">
                    <label for="location">Delivary Location</label><span>(Delivery takes 2days max)</span>
                    <input type="text" name="loca" required="sdsd"/>
                </div>

                <div className="btns">
                <Link id="link" to="/cart">Back to cart</Link>
                <input id="checkout" type="submit" to="/checkout_done" value="Confirm and Pay"/>
                </div>

            </form>
        </div>
    </div>

    </StyledCheckout>
    )
}

export default Checkout
