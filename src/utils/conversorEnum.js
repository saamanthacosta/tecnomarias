import { Cargo } from "../models/entities/Cargo";
import { PorteEmpresa } from "../models/entities/PorteEmpresa";
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

export function converterEnumPorteEmpresa(porteEmpresa) {
    let porteEmpresaConvertido = null;

    switch(porteEmpresa) {
        case PorteEmpresa.MICROEMPRESA:
            porteEmpresaConvertido = 'ESTAGIARIA';
            break;
        case PorteEmpresa.EMPRESA_PEQUENO_PORTE:
            porteEmpresaConvertido = 'EMPRESA_PEQUENO_PORTE';
            break;
        case PorteEmpresa.EMPRESA_MEDIO_PORTE:
            porteEmpresaConvertido = 'EMPRESA_MEDIO_PORTE';
            break;
        case PorteEmpresa.GRANDE_EMPRESA:
            porteEmpresaConvertido = 'GRANDE_EMPRESA';
            break;
    }

    return porteEmpresaConvertido;
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