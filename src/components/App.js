import { Route, Switch } from "react-router";
import { BrowserRouter } from "react-router-dom";
import Home from "./pages/Home";
import { routes } from "../config/routes";
import ConfirmarRemocaoVaga from "./common/Modais/Confirmar/Existencia-Conta";
import CadastrarPF from "./pages/PessoaFisica/Cadastrar";
import CadastrarPJ from "./pages/PessoaJuridica/Cadastrar";
import EditarPF from "./pages/PessoaFisica/Editar";
import EditarPJ from "./pages/PessoaJuridica/Editar";
import ExibirPF from "./pages/PessoaFisica/Exibir";
import ExibirPJ from "./pages/PessoaJuridica/Exibir";
import ExibirVaga from "./pages/Vagas/Exibir";
import Header from './common/Header/index.jsx';
import Rodape from "./common/Rodape";

import ValidacoesCadastro from '../contexts/ValidacoesCadastro';
import { validarEmail, validarNome, validarSenha } from '../utils/validadores'
import ListagemVagas from "./pages/Vagas/Listagem";
import EditarVaga from "./pages/Vagas/Editar";
import CadastrarVaga from "./pages/Vagas/Cadastrar";
import Page from "./common/Page";
import ListagemPJ from "./pages/PessoaJuridica/Listagem";
import ListagemPF from "./pages/PessoaFisica/Listagem";

const RotasComCabecalhoERodape = () => (
  <>
    <Header />
    <Page>
      <Switch>
        <Route path={routes.HOME} exact component={ConfirmarRemocaoVaga} />
        <Route path={routes.EXIBIR_PF + ':id'} component={ExibirPF} />
        <Route path={routes.EXIBIR_PJ + ':id'} component={ExibirPJ} />
        <Route path={routes.EXIBIR_VAGA + ':id'} component={ExibirVaga} />
        <Route path={routes.LISTAR_VAGAS} component={ListagemVagas} />
        <Route path={routes.LISTAR_PJ} component={ListagemPJ} />
        <Route path={routes.LISTAR_PF} component={ListagemPF} />
        <ValidacoesCadastro.Provider
          value={{ senha: validarSenha, nome: validarNome, email: validarEmail }} >
          <Route path={routes.CADASTRAR_PF} component={CadastrarPF} />
          <Route path={routes.EDITAR_PF + ':id'} component={EditarPF} />
          <Route path={routes.CADASTRAR_VAGA + ':id'} component={CadastrarVaga} />
          <Route path={routes.EDITAR_VAGA + ':id'} component={EditarVaga} />
          <Route path={routes.CADASTRAR_PJ} component={CadastrarPJ} />
          <Route path={routes.EDITAR_PJ + ':id'} component={EditarPJ} />
        </ValidacoesCadastro.Provider>
      </Switch>

    </Page>
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
