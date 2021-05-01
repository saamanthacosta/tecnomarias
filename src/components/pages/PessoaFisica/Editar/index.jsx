import React from 'react'
import { useState, useEffect } from 'react';
import { Container } from '@material-ui/core'
import { useParams } from 'react-router';
import PessoaFisicaService from '../../../../services/PessoaFisicaService';
import PessoaFisica from '../../../../models/entities/PessoaFisica';
import Alerta from '../../../common/Alerta';
import { Severidade } from '../../../../models/enums/Severidade'
import Paper from '../../../common/Paper';
import Etapas from '../common/Etapas';
import { Link } from 'react-router-dom';
import { routes } from '../../../../config/routes';

export default function EditarPF() {

    const { id } = useParams()
    const [pf, setPf] = useState(null);
    const [mensagem, setMensagem] = useState(null)

    useEffect(() => {
        if (pf === null) {
            PessoaFisicaService.buscar(id).then(
                resposta => {
                    let pessoaFisica = new PessoaFisica(resposta.id, resposta.nome, resposta.email, resposta.telefoneList, resposta.links)
                    setPf(pessoaFisica)
                }
            )
        }
    }, [pf, id]);

    function alterar(pessoaFisica) {
        PessoaFisicaService.alterar(pessoaFisica).then(
            resposta => {
                let mensagemSucesso = <> A edição foi realizada com sucesso! Ela está disponível <Link to={`${routes.EXIBIR_PF}${resposta.data.id}`}>aqui</Link> </>
                let sucesso = <Alerta tipo={Severidade.SUCESSO} mensagem={mensagemSucesso} />
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
                    {
                        pf !== null &&
                        <Etapas dados={pf} onSubmit={alterar} mensagem={mensagem} />
                    }
                </Container>
            </Paper>
        </Container>
    </>
}