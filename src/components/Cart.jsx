
import { StyledCart } from "./styled/Cart"

function Cart({cartItems, total}) {
  
  if(  sessionStorage.getItem("orders") != null){
    cartItems = JSON.parse(sessionStorage.getItem("orders"))
  }


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
            <button id="remove"><img src='./images/close_black_24dp.png' alt=""/></button>
            <p id="price">${item.product.price * item.quantity}</p>
            </div>
            </div>


           
            )})} 
            <div className="order-form">
            <p>SubTotal: {total}</p>
            <p>VAT: Not Included</p>
            <p>Total: {total}</p>

            <a href="#">Proceed To Checkout</a>
            </div>
            
            
            
            </p>}


         

       </StyledCart>
     );
}

export default Cart;