
import React from 'react'
import StyledProduct from './styled/Product'
import Card from './Card'


 function Products({products, categories, handleFilter}){

   return ( 
 <div>   
<StyledProduct>

<ul id="category">

      <li><button id="c-btn" onClick={handleFilter} value="All">All</button></li>
      {categories.map((category, id) => <li key={id}><button id="c-btn" value={category} onClick={handleFilter}>{category}</button></li>)}
</ul>

        <div id="products">
      {products.map((product) =><Card key={product.id} id={product.id} item={product}/>)}
      </div>
</StyledProduct>
</div>
)
}    

 
export default Products;