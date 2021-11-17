
import React from 'react'
import axios from 'axios'

import StyledProduct from './styled/Product'
import Card from './Card'

 class Products extends React.Component{

    state = {
        products:[]
    }

    componentDidMount(){
         axios.get("https://fakestoreapi.com/products")
                          .then((response) => {
                            const products = response.data;
                            {this.setState({products})}
                            console.log(products)    
                })                                    
              }


     render(){
   return ( 
       
<StyledProduct>
      {this.state.products.map((product) =><Card key={product.id} id={product.id} item={product} />)}
</StyledProduct>

)
}    
}
 
export default Products;