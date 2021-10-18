import { useHistory } from "react-router-dom";
import ImagemPokebola from "../../img/pokebola.png"
import { Header } from "./styledHeader";





const HeaderHome = () => {
    const history = useHistory ()
const goToPokedex = () => {
    history.push("/pokedex")
}

    return(
        <Header>
            <button onClick={goToPokedex}><b>Pokedex</b></button>
            <h1>Pokemon list</h1>
            <img src = {ImagemPokebola}></img>
        </Header>
    )
}
export default HeaderHome;