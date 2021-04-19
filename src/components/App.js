import { Route, Switch } from "react-router";
import { BrowserRouter } from "react-router-dom";
import Header from "./common/header";
import Rodape from "./common/rodape";
import Home from "./pages/Home";
import { routes } from "../config/routes";

const RotasComCabecalhoERodape = () => (
  <>
    <Header />
    <Switch>
      <Route path={routes.HOME} exact component={Home} />
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
