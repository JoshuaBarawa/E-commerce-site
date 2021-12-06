
import React from 'react'
import StyledProductPage from './styled/ProductPage'
import { useParams } from 'react-router-dom'
import {useState} from 'react'
import axios from 'axios'
import {useEffect} from 'react'

const ProductPage = ({handleAddToCart}) => {

  const { id } = useParams();
  const [product, setProduct] = useState([]);

  useEffect(() => {
    const getProduct = async () =>{
      await axios.get("https://fakestoreapi.com/products/" + id)
      .then(response => {
        setProduct(response.data);
    });
    }

    getProduct()
  
  })

return ( 

<StyledProductPage>

  <img id="featured" src={product.image} alt="" />

<div id="description">
    <span>{product.category}</span>
    <h3>{product.title}</h3>
    <p id="desc">{product.description} </p>
    <p id="price">Price: ${product.price}</p>
    <button id="minus">-</button><span id="value">1</span><button id="plus">+</button>   
    
    <button id="btn" value={id} onClick={handleAddToCart}><img src="images/icon-cart.svg" alt="" />Add to cart</button>

</div>

</StyledProductPage>

    )
}


export default ProductPage;