import styled from "styled-components"

const StyledNavbar = styled.nav`

display: flex;
justify-content: space-between;
align-items: center;
padding: 0px 30px;
background-color:#fff;
box-shadow: rgba(0, 0, 0, 0.24) 0px 3px 8px;
position:sticky;
top:0;
height: 80px;
border-bottom: 2px solid black;

.logo{
    margin-left: 10px;
    color:black;
    font-size:35px;
    text-decoration: none;
    font-weight:bold;
    text-align:center;
}

.links{
    display: inline-flex;

}

.links li{
   list-style-type:none;
 }

.links .link{
   margin-right: 30px;
   text-decoration: none;
   font-size: 21px;
   color:black;
}


`

export default StyledNavbar