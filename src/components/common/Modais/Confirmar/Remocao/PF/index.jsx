import React, { useState } from 'react';
import DialogContentText from '@material-ui/core/DialogContentText';
import HighlightOffIcon from '@material-ui/icons/HighlightOff';
import Modal from '../../..';
import PessoaFisicaService from '../../../../../../services/PessoaFisicaService';
import Alerta from '../../../../Alerta'
import { Severidade } from '../../../../../../models/enums/Severidade'

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
        let sucesso = <Alerta tipo={Severidade.SUCESSO} mensagem="Conta deletada com sucesso!" />
        setMensagem(sucesso)
      }
    ).catch(
      resposta => {
        let erro = <Alerta tipo={Severidade.ERRO} mensagem="Ops! Não conseguimos deletar a conta!" />
        setMensagem(erro)
      }
    );
  }

  return <>
    <Modal modal={modal} />
  </>;
}