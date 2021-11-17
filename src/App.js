
import Navbar from "./components/Navbar"
import {Route, Routes} from 'react-router-dom'
import Cart from './components/Cart'
import Contact from './components/Contact'
import Products from './components/Products'

import Container from './components/styled/Container'
import GlobalStyle from './components/styled/GlobalStyles'
import {ThemeProvider} from "styled-components"

function App() {

  const theme = {

  }

  return (
  <ThemeProvider theme={theme}>
    <GlobalStyle/>
    <Navbar />
    <Container>
      <Routes>
      <Route  exact path='/' element={<Products/>} />
        <Route exact path='/cart' element={<Cart/>} />
        <Route exact path='/contact' element={<Contact/>} />
      </Routes>

      </Container>
      </ThemeProvider>
  );
}

export default App;
