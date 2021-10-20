import { useHistory } from "react-router-dom";
import { Header, RedTransition} from "./styledHeader";



const HeaderDetails = () => {
    const history = useHistory ()
    const goBack = () => {
        history.goBack()
    }

    return(
        <div>
        <Header>
            <button onClick={goBack}><b>Voltar</b></button>
            <h1>Name</h1>
            <button><b>Add/Rmv from pokedex</b></button>
            
        </Header>
        <RedTransition></RedTransition>
        </div>
    )
}
export default HeaderDetails;