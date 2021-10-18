import { useHistory } from "react-router-dom";
import ImagemPokebola from "../../img/pokebola.png"
import { Header } from "./styledHeader";










const HeaderPokedex = () => {
    const history = useHistory ()
    const goBack = () => {
        history.goBack()
    }

    return(
        <Header>
            <button onClick={goBack}><b>Pokemon List</b></button>
            <h1>Pokedex</h1>
            <img src = {ImagemPokebola}></img>
        </Header>
    )
}
export default HeaderPokedex;