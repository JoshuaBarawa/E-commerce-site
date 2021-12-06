
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
        
        <div id="product">
            <img id="item" src={item.image} alt="" />

            <div id="info">
            <p id="title">{item.title}</p>
            <div>
            <button id="minus">-</button><span id="value">0</span><button id="add">+</button>  
            </div>
            </div> 
            </div>

            <div id="action">
            <button id="remove"><img src='./images/close_black_24dp.png' alt=""/></button>
            <p id="price">${item.price}</p>
            </div>
            </div>
           
            )})} </p>}


          <div className="order-form">
              <p>Hello World!</p>
          </div>

       </StyledCart>
     );
}

export default Cart;