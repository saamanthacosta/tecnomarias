import Telefone from "./Telefone";

export default class Pessoa {
    constructor(id, nome, email, telefoneList, tipoPessoa) {
        if (this.constructor === Pessoa){
            throw new Error("Você não deveria instanciar um objeto do tipo Pessoa diretamente, pois essa é uma classe abstata");
        }
        this.id = id;
        this.nome = nome;
        this.email = email;
        this.telefoneList = converterTelefone(telefoneList, id);
        this.tipoPessoa = tipoPessoa
    }
}

function converterTelefone(telefones, id) {
    if (telefones.length === 0 || telefones === null) {
        return null;
    }
    let lista = [];
    telefones.forEach(telefone => {
        let novoTelefone = new Telefone(telefone.id, telefone.ddi, telefone.ddd, telefone.numero, id);
        lista.push(novoTelefone);
    });
    return lista;
}