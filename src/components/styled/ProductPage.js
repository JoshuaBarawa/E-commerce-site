import styled from 'styled-components'

const StyledProductPage = styled.div`

display:flex;
width:100%;
align-items: center;
justify-content:center;
margin-top:30px;

#featured {
    width: 25%;
}

#description{
width: 0%;
margin: 10px 20px;
}

#minus ,#add{
    border: none;
    padding: 2px 30px;
    cursor: pointer;
    border-radius:2px;
    margin: 0px 10px;
    font-size:22px;
}
.card{
    display:flex;
    width:80%;
    align-items: center;
}

#description{
 padding: 10px;
  min-width:40%;  
}

#description #category{
    text-transform:uppercase;
}

#description p{
   opacity: 75%; 
}

#description span{
    color:hsl(26, 100%, 55%);
}

#description #title{
    font-weight: 700;
}

#description #desc{
    font-size: 16px;
}

#description #price{
    font-weight: 700;
    padding: 2px;
    border-radius:5px;  
}

#btn{
    padding: 10px 40px;
    color: white;
    font-weight: bold;
    background-color:hsl(26, 100%, 55%);
    border: none;
    border-radius: 5px;
    cursor: pointer;
    }

#btn:hover{
    opacity: 0.8;
}


@media only screen and (max-width: 760px) {

        flex-direction: column;
        width:100% !important;
        padding: 0px !important;

       #featured{
           width:250px;
       }

    #description{
        padding: 10px !important;
        width: 100%;   
    }

    #btn{
        margin-top: 10px;
    }
}

`

export default StyledProductPage;