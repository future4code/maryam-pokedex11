import { useHistory } from "react-router-dom";
import ImagemPokebola from "../../img/pokebola.png"
import { Header, RedTransition} from "./styledHeader";










const HeaderPokedex = () => {
    const history = useHistory ()
    const goBack = () => {
        history.goBack()
    }

    return(
    <div>
        <Header>
            <button onClick={goBack}><b>Pokemon List</b></button>
            <h1>Pokédex</h1>
            <img src = {ImagemPokebola}></img>
        </Header>
        <RedTransition></RedTransition>
    </div>
    )
}
export default HeaderPokedex;