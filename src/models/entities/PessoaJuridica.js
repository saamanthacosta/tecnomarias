import Pessoa from './Pessoa';

export class PessoaJuridica extends Pessoa {

    constructor(id, nome, email, telefones, cnpj, site, descricao, porteEmpresa, areaAtuacao, mediaAvaliacao, avaliacoes, endereco) {
        super(id, nome, email, telefones);
        this.cnpj = cnpj;
        this.site = site;
        this.descricao = descricao;
        this.porteEmpresa = porteEmpresa;
        this.areaAtuacao = areaAtuacao;
        this.mediaAvaliacao = mediaAvaliacao;
        this.avaliacoes = avaliacoes;
        this.endereco = endereco;
    }
}