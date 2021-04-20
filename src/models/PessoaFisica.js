import Pessoa from './Pessoa';

export class PessoaFisica extends Pessoa {

    constructor(pessoa, links) {
        super(pessoa);
        this._links = links;
    }

    get links() {
        return this._links;
    }

    set links(links) {
        this._links = links;
    }
}