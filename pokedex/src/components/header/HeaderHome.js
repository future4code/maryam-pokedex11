import { useHistory } from "react-router-dom";
import styled, {keyframes} from "styled-components";
import ImagemPokebola from "../../img/pokebola.png"
import { Header, RedTransition} from "./styledHeader";




const HeaderHome = () => {
    const history = useHistory ()
const goToPokedex = () => {
    history.push("/pokedex")
}

    return(
        <div>
            <Header>
                <button onClick={goToPokedex}><b>Pokedex</b></button>
                <h1>Pokémons</h1>
                <img src = {ImagemPokebola}></img>
            </Header>
            <RedTransition></RedTransition>
        </div>
        
    )
}
export default HeaderHome;