import HeaderPokedex from "../components/header/HeaderPokedex";
import Card from "../components/card/Card";
import { Body } from "./styledPage" 
import Footer from "../components/footer/Footer";
import { useContext } from "react";
import { GlobalContext } from "../context/GlobalContext";

const PokedexPage = () => {
    const {pokedexList} = useContext(GlobalContext)
    return(
        <div>
            <HeaderPokedex/>
            <Body>
            {pokedexList.map((pokemon) => {
                return <Card key={pokemon.name} pokemon={pokemon} />;
            })}
            </Body>
            <Footer></Footer>
        </div>
    )
    
    
    
    }
    export default PokedexPage;