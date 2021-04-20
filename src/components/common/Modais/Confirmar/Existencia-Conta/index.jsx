import React from 'react';
import TextField from '@material-ui/core/TextField';
import DialogContentText from '@material-ui/core/DialogContentText';
import CheckCircleOutlineIcon from '@material-ui/icons/CheckCircleOutline';
import Modal from '../..';

export default function ConfirmarCadastro() {

  const conteudoModal = <>
    <DialogContentText id="alert-dialog-description">
      Antes de você realizar o cadastro, vamos confirmar se você já não tem um e-mail cadastrado com a gente! Insira seu e-mail no campo abaixo.
    </DialogContentText>
    <TextField
      autoFocus
      margin="dense"
      name="email"
      label="Email"
      type="email"
      fullWidth
    />
  </>

  const modal = {
    titulo: {
      nome: 'Tem certeza que é novo por aqui?',
      avatar: <CheckCircleOutlineIcon color="secondary" fontSize="large" />
    },
    conteudo: conteudoModal,
    botao: {
      abrir: {
        nome: 'Login',
        cor: 'primary'
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