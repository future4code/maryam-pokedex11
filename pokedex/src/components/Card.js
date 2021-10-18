import { useHistory } from "react-router-dom";
import styled from "styled-components";

const ContainerCard=styled.div`
display: flex;
flex-direction: column;
align-items: center;
border: 2px solid black;
width: 250px;
height: 250px;
margin: 16px;

`
const ContainerButtons = styled.div`
display: flex;

`

const Card = () => {
    const history = useHistory ()
    const goToDetails = () => {
        history.push("/details")
    }
    return(
        <ContainerCard>
            <p>Name</p>
            <img></img>
            <ContainerButtons>
                <button>remove</button>
                <button onClick = {goToDetails}>details</button>
            </ContainerButtons>
        </ContainerCard>
    )
}


export default Card;