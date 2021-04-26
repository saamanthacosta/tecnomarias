import React, { useState } from 'react';
import DialogContentText from '@material-ui/core/DialogContentText';
import HighlightOffIcon from '@material-ui/icons/HighlightOff';
import Modal from '../../..';
import PessoaFisicaService from '../../../../../../services/PessoaFisicaService';

export default function ConfirmarRemoçãoPF({ id }) {

  const [mensagem, setMensagem] = useState("Essa ação é definitiva e não tem como ser desfeita. ");

  const conteudoModal = <>
    <DialogContentText>
      {mensagem}
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
        nome: 'Excluir',
        cor: 'secondary'
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
    PessoaFisicaService.remover(id).then(
      resposta => {
        setMensagem("Conta deletada com sucesso!")
      }
    ).catch(
      erro => {
        setMensagem("Ops! Não conseguimos deletar a conta!")
      }
    );
  }

  return <>
    <Modal modal={modal} />
  </>;
}