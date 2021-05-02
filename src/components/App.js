import { Route, Switch } from "react-router";
import { BrowserRouter } from "react-router-dom";
import { routes } from "../config/routes";
import ValidacoesCadastro from '../contexts/ValidacoesCadastro';
import { validarEmail, validarNome, validarSenha } from '../utils/validadores'
import Header from './layout/Header';
import Rodape from "./layout/Rodape";
import Page from "./common/Page";
import Home from "./pages/Home";
import EditarVaga from "./pages/Vagas/Editar";
import CadastrarPF from "./pages/PessoaFisica/Cadastrar";
import EditarPF from "./pages/PessoaFisica/Editar";
import ListagemPF from "./pages/PessoaFisica/Listagem";
import ExibirPF from "./pages/PessoaFisica/Exibir";
import CadastrarPJ from "./pages/PessoaJuridica/Cadastrar";
import EditarPJ from "./pages/PessoaJuridica/Editar";
import ListagemPJ from "./pages/PessoaJuridica/Listagem";
import ExibirPJ from "./pages/PessoaJuridica/Exibir";
import CadastrarVaga from "./pages/Vagas/Cadastrar";
import ListagemVagas from "./pages/Vagas/Listagem";
import ExibirVaga from "./pages/Vagas/Exibir";

const RotasComCabecalhoERodape = () => (
  <>
    <Header />
    <Page>
      <Switch>
        <Route path={routes.HOME} exact component={Home} />
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

export default function App() {
  return <>
    <BrowserRouter>
      <Switch >
        <Route render={() => <RotasComCabecalhoERodape />} />
      </Switch>
    </BrowserRouter>
  </>;
}