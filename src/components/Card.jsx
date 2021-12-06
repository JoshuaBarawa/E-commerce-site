
import StyledCard from './styled/Card'
import {Link} from 'react-router-dom'


const Card = ({id, item}) => {
    
    return ( 

  <StyledCard>
   <img id="img " src={item.image} alt="" />
   
   <div className="item">
       <p id="title">{item.title}</p>
       <p id="price">Price: ${item.price}</p>
   </div>

   <Link id="btn" to={`/product/${id}`}>Buy Now</Link>

  </StyledCard>
     
     );
}

export default Card;