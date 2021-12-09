
import { StyledCart } from "./styled/Cart"
import {Link} from 'react-router-dom'

function Cart({cartItems,removeItem, total}) {
  

    return ( 
        
        <StyledCart>

        { cartItems.length === 0 ? <p>Cart is empty</p> : <p>Items in cart:{cartItems.length}{cartItems.map(item => {
            return(
            <div className="cart">
        
        <div id="product">
            <img id="item" src={item.product.image} alt="" />

            <div id="info">
            <p id="title">{item.product.title}</p>
            <div>
            <button id="minus">-</button><span id="value">{item.quantity}</span><button id="add">+</button>  
            </div>
            </div> 
            </div>

            <div id="action">
            <button id="remove" value={item.id} onClick={removeItem}><img src='./images/close_black_24dp.png' alt=""/></button>
            <p id="price">${item.product.price * item.quantity}</p>
            </div>
            </div>

            )})} 

            
            <div className="order-form">
            <p>SubTotal:{total}</p>
            <p>Delivery: Free</p>
            <p>Total: {total}</p>

            <Link className="btn-checkout" to="/checkout">Proceed To Checkout</Link>
            </div>
            
            </p>}


       </StyledCart>
     );
}

export default Cart;