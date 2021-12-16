
import {createGlobalStyle} from 'styled-components'

const GlobalStyle = createGlobalStyle`
@import url('https://fonts.googleapis.com/css2?family=Poppins&display=swap');

*{
    scroll-behavior: smooth;
    margin:0;
    padding:0;
    font-family: 'Poppins', sans-serif; 
}

body{
    width:100vw;
    margin:0px;
    padding:0px;
    box-sizing: border-box;
    
}

`

export default GlobalStyle;