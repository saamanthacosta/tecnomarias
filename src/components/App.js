import { Route, Switch } from "react-router";
import { BrowserRouter } from "react-router-dom";
import Header from "./common/Header";
import Rodape from "./common/Rodape";
import Home from "./pages/Home";
import { routes } from "../config/routes";
import ConfirmarRemocaoVaga from "./common/Modais/Confirmar/Existencia-Conta";
import CadastrarPF from "./pages/PessoaFisica/Cadastrar";
import EditarPF from "./pages/PessoaFisica/Editar";
import ExibirPF from "./pages/PessoaFisica/Exibir";

import ValidacoesCadastro from '../contexts/ValidacoesCadastro';
import { validarEmail, validarNome, validarSenha } from '../utils/validadores'

const RotasComCabecalhoERodape = () => (
  <>
    <Header />
    <Switch>
      <Route path={routes.HOME} exact component={ConfirmarRemocaoVaga} />
      <Route path={routes.EXIBIR_PF + ':id'} component={ExibirPF} />
      <ValidacoesCadastro.Provider
        value={{ senha: validarSenha, nome: validarNome, email: validarEmail }} >
        <Route path={routes.CADASTRAR_PF} component={CadastrarPF} />
        <Route path={routes.EDITAR_PF + ':id'} component={EditarPF} />
      </ValidacoesCadastro.Provider>
    </Switch>
    <Rodape />
  </>
)

function App() {
  return <>
    <BrowserRouter>
      <Switch >
        <Route render={() => <RotasComCabecalhoERodape />} />
      </Switch>
    </BrowserRouter>
  </>;
}

export default App;
