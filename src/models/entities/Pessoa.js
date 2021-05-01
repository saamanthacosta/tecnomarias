import { vaziaOuNull } from "../../utils/vaziaOuNull";
import Telefone from "./Telefone";

export default class Pessoa {
    constructor(id, nome, email, telefoneList, tipoPessoa) {
        if (this.constructor === Pessoa){
            throw new Error("Você não deveria instanciar um objeto do tipo Pessoa diretamente, pois essa é uma classe abstata");
        }
        this.id = id;
        this.nome = nome;
        this.email = email;
        this.telefoneList = verificarTelefone(telefoneList);
        this.tipoPessoa = tipoPessoa
    }
}

function verificarTelefone(telefoneList, id) {
    var telefones = verificarSeTelefonesEstaNulo(telefoneList)
    if (telefones !== null) {
        telefones = converterTelefone(telefones, id)
    }
    return telefones;
}

function verificarSeTelefonesEstaNulo(telefones) {
    if (vaziaOuNull(telefones)) {
        return null;
    }
    let estaNulo = true;
    let estruturaInicial = [
        "+ () ",
        "+__ (__) ____-____",
        "+__ (__) _____-____",
    ]
    telefones.forEach(telefone => {
        let telefoneCompleto = `+${telefone.ddi} (${telefone.ddd}) ${telefone.numero}`
        if (!estruturaInicial.includes(telefoneCompleto)) {
            estaNulo = false;
        }
    });
    return estaNulo ? null : telefones
}

function converterTelefone(telefones, id) {
    let lista = [];
    let estruturaInicial = [
        "+ () ",
        "+__ (__) ____-____",
        "+__ (__) _____-____",
    ]
    telefones.forEach(telefone => {
        let telefoneCompleto = `+${telefone.ddi} (${telefone.ddd}) ${telefone.numero}`
        if (telefoneCompleto !== estruturaInicial) {
            let novoTelefone = new Telefone(telefone.id, telefone.ddi, telefone.ddd, telefone.numero, id);
            lista.push(novoTelefone)
        }
    });
    return lista;
}