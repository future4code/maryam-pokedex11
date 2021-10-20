import styled from "styled-components"
import HeaderHome from "../components/header/HeaderHome"
import axios from "axios"
import { Body } from "./styledPage" 
import Footer from "../components/footer/Footer"
import GlobalState from "../context/GlobalState"
import { useContext, useEffect, useState } from "react"
import { GlobalContext } from "../context/GlobalContext"
import React from "react"
import Card from "../components/card/Card"





const HomePage = () => {
    const {states, setters, requests} = useContext(GlobalContext)

    
    
    

return(
    <div>
        <HeaderHome/>
        <Body>
            {states.pokeList &&
            states.pokeList.map((pokemon) => {
            return <Card key={pokemon.name} pokemon={pokemon} />;
            })}
        </Body>
        <Footer>
        </Footer>
    </div>
)
}

export default HomePage;