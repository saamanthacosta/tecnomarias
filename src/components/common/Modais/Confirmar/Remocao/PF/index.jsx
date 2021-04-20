import React from 'react';
import DialogContentText from '@material-ui/core/DialogContentText';
import HighlightOffIcon from '@material-ui/icons/HighlightOff';
import Modal from '../../..';

export default function ConfirmarRemoçãoPF() {

  const conteudoModal = <>
    <DialogContentText id="alert-dialog-description">
      Essa ação é definitiva e não tem como ser desfeita.   
    </DialogContentText>
  </>

  const modal = {
    titulo: {
      nome: 'Excluir conta',
      avatar: <HighlightOffIcon color="secondary" fontSize="large" />
    },
    conteudo: conteudoModal,
    botao: {
      abrir: {
        nome: 'Excluir conta',
        cor: 'primary'
      },
      acaoPrincipal: {
        nome: 'Confirmar',
        cor: 'secondary',
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