import styled from "styled-components"

const StyledNavbar = styled.nav`

display: flex;
justify-content: space-between;
align-items: center;
padding: 0px 30px;
background-color: #0F4956;
position:sticky;
top:0;

.logo{
    margin-left: 10px;
    color:white;
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