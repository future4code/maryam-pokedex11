import { useHistory } from "react-router-dom";
import { Header } from "./styledHeader";



const HeaderDetails = () => {
    const history = useHistory ()
    const goBack = () => {
        history.goBack()
    }

    return(
        <Header>
            <button onClick={goBack}><b>Voltar</b></button>
            <h1>Name</h1>
            <button><b>Add/Rmv from pokedex</b></button>
        </Header>
    )
}
export default HeaderDetails;