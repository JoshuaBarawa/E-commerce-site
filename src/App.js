
import React from 'react'
import Navbar from "./components/Navbar"
import {Route, Routes} from 'react-router-dom'
import Cart from './components/Cart'
import Contact from './components/Contact'
import Products from './components/Products'
import ProductPage from './components/ProductPage'

import Container from './components/styled/Container'
import GlobalStyle from './components/styled/GlobalStyles'
import {ThemeProvider} from "styled-components"
import axios from 'axios'


import {useState, useEffect} from 'react'
function App() {

const [products, setProducts] = useState([]);
const [categories, setCategories] = useState([]);
const [cartItems, setCartItems] = useState([])
const [quantity, setQuantity] = useState(1)
const [count, setCount] = useState(0);

const Product = function(product, quantity) {
   this.product = product;
   this.quantity = quantity;
  return { product, quantity };
};

useEffect(() => {

  const getProducts = async () => {
    await axios.get("https://fakestoreapi.com/products")
    .then((response) => {
    setProducts(response.data)
  })  

  }
 
const getCategories = async () => {
  await axios.get("https://fakestoreapi.com/products/categories")
  .then((response) => {
    setCategories(response.data)
  }) 
}

getProducts();
getCategories();
}, [])


const addToCart = item =>{
   axios.get("https://fakestoreapi.com/products/" + item.target.value)
  .then((response) => {

  const newProduct = new Product(response.data, quantity)

      cartItems.push(newProduct)
      setCartItems([...cartItems])
     
      sessionStorage.setItem("orders", JSON.stringify(cartItems));
       setCartItems(JSON.parse(sessionStorage.getItem("orders")));
     setCount(count + newProduct.quantity)
       setQuantity(1)
       console.log(cartItems)
  
  })
  
      
}

const filterProducts = category =>{
  const url = category.target.value === 'All' ? "https://fakestoreapi.com/products" : "https://fakestoreapi.com/products/category/" + category.target.value;
  axios.get(url)
  .then((response) => {
     setProducts(response.data)
    })};

    const incrementQuantity = () =>{
        setQuantity(quantity + 1)
      };

      const decrementQuantity = () =>{
       
        setQuantity(quantity - 1)
       
         };



const theme = {
          
}

  return (
    <ThemeProvider theme={theme}>
    <GlobalStyle/>
    <Navbar orders={count}/>
    <Container> 
      <Routes>
      <Route  exact path='/' element={<Products products={products} categories={categories} handleFilter={filterProducts}/>} />
        <Route exact path='/cart' element={<Cart cartItems={cartItems}/>} />
        <Route path='/product/:id' element={<ProductPage handleAddToCart={addToCart} decrItem={decrementQuantity} incrItem={incrementQuantity} quantity={quantity}/>} />
        <Route exact path='/contact' element={<Contact/>} />
      </Routes>

      </Container>
      </ThemeProvider>
  );
}

export default App;
