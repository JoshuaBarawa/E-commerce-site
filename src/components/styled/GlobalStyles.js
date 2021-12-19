
import {createGlobalStyle} from 'styled-components'

const GlobalStyle = createGlobalStyle`
@import url('https://fonts.googleapis.com/css2?family=Poppins&display=swap');

*{
    scroll-behavior: smooth;
    margin:0;
    padding:0;
    font-family: 'Poppins', sans-serif; 
    box-sizing: border-box;
}

body{
    margin:0px;
    padding:0px;
}

@media only screen and (max-width:700px){
    html,body{
        margin:0px;
        padding:0px;
        width:100%;
        overflow-x: hidden;
    }
    



     }


`

export default GlobalStyle;