import Telefone from '../models/entities/Telefone';
import { vaziaOuNull } from './vaziaOuNull';

export function verificarTelefone(pessoa) {
    var telefones = verificarSeTelefonesEstaNulo(pessoa.telefoneList)
    if (telefones !== null) {
        telefones = converterTelefone(telefones, pessoa.id)
    }
    pessoa.telefoneList = telefones
    return pessoa;
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