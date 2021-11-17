import styled from "styled-components"

const StyledNavbar = styled.nav`

display: flex;
justify-content: space-between;
align-items: center;
background-color: #0F4956;

.logo{
    margin-left: 10px;
}

.links{
    display: inline-flex;
    justify-content: space-between;
}

.links li{
   list-style-type:none;
 }

.links .link{
   margin-right: 20px;
   text-decoration: none;
   font-size: 21px;
   color:#fff;
}

`

export default StyledNavbar