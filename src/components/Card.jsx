
import StyledCard from './styled/Card'



const Card = ({id, item, addToCart}) => {
    
    return ( 

  <StyledCard>
   <img id="img " src={item.image} alt="" />
   
   <div className="item">
       <p id="title">{item.title}</p>
       <p id="price">Price: ${item.price}</p>
   </div>

   <button id="btn" onClick={addToCart}>Add to cart</button>

  </StyledCard>
     
     );
}

export default Card;