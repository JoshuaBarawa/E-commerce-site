import styled from "styled-components"

const StyledNavbar = styled.nav`

display: flex;
justify-content: space-between;
align-items: center;
overflow-x:hidden;
background-color:#191970;
position:sticky;
top:0;
height: 80px;
text-align:center;


.logo{
    margin-left: 10px;
    font-size:35px;
    text-decoration: none;
    font-weight:bold;
    text-align:center;
    padding: 0px 30px;
    color:#fff;
}

#logo-img{
    width:70px;
}

.links{
    display: inline-flex;
    padding: 0px 30px;
}

.links li{
   list-style-type:none;
 }

.links .link{
   margin-right: 30px;
   text-decoration: none;
   font-size: 21px;
   color:#fff;
}

@media only screen and (max-width:600px){
    flex-direction: column;
    justify-content: center;
    height:90px;


    .logo{
        margin-top: 10px;
    }

}





`

export default StyledNavbar