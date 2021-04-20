import Pessoa from './Pessoa';

export class PessoaJuridica extends Pessoa {

    constructor(pessoa, cnpj, site, descricao, porteEmpresa, areaAtuacao, mediaAvaliacao, endereco) {
        super(pessoa);
        this._cnpj = cnpj;
        this._site = site;
        this._descricao = descricao;
        this._porteEmpresa = porteEmpresa;
        this._areaAtuacao = areaAtuacao;
        this._mediaAvaliacao = mediaAvaliacao;
        this._endereco = endereco;
    }

    get cnpj() {
        return this._cnpj;
    }

    set cnpj(cnpj) {
        this._cnpj = cnpj;
    }

    get site() {
        return this._site;
    }

    set site(site) {
        this._site = site;
    }

    get descricao() {
        return this._descricao;
    }

    set descricao(descricao) {
        this._descricao = descricao;
    }

    get porteEmpresa() {
        return this._porteEmpresa;
    }

    set porteEmpresa(porteEmpresa) {
        this._porteEmpresa = porteEmpresa;
    }

    get areaAtuacao() {
        return this._areaAtuacao;
    }

    set areaAtuacao(areaAtuacao) {
        this._areaAtuacao = areaAtuacao;
    }

    get mediaAvaliacao() {
        return this._mediaAvaliacao;
    }

    set mediaAvaliacao(mediaAvaliacao) {
        this._mediaAvaliacao = mediaAvaliacao;
    }

    get endereco() {
        return this._endereco;
    }

    set endereco(endereco) {
        this._endereco = endereco;
    }

}