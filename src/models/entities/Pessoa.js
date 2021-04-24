
import Telefone from './Telefone';

export default class Pessoa {
    constructor(id, nome, email, telefones) {
        if (this.constructor === Pessoa){
            throw new Error("Você não deveria instanciar um objeto do tipo Pessoa diretamente, pois essa é uma classe abstata");
        }
        this.id = id;
        this.nome = nome;
        this.email = email;
        this.telefones = converterTelefone(telefones);
    }
}

function converterTelefone(telefones) {
    let lista = [];
    telefones.forEach(telefone => {
        let novoTelefone = new Telefone(telefone.id, telefone.ddi, telefone.ddd, telefone.numero);
        lista.push(novoTelefone);
    });
    return lista;
}