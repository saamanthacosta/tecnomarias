import React, { useState } from 'react';
import DialogContentText from '@material-ui/core/DialogContentText';
import CheckCircleOutlineIcon from '@material-ui/icons/CheckCircleOutline';
import InputTexto from '../../../Input/Texto'
import Modal from '../..';

export default function ConfirmarCadastro() {

  const [email, setEmail] = useState("");

  const conteudoModal = <>
    <DialogContentText >
      Antes de você realizar o cadastro, vamos confirmar se você já não tem um e-mail cadastrado com a gente! Insira seu e-mail no campo abaixo.
    </DialogContentText>
    <InputTexto
      type="email"
      label="Email"
      grande={true}
      required={true}
      onChange={(e) => setEmail(e.target.value)}
      textoDeAjuda="Insira o e-mail que você iria realizar cadastro conosco"
      value={email}
    />
  </>

  const modal = {
    titulo: {
      nome: 'Tem certeza que é novo por aqui?',
      avatar: <CheckCircleOutlineIcon color="primary" fontSize="large" />
    },
    conteudo: conteudoModal,
    botao: {
      abrir: {
        nome: 'Login',
      },
      acaoPrincipal: {
        nome: 'Verificar',
        cor: 'primary',
        funcao: confirmar
      },
      cancelar: true
    }
  }

  function confirmar() {
  }

  return <>
    <Modal modal={modal} />
  </>;
}