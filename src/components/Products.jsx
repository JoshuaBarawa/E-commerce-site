
import React from 'react'
import axios from 'axios'
import StyledProduct from './styled/Product'
import Card from './Card'

 class Products extends React.Component{

    state = {
        products:[],
        categories:[],
        cart: []
    }

    async componentDidMount(){
      Promise.all([

        axios.get("https://fakestoreapi.com/products")
        .then((response) => {
          {this.setState({products: response.data})}   
}),  

        axios.get("https://fakestoreapi.com/products/categories")
        .then((response) => {
        this.setState({categories:response.data})
        })  
      ])   
     }
    

     render(){

      const addToCart = (item) => {
        this.state.cart = [...this.state.cart, item];
        this.setState(this.state.cart);
        console.log(this.state.cart)
     }
 

      const filterProducts = category =>{
        axios.get("https://fakestoreapi.com/products/category/" + category.target.value)
        .then((response) => {
          {this.setState({products:response.data})}  
          })};


      const allProducts = () =>{
        axios.get("https://fakestoreapi.com/products")
        .then((response) => {
          {this.setState({products:response.data})}  
      })};
      
    

   return ( 
       
<StyledProduct>

<ul id="category">
<li><h6>Categories</h6></li>
      <li><button id="c-btn" onClick={allProducts} value="All">All</button></li>
      {this.state.categories.map((category, id) => <li key={id}><button id="c-btn" value={category} onClick={filterProducts}>{category}</button></li>)}
</ul>

        <div id="products">
      {this.state.products.map((product) =><Card key={product.id} id={product.id} item={product} addToCart={() => addToCart(product)}/>)}
      </div>
</StyledProduct>

)
}    
}
 
export default Products;