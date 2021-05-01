import React from 'react'
import { useState } from 'react';
import { Container } from '@material-ui/core'
import PessoaFisicaService from '../../../../services/PessoaFisicaService';
import Alerta from '../../../common/Alerta';
import { Severidade } from '../../../../models/enums/Severidade'
import Paper from '../../../common/Paper';
import Etapas from '../common/Etapas';

export default function CadastrarPF() {

    const [mensagem, setMensagem] = useState(null)

    function cadastrar(pessoaFisica) {
        PessoaFisicaService.criar(pessoaFisica).then(
            resposta => {
                let sucesso = <Alerta tipo={Severidade.SUCESSO} mensagem="A conta foi criada com sucesso!" />
                setMensagem(sucesso)
            }
        ).catch(
            resposta => {
                let erro = <Alerta tipo={Severidade.ERRO} mensagem="Ops! Algo de errado aconteceu!" />
                setMensagem(erro)
            }
        )
    }

    return <>
        <Container maxWidth="sm">
            <Paper>
                <Container maxWidth="sm">
                    <Etapas onSubmit={cadastrar} mensagem={mensagem} />
                </Container>
            </Paper>
        </Container>
    </>
}