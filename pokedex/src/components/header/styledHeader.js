import styled from "styled-components";

export const Header = styled.div`
display: flex;
align-items: center;
justify-content: space-between;
background-color: #ED3237;
padding: 0 15px;
img{
    width: 60px;
}
button{
    font-size: medium;
    border-radius: 10px;
    width: 140px;
    height: 50px;
    background-color: white;
    color: black;
    cursor: pointer;
    transition: all 0.5s;

    :hover{
        background-color: lightgrey;
        transform: scale(1.1);
        
    }
}
`