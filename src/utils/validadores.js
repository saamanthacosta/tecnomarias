import { EMAIL, NOME, SENHA } from './regex';

export function validarSenha(senha) {
    if (senha.match(SENHA)) {
        return { valido: true };
    } else {
        return { valido: false };
    }
}

export function validarNome(nome) {
    if (nome.length === 0) {
        return { valido: false, texto: "O nome não pode ficar vazio" }
    } if (nome.match(NOME)) {
        return { valido: true, texto: "" };
    } else {
        return { valido: false, texto: "Cada nome deve possuir pelo menos três caracteres, não sendo aceito números e nem caracteres especiais" };
    }
}

export function validarEmail(email) {
    if (email.length === 0) {
        return { valido: false, texto: "É necessário inserir um e-mail" };
    } else if (email.match(EMAIL)) {
        return { valido: true, texto: "" };
    } else {
        return { valido: false, texto: "Um e-mail válido deve conter um @dominio.com" };
    }
}