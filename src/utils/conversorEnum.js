import { Cargo } from "../models/entities/Cargo";
import { TipoEndereco } from "../models/entities/TipoEndereco";
import { TipoPessoa } from "../models/entities/TipoPessoa";

export function converterEnumCargo(cargo) {
    let cargoConvertido = null;

    switch(cargo) {
        case Cargo.ESTAGIARIA:
            cargoConvertido = 'ESTAGIARIA';
            break;
        case Cargo.GERENTE:
            cargoConvertido = 'GERENTE';
            break;
        case Cargo.PLENO:
            cargoConvertido = 'PLENO';
            break;
        case Cargo.JUNIOR:
            cargoConvertido = 'JUNIOR';
            break;
        case Cargo.SENIOR:
            cargoConvertido = 'SENIOR';
            break;
    }

    return cargoConvertido;
}

export function converterEnumTipoEndereco(tipoEndereco) {
    let tipoEnderecoConvertido = null;

    switch(tipoEndereco) {
        case TipoEndereco.RESIDENCIAL:
            tipoEnderecoConvertido = 'RESIDENCIAL';
            break;
        case TipoEndereco.COMERCIAL:
            tipoEnderecoConvertido = 'COMERCIAL';
            break;
        case TipoEndereco.FISCAL:
            tipoEnderecoConvertido = 'FISCAL';
            break;
    }

    return tipoEnderecoConvertido;
}

export function converterEnumTipoPessoa(tipoPessoa) {
    let tipoPessoaConvertido = null;

    switch(tipoPessoa) {
        case TipoPessoa.PESSOA_FISICA:
            tipoPessoaConvertido = 'PESSOA_FISICA';
            break;
        case TipoPessoa.PESSOA_JURIDICA:
            tipoPessoaConvertido = 'PESSOA_JURIDICA';
            break;
    }

    return tipoPessoaConvertido;
}