import styled from "styled-components"

const StyledNavbar = styled.nav`

display: flex;
justify-content: space-between;
align-items: center;
padding: 0px 30px;
background: linear-gradient(90deg, rgba(2,0,36,1) 0%, rgba(100,100,196,1) 0%, rgba(177,104,96,1) 22%, rgba(0,212,255,1) 100%);
position:sticky;
top:0;
height: 80px;

.logo{
    margin-left: 10px;
    color:white;
    font-size:40px;
    text-decoration: none;
    font-weight:bold;
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
   color:#fff;
}


`

export default StyledNavbar