
import StyledCard from './styled/Card'

const Card = ({id, item}) => {
    return ( 

  <StyledCard>
   <img id="img " src={item.image} alt="" />
   
   <div className="item">
       <p id="title">{item.title}</p>
       <p id="price">Price: ${item.price}</p>
   </div>

   <button id="btn">Add to cart</button>

  </StyledCard>
     
     );
}

export default Card;