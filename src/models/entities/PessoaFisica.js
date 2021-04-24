import Pessoa from './Pessoa';
import Links from './Links';

export default class PessoaFisica extends Pessoa {
    constructor(id, nome, email, telefones, links) {
        super(id, nome, email, telefones);
        this.links = new Links(links.id, links.gitHub, links.linkedIn, links.portfolio, links.facebook);
    }
}