import PessoaDTO from './PessoaDTO';
import LinksDTO from './LinksDTO';
import { TipoPessoa } from '../enums/TipoPessoa';

export default class PessoaFisicaDTO extends PessoaDTO {

    constructor(id, nome, email, telefones, idLink, github, linkedin, portfolio, facebook) {
        super(id, nome, email, telefones, TipoPessoa.PESSOA_FISICA);
        this.links = new LinksDTO(idLink, github, linkedin, portfolio, facebook);
    }
}