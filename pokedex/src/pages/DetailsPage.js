import HeaderDetails from "../components/header/HeaderDetails";
import styled from "styled-components";

const ContainerDetails = styled.div`
width: 100vw;
display: flex;
justify-content: space-around;

`

const ContainerLeftColumn = styled.div`
display: flex;
flex-direction: column;
justify-content: space-around;
`
const ContainerCenterColumn = styled.div`
`
const ContainerRightColumn = styled.div`
`

const ContainerImage = styled.div`
width: 120px;
height: 120px;
border: 2px solid black;
`

const ContainerStats = styled.div`


`
const ContainerTypes = styled.div`
display: flex;
justify-content: space-between;
`
const ContainerMoves = styled.div`

`

const DetailsPage = () => {

    return(
        <div>
            <HeaderDetails/>

            <ContainerDetails>
                <ContainerLeftColumn>
                    <ContainerImage>
                        <img></img>
                    </ContainerImage>

                    <ContainerImage>
                        <img></img>
                    </ContainerImage>
                </ContainerLeftColumn>

                <ContainerCenterColumn>
                    <ContainerStats>
                        <h2>Status</h2>
                        <p>hp:</p>
                        <p>attack:</p>
                        <p>defense:</p>
                        <p>special attack:</p>
                        <p>special defense:</p>
                        <p>speed:</p>
                    </ContainerStats>
                </ContainerCenterColumn>

                <ContainerRightColumn>
                    <ContainerTypes>
                        <p>type1</p>
                        <p>type2</p>
                    </ContainerTypes>
                    
                    <ContainerMoves>
                        <h2>Moves</h2>
                        <p>move name1</p>
                        <p>move name2</p>
                        <p>move name3</p>
                    </ContainerMoves>
                </ContainerRightColumn>
            </ContainerDetails>
        </div>
    )
    
    
}

export default DetailsPage;
