import { useHistory } from "react-router-dom";
import styled from "styled-components";
import GlobalState from "../../context/GlobalState";
import { GlobalContext } from "../../context/GlobalContext";
import React, {useContext, useState, useEffect} from "react";
import axios from "axios";


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


  

const Card = (props) => {
    const history = useHistory ()
    const goToDetails = (name) => {
        history.push(`/details/${name}`)
    }
    const [pokemonInfo, setPokemonInfo] = useState({})
    const {states, setters, requests, functions} = useContext(GlobalContext)
    
        useEffect(() => {
          axios.get(props.pokemon && props.pokemon .url ?  props.pokemon.url : "").then((res) => {
            
        
            
            setPokemonInfo(res.data);
          });
        }, []);
        
        
    

    
        
    
    return(
        <ContainerCard>
            
            <p>{props.pokemon.name}</p>
            
            <img src = {props.pokemon.sprites && props.pokemon.sprites.front_default}/>
            <ContainerButtons>
                <button onClick= {()=> functions.moveToPokedex(pokemonInfo)}>Adcionar</button>
                <button onClick = {() => goToDetails(pokemonInfo.name)}>details</button>
            </ContainerButtons>
        </ContainerCard>
    )
}


export default Card;