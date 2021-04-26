import React, { useState } from 'react';
import DialogContentText from '@material-ui/core/DialogContentText';
import HighlightOffIcon from '@material-ui/icons/HighlightOff';
import Modal from '../../..';
import PessoaJuridicaService from '../../../../../../services/PessoaJuridicaService';

export default function ConfirmarRemoçãoPJ({ id }) {

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
    PessoaJuridicaService.remover(id).then(
      resposta => {
        setMensagem("Empresa deletada com sucesso!")
      }
    ).catch(
      erro => {
        setMensagem("Ops! Não conseguimos deletar a empresa!")
      }
    );
  }

  return <>
    <Modal modal={modal} />
  </>;
}