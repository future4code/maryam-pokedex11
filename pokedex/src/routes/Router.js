import { BrowserRouter, Switch, Route} from 'react-router-dom'
import HomePage from '../pages/HomePage';
import PokedexPage from '../pages/PokedexPage';
import DetailsPage from '../pages/DetailsPage';



export const Router = () => {
    return (
      <BrowserRouter>
        <Switch>
        <Route exact path={"/"}>
          <HomePage/>
        </Route>
        <Route exact path= {"/pokedex"}>
          <PokedexPage/>
        </Route>
        <Route exact path= {"/details"}>
          <DetailsPage/>
        </Route>
        <Route>
          <div><h1>Página não encontrada</h1></div>
        </Route>
        </Switch>
      </BrowserRouter>
    )
}