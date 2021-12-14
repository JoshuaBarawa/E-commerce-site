
import styled from "styled-components"

export const StyledCart = styled.div`

display: flex;
justify-content: center;

.cart{
    display: flex;
    justify-content: space-between;
    height: 150px;
    margin: 20px 0px;
    box-shadow: rgba(60, 64, 67, 0.3) 0px 1px 2px 0px, rgba(60, 64, 67, 0.15) 0px 1px 3px 1px;
    padding:20px 20px;
   width: 700px;
}
#item{
    width:120px;
}

#product{
    display:flex;
}

#info{
    display:flex;
    flex-direction:column;
    justify-content:space-around;
    padding-left:10px;
}

#action{
    display:flex;
    flex-direction:column;
    justify-content:space-around;
}

#minus, #add{
    padding: 2px 20px;
    font-size: 20px;
    margin: 0px 5px;
    border:none;
    
}

#remove{
    background-color:transparent;
    border:none;
    color:red;
}

.order-form{
    width: 250px;
    float:right;
    margin-top:20px;
    text-align:left;
}

.btn-checkout{
    text-decoration:none;
    background-color: blue;
    padding: 10px 20px;
    color: white;
    border-radius: 2px;
    border: none;
}

`