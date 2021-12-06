
import { StyledCart } from "./styled/Cart"

function Cart({cartItems}) {
  
  if(  sessionStorage.getItem("orders") != null){
    cartItems = JSON.parse(sessionStorage.getItem("orders"))
  }

    return ( 
        
        <StyledCart>

        { cartItems.length === 0 ? <p>Cart is empty</p> : <p>Items in cart:{cartItems.length}{cartItems.map(item => {
            return(
            <div className="cart">
            <img src={item.image} alt="" />
            <p>{item.title}</p>
            <button id="minus">-</button><span id="value">0</span><button id="plus">+</button>   
            <p>{item.price}</p>
            </div>
           
            )})} </p>}


          <div className="order-form">
              <p>Hello World!</p>
          </div>

       </StyledCart>
     );
}

export default Cart;