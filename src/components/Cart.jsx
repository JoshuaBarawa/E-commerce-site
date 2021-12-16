
import { StyledCart } from "./styled/Cart"

function Cart({cartItems,removeItem, total, checkUser}) {
  

    return ( 
        
        <StyledCart>

        { cartItems.length === 0 ? <img src="./images/emptycart.png" alt="empty_cart"/> : <p>{cartItems.map(item => {
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
            <button id="remove" value={item.product.id} onClick={removeItem}><img src='./images/close_black_24dp.png' alt=""/></button>
            <p id="price">${item.product.price * item.quantity}</p>
            </div>
            </div>

            )})} 

            
            <div className="order-form">
            <p><span>SubTotal:</span>{(total).toFixed(2)}</p>
            <p><span>Total:</span> {(total).toFixed(2)}</p>
            <button className="btn-checkout" onClick={checkUser}>Proceed To Checkout</button>
            
            </div>
            
            </p>}


       </StyledCart>
     );
}

export default Cart;