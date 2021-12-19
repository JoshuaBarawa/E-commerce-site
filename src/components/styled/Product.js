
import styled from 'styled-components'

const StyledProduct = styled.div`
margin: 30px;
display: flex;

#products{
    postion:relative;
    display: grid;
    grid-template-columns: repeat(auto-fit, minmax(200px, 1fr));
    grid-gap: 20px;
    width: 80%;

}

#category{
    margin-right: 30px;
    box-shadow: rgba(0, 0, 0, 0.24) 0px 3px 8px;
    max-height: 350px;
    position:sticky;
    top: 100px;
    border-radius: 5px; 
  
}

#category li{
    width:100%;
    margin-left:-20px;
    list-style-type:none; 
    padding: 10px;
    margin-right: 40px;
    border-bottom: #5C548A 1px solid;
 }

#category li #c-btn{
    width:100%;
   text-decoration:none;
   font-size: 15px;
   text-transform: capitalize; 
   background-color: transparent;
   border:none;
}


@media only screen and (max-width:763px){
    flex-direction: column;
    justify-content:space-around;
   
    #products{
        width:100%;
        margin:0;
        padding:0;
    }

    #category{
        display: grid;
        grid-template-columns: repeat(auto-fit, minmax(80px, 1fr));
        grid-gap: 10px;
        min-width:auto;
        width:100%;
        background-color: #fff;
        position:sticky;
        top: 0px;
       
    }


     }
    

`
export default StyledProduct