export default class Vaga { 
    constructor(id, idEmpresa, areaAtuacao, cargo, descricao, valor, localidade) {
        this.id = id;
        this.idEmpresa = idEmpresa;
        this.areaAtuacao = areaAtuacao;
        this.cargo = cargo;
        this.descricao = descricao;
        this.valor = valor;
        this.localidade = localidade;
    }
}