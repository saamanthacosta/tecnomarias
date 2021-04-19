import { Route, Switch } from "react-router";
import { BrowserRouter } from "react-router-dom";
import Header from "./common/Header";
import Rodape from "./common/Rodape";
import Home from "./pages/Home";
import { routes } from "../config/routes";
import ConfirmarCadastro from "./common/modais/confirmarCadastro";

const RotasComCabecalhoERodape = () => (
  <>
    <Header />
    <Switch>
      <Route path={routes.HOME} exact component={ConfirmarCadastro} />
    </Switch>
    <Rodape />
  </>
)

function App() {
  return <>
    <BrowserRouter>
      <Switch >
        <Route render={() => <RotasComCabecalhoERodape component={RotasComCabecalhoERodape} />} />
      </Switch>
    </BrowserRouter>
  </>;
}

export default App;
