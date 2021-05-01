import Endereco from './Endereco';
import Pessoa from './Pessoa';
import {TipoPessoa} from '../enums/TipoPessoa'

export default class PessoaJuridica extends Pessoa {

    constructor(id, nome, email, telefones, cnpj, site, descricao, porteEmpresa, areaAtuacao, mediaAvaliacao, avaliacoes, endereco) {
        super(id, nome, email, telefones, TipoPessoa.PESSOA_JURIDICA);
        this.cnpj = cnpj;
        this.site = site;
        this.descricao = descricao;
        this.porteEmpresa = porteEmpresa;
        this.areaAtuacao = areaAtuacao;
        this.mediaAvaliacao = mediaAvaliacao;
        this.avaliacoes = avaliacoes;
        this.endereco = new Endereco(endereco.id, endereco.logradouro, endereco.numero, endereco.complemento, endereco.bairro, endereco.municipioIBGE);
    }
}