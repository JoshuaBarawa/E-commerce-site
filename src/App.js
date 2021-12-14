
import React from 'react'
import Navbar from "./components/Navbar"
import {Route, Routes, useNavigate} from 'react-router-dom'
import Cart from './components/Cart'
import Login from './components/Login'
import Products from './components/Products'
import ProductPage from './components/ProductPage'
import Checkout from './components/Checkout'
import Signup from './components/Signup';

import Container from './components/styled/Container'
import GlobalStyle from './components/styled/GlobalStyles'
import {ThemeProvider} from "styled-components"
import axios from 'axios'
import { ToastContainer, toast } from 'react-toastify';
import {auth} from './firebase-config'
import {createUserWithEmailAndPassword, onAuthStateChanged, signOut, signInWithEmailAndPassword} from 'firebase/auth'

import {useState, useEffect} from 'react'

function App() {

const [products, setProducts] = useState([]);
const [categories, setCategories] = useState([]);
const [cartItems, setCartItems] = useState([])
const [quantity, setQuantity] = useState(1)
const [count, setCount] = useState(0);
const [total, setTotal] = useState(0.00)

const [user, setUser] = useState({})
const [email, setEmail] = useState('')
const [password, setPassword] = useState('')
const [signUpEmail, setSignUpEmail] = useState('')
const [signUpPassword, setSignUpPassword] = useState('')
const [emailError, setEmailError] = useState('')
const [passwordError, setPasswordError] = useState('')

let navigate = useNavigate();


onAuthStateChanged(auth, (currentUser) => {
  setUser(currentUser)
  })

  const handleCheckUser = () => {
    if(user){
      navigate("/checkout")
    }

    else{
      navigate("/login")
    }
  }

const clearInputs = () => {
  setEmail('')
  setPassword('')
  
}

const signUp = async (e) => {
  e.preventDefault()
try{
  await createUserWithEmailAndPassword(auth ,signUpEmail, signUpPassword)
  clearInputs()
  navigate("/")
}
  catch(error) {
    switch(error.code) {
      case 'auth/email-already-in-use':
      case 'auth/invalid-email':
          setEmailError("Invalid email address")
          break;
          case 'auth/weak-password':
            setPasswordError("Password must be at least 6 charac")
            break;
    }
  }
}


const login = async (e) => {

  try{
    await signInWithEmailAndPassword(auth, email, password)
    navigate("/checkout")
  }
 catch(error) {
    switch(error.code) {
      case 'auth/invalid-email':
      case 'auth/user-disabled':
      case 'auth/user-not-found':
          setEmailError("Invalid email address")
          break;
          case 'auth/wrong-password':
            setPasswordError("Invalid password")
            break;
    }
  }
}


const logout = async () => {
  await signOut(auth);
  navigate("/")
}



const Product = function(product, quantity) {
   this.product = product;
   this.quantity = quantity;
  return { product, quantity };
};


useEffect(() => {
  if( sessionStorage.getItem("orders") != null){
    setCartItems(JSON.parse(sessionStorage.getItem("orders")))
    setQuantity(1)
    
    cartItems.forEach(item => {
      setCount((count) => count + item.quantity)
      setTotal((total) => total + (item.product.price * item.quantity))

    })
  }



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

}, [cartItems.length])



const addToCart = item =>{
   axios.get("https://fakestoreapi.com/products/" + item.target.value)
  .then((response) => {

  const newProduct = new Product(response.data, quantity)

      cartItems.push(newProduct)
      setCartItems([...cartItems])
     
      sessionStorage.setItem("orders", JSON.stringify(cartItems));
       setCartItems(JSON.parse(sessionStorage.getItem("orders")));
       setCount(count + newProduct.quantity)
       setTotal(total + (newProduct.product.price * newProduct.quantity))
       
       toast.success("Item(s) added to cart")

       console.log(cartItems)
  
  })

}

const removeItemFromCart = (item) =>{
  cartItems.pop();
  setCartItems([...cartItems])
  console.log(item.target.value)
  console.log(cartItems)
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
    <Navbar orders={count} user={user} handleLogout={logout}/>
    <Container> 
    <ToastContainer />
      <Routes>
      <Route  exact path='/' element={<Products products={products} categories={categories} handleFilter={filterProducts}/>} />
        <Route exact path='/cart' element={<Cart cartItems={cartItems} removeItem={removeItemFromCart} total={total} checkUser={handleCheckUser}/>} />
        <Route path='/product/:id' element={<ProductPage handleAddToCart={addToCart} decrItem={decrementQuantity} incrItem={incrementQuantity} quantity={quantity}/>} />
        <Route exact path='/checkout' element={<Checkout/>} />
        <Route exact path='/login' element={<Login email={email} password={password} setEmail={setEmail} setPassword={setPassword} handleLogin={login} emailError={emailError} passwordError={passwordError} />} />

        <Route exact path='/signup' element={<Signup email={signUpEmail} password={signUpPassword} setEmail={setSignUpEmail} setPassword={setSignUpPassword} handleSignUp={signUp} emailError={emailError} passwordError={passwordError}/>} />
      </Routes>

      </Container>
      </ThemeProvider>
  );
}

export default App;
