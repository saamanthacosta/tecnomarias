import Pessoa from './Pessoa';
import Links from './Links';
import { TipoPessoa } from '../enums/TipoPessoa';

export default class PessoaFisica extends Pessoa {

    constructor(id, nome, email, telefones, links) {
        super(id, nome, email, telefones, TipoPessoa.PESSOA_FISICA);
        this.links = new Links(links.id, links.gitHub, links.linkedIn, links.portfolio, links.facebook);
    }
}