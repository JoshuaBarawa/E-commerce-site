
import styled from "styled-components"

export const StyledCart = styled.div`

display: flex;
justify-content: center;

.cart{
    display: flex;
    justify-content: space-between;
    height: 150px;
    margin: 20px 0px;
    box-shadow: rgba(50, 50, 93, 0.25) 0px 2px 5px -1px, rgba(0, 0, 0, 0.3) 0px 1px 3px -1px;
    padding:20px 20px;
     min-width:auto;
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


#price{
    text-align:center;
    font-weight:bold;
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
    width: 400px;
    float:right;
    margin-top:20px;
    text-align:right;
    padding: 5px 10px;
    font-weight:bold;
}

.btn-checkout{
    text-decoration:none;
    background-color: blue;
    padding: 10px 20px;
    color: white;
    border-radius: 2px;
    border: none;
}


@media only screen and (max-width:670px){
    justify-content: center;
    padding:20px;

    .cart{
        flex-direction: column;
        justify-content: center;;
        height:auto;
        width:100%;
        padding:20px;
    }

    #action{
        flex-direction:row-reverse;
    }

    #price{
        text-align:center;
        margin-top:20px;
    }

    .order-form{
        width:100%;
        text-align:left;
    }
}


@media only screen and (max-width:400px){
  
    #product{
        flex-direction:column;
        text-align:center;
        align-items:center;
    }
   

}

`