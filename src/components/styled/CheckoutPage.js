import styled from 'styled-components'

 export const StyledCheckout = styled.div`

.wrapper {
    margin: auto;
    margin-top:30px;
    display: flex;
    justify-content: center;
    font-family: "Arimo";
    background-color: #0e387a;
    color: #9fafca;
    font-weight: bold;
    width:60%;
    border-radius:10px;
}

.container {
    width: 90%;
    padding: 5% 5%;
}

h1 {
    align-self: center;
}

form {
    width: 100%;

    >* {
        margin-top: 20px;
    }

    input {
        width: 100%;
        min-height: 25px;
        border: 0;
        font-size: 1rem;
        letter-spacing: .15rem;
        margin-top: 5px;
        color: $maroon;
        border-radius: 4px;
        padding: 4px 10px;
    }

    label {
        text-transform: uppercase;
        font-size: 12px;
        letter-spacing: 2px;
        color: $maroon;
    }

    h1 {
        font-size: 24px;
        line-height: 10px;
        color: $title;
        letter-spacing: 1px;
    }

    h1:nth-of-type(2) {
        margin-top: 10%;
    }
}

.name, .place{
    justify-content: space-between;
    display: flex;
    width: 100%;

    div {
        width: 45%;
    }
}

.btns {
    display: flex;
   justify-content: space-between;
    align-items: flex-end;

    #link{
        margin: 3px 0;
        height: 30px;
        color: #fff;
        background-color: #6077c0;
        border: 0;
        border-radius: .3rem;
        letter-spacing: 1px;
        text-decoration:none;
        padding:5px 10px;
    }

    button {
        margin: 3px 0;
        height: 30px;
        color: #fff;
        background-color: #6077c0;
        border: 0;
        padding:5px 10px;
        border-radius: .3rem;
        letter-spacing: 1px;
        text-align:center;
    }
}

input:focus,
button:focus {
    outline: none;
}

@media (max-width: 736px) {
    .wrapper {
        width: 100%;
    }

    .container {
        width: 100%;
    }

    .btns {
        align-items: center;
        flex-wrap:wrap;

        button {
            width: auto;
        }

        #link{
            width:auto !important;
        }
        
    }

    form h1 {
        text-align: center;
    }

    .name,
    .cc-info {
        flex-direction: column;
        width: 100%;
        justify-content: space-between;

        div {
            align-items: center;
            flex-direction: column;
            width: 100%;
            display: flex;
        }
    }

    .street,
    .cc-num {
        text-align: center;
    }

    input {
        margin: 5px 0;
        min-height: 30px;
    }
}

`

export default StyledCheckout