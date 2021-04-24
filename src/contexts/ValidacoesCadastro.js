import React from "react";

const ValidacoesCadastro = React.createContext({
  senha: semValidacao,
  nome: semValidacao,
  email: semValidacao
});

function semValidacao(dados) {
  return { valido: true, texto: "" };
}

export default ValidacoesCadastro;
