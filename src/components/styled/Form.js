import styled from 'styled-components'

export const StyledForm = styled.div`
box-shadow: rgba(0, 0, 0, 0.24) 0px 3px 8px;
text-align: center;
margin:auto;
margin-top: 100px;
min-height: 400px;
border-radius:10px;
max-width: 400px;
min-width:auto;

h1{
    padding: 10px 0px;
    font-size:25px;
}

#username, #email, #password{
    width:80%;
    padding:10px 10px;
    margin-top:10px;
    border-radius:5px;
    border:none;
    border:1px solid #ccc;
}

#l-btn{
    border:none;
    padding:7px 60px;
    margin:20px 0px;
    background-color: #357EC7;
    color:white;
    border-radius: 4px;
    font-size: 18px;
    text-align:center;
    
}

#email:focus, #password:focus{
    outline: none;
}

#signup{
    font-weight: bold;
}

#error{
     color:red;
     font-size: 12px;
}

`

export default StyledForm