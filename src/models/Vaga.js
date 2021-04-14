export class Vaga { 
    constructor(id, idEmpresa, areaAtuacao, cargo, descricao, valor) {
        this._id = id;
        this._idEmpresa = idEmpresa;
        this._areaAtuacao = areaAtuacao;
        this._cargo = cargo;
        this._descricao = descricao;
        this._valor = valor;
    }

    get id() {
        return this._id;
    }

    set id(id) {
        this._id = id;
    }

    get idEmpresa() {
        return this._idEmpresa;
    }

    set idEmpresa(idEmpresa) {
        this._idEmpresa = idEmpresa;
    }

    get areaAtuacao() {
        return this._areaAtuacao;
    }

    set areaAtuacao(areaAtuacao) {
        this._areaAtuacao = areaAtuacao;
    }

    get cargo() {
        return this._cargo;
    }

    set cargo(cargo) {
        this._cargo = cargo;
    }

    get descricao() {
        return this._descricao;
    }

    set descricao(descricao) {
        this._descricao = descricao;
    }

    get valor() {
        return this._valor;
    }

    set valor(valor) {
        this._valor = valor;
    }
}