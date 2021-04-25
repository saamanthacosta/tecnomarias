import Telefone from '../models/entities/Telefone';

export function converterPf(pessoaFisica) {
    var telefones = verificarSeTelefonesEstaNulo(pessoaFisica.telefoneList)
    if (telefones !== null) {
        telefones = converterTelefone(telefones, pessoaFisica.id)
    }
    pessoaFisica.telefoneList = telefones
    return pessoaFisica;
}

function verificarSeTelefonesEstaNulo(telefones) {
    let estaNulo = true;
    let estruturaInicial = "+ () ";
    telefones.forEach(telefone => {
        let telefoneCompleto = `+${telefone.ddi} (${telefone.ddd}) ${telefone.numero}`
        if (telefoneCompleto !== estruturaInicial) {
            estaNulo = false;
        }
    });
    return estaNulo ? null : telefones
}

function converterTelefone(telefones, id) {
    let lista = [];
    let estruturaInicial = "+ () ";
    telefones.forEach(telefone => {
        let telefoneCompleto = `+${telefone.ddi} (${telefone.ddd}) ${telefone.numero}`
        if (telefoneCompleto !== estruturaInicial) {
            let novoTelefone = new Telefone(telefone.id, telefone.ddi, telefone.ddd, telefone.numero, id);
            lista.push(novoTelefone)
        }
    });
    return lista;
}