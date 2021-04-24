import PessoaFisicaDTO from '../models/dto/PessoaFisicaDTO'
import TelefoneDTO from '../models/dto/TelefoneDTO';
import Telefone from '../models/entities/Telefone';

export function converterPf(pessoaFisica) {
    var telefones = verificarSeTelefonesEstaNulo(pessoaFisica.telefones)
    if (telefones !== null) {
        telefones = converterTelefone(telefones, pessoaFisica.id)
    }
    var novo = new PessoaFisicaDTO(
        pessoaFisica.id,
        pessoaFisica.nome,
        pessoaFisica.email,
        telefones,
        pessoaFisica.links.id,
        pessoaFisica.links.github,
        pessoaFisica.links.linkedin,
        pessoaFisica.links.portfolio,
        pessoaFisica.links.facebook,
    );
    return novo;
}

function verificarSeTelefonesEstaNulo(telefones) {
    let estaNulo = true;
    let estruturaInicial = new Telefone('', '', '', '', '');
    telefones.forEach(telefone => {
        if (telefone.completo !== estruturaInicial.completo) {
            estaNulo = false;
        }
    });
    return estaNulo ? null : telefones
}

function converterTelefone(telefones, id) {
    let lista = [];
    telefones.forEach(telefone => {
        let estruturaInicial = new Telefone('', '', '', '');
        if (telefone.completo !== estruturaInicial.completo) {
            let telefoneDTO = new TelefoneDTO(telefone.id, telefone.ddi, telefone.ddd, telefone.numero, id);
            lista.push(telefoneDTO)
        }
    });
    return lista;
}