import axios from "axios";
import React, { useEffect, useState } from "react";
import { GlobalContext } from "./GlobalContext";

const GlobalState = (props) =>
{   // declarar os states, setters e os requests

    
    const [pokeList, setPokeList] = useState([]);
    const [pokedexList, setPokedexList] = useState([]);


    const moveToPokedex = (pokemonToAdd) => {
        const position = pokedexList.findIndex((item) => {
          return item.id === pokemonToAdd.id;
        });
    
        const newPokedexList = [...pokedexList];
    
        if (position === -1) {
            newPokedexList.push({ ...pokemonToAdd});
            console.log(pokedexList)
        } else {
        
        }
    
        setPokedexList(newPokedexList);
      };
    
    useEffect(() => {
        axios.get("https://pokeapi.co/api/v2/pokemon?limit=20").then((res) => {
            setPokeList(res.data.results);
            
            
        }).catch((err) => {
            console.log(err)
        })
        
      }, []);

    const states= {pokeList,pokedexList}
    const setters={setPokeList}
    const requests={} 
    const functions={moveToPokedex}

    
    return(
        <GlobalContext.Provider value={{states, setters, requests, functions, pokedexList}}>
            {props.children}
        </GlobalContext.Provider>
    )
        
    
    

    
    
}

export default GlobalState;