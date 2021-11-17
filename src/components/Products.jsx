
import React from 'react'
import axios from 'axios'
import {Link} from 'react-router-dom'

import StyledProduct from './styled/Product'
import Card from './Card'

 class Products extends React.Component{

    state = {
        products:[],
        categories:[]
    }

    async componentDidMount(){
      Promise.all([

        axios.get("https://fakestoreapi.com/products")
        .then((response) => {
          const products = response.data;
          {this.setState({products})}
          console.log(products)    
}),  

axios.get("https://fakestoreapi.com/products/categories")
.then((response) => {
const categories = response.data;
this.setState({categories})
})  


      ])
        
              }

  
     render(){
   return ( 
       
<StyledProduct>

<ul id="category">
      <li><Link id="c-link" to="#" >All</Link></li>
      {this.state.categories.map((category, id) => <li key={id}><Link id="c-link" to="#" >{category}</Link></li>)}
</ul>

        <div id="products">
      {this.state.products.map((product) =><Card key={product.id} id={product.id} item={product} />)}
      </div>
</StyledProduct>

)
}    
}
 
export default Products;