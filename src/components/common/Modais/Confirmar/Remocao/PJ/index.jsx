import React, { useState } from 'react';
import DialogContentText from '@material-ui/core/DialogContentText';
import HighlightOffIcon from '@material-ui/icons/HighlightOff';
import Modal from '../../..';
import PessoaJuridicaService from '../../../../../../services/PessoaJuridicaService';
import Alerta from '../../../../Alerta'
import { Severidade } from '../../../../../../models/enums/Severidade'
import Carregando from '../../../../Carregando';

export default function ConfirmarRemoçãoPJ({ id }) {

  const [mensagem, setMensagem] = useState("Essa ação é definitiva e não tem como ser desfeita. ");
  const [carregando, setCarregando] = useState(false);

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
    setCarregando(true);
    PessoaJuridicaService.remover(id).then(
      resposta => {
        let sucesso = <Alerta tipo={Severidade.SUCESSO} mensagem="Empresa deletada com sucesso!" />
        setMensagem(sucesso)
        setCarregando(false);
      }
    ).catch(
      resposta => {
        let erro = <Alerta tipo={Severidade.ERRO} mensagem="Ops! Não conseguimos deletar a empresa!" />
        setMensagem(erro)
        setCarregando(false);
      }
    );
  }

  return <>
  
  <Carregando aberto={carregando} setAberto={(e) => setCarregando(false)} />
    <Modal modal={modal} />
  </>;
}