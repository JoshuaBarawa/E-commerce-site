import styled from "styled-components"

const StyledNavbar = styled.nav`

display: flex;
justify-content: space-between;
align-items: center;
padding: 0px 30px;
background-color: #048F46;
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