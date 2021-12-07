
import styled from 'styled-components'

const StyledCard = styled.div`

box-shadow: rgba(0, 0, 0, 0.24) 0px 3px 8px;
padding: 20px 20px;
display: flex;
flex-direction: column;
justify-content: space-between;
align-items: center;
cursor: pointer;
border-radius: 10px;


img{
    width: 80%;
     height: 55%;
}

#title{
    font-size:16px;
    color:#5C548A;
}
#price{
    font-size:20px;
   
}

#btn{
    color:white;
    width:80%;
    padding: 10px 0px;
    cursor: pointer;
    font-size: 15px;
    background-color: #1C2541;
    border:none;
    border-radius: 5px;
   
}

&:hover{
    box-shadow: rgba(0, 0, 0, 0.35) 0px 5px 15px;
    
    #btn{
        display:block;
    }
}

`

export default StyledCard;