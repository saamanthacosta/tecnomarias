import { Container } from '@material-ui/core';
import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router';
import Vaga from '../../../../models/entities/Vaga';
import VagaService from '../../../../services/VagaService';
import DadosVaga from '../common/DadosVaga';
import Alerta from '../../../common/Alerta';
import Paper from '../../../common/Paper';
import { Severidade } from '../../../../models/enums/Severidade'

export default function EditarVaga() {

    const { id } = useParams()
    const [vaga, setVaga] = useState(null);
    const [mensagem, setMensagem] = useState(null)

    useEffect(() => {
        function tratarVaga(resposta) {
            let novaVaga = new Vaga(
                resposta.id,
                resposta.idEmpresa,
                resposta.areaAtuacao,
                resposta.cargo,
                resposta.descricao,
                resposta.valor,
                resposta.localidade
            )
            setVaga(novaVaga);
        }
        if (vaga === null) {
            VagaService.buscar(id).then(
                resposta => tratarVaga(resposta)
            )
        }
    }, [vaga, id]);

    const onSubmit = (vaga) => (event) => {
        event.preventDefault();
        setVaga(vaga);
        VagaService.alterar(vaga).then(
            resposta => {
                let sucesso = <Alerta tipo={Severidade.SUCESSO} mensagem="A edição foi realizada com sucesso!" />
                setMensagem(sucesso)
            }
        ).catch(
            resposta => {
                let erro = <Alerta tipo={Severidade.ERRO} mensagem="Ops! Algo de errado aconteceu!" />
                setMensagem(erro)
            }
        )
    }

    return (
        <Container maxWidth="sm">
            {mensagem}
            <Paper>
                <Container maxWidth="sm">
                    {
                        vaga !== null &&
                        <>
                            <DadosVaga
                                dados={vaga}
                                onSubmit={onSubmit}
                            />
                        </>
                    }
                </Container>
            </Paper>
        </Container>
    )
}