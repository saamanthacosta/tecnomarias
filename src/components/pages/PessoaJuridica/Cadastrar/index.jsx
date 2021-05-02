import React from 'react'
import { useState } from 'react';
import { Container } from '@material-ui/core'
import PessoaJuridicaService from '../../../../services/PessoaJuridicaService';
import Alerta from '../../../common/Alerta';
import { Severidade } from '../../../../models/enums/Severidade'
import Paper from '../../../common/Paper';
import Etapas from '../common/Etapas';
import { Link } from 'react-router-dom';
import { routes } from '../../../../config/routes';
import Carregando from '../../../common/Carregando';

export default function CadastrarPJ() {

    const [mensagem, setMensagem] = useState(null);
    const [carregando, setCarregando] = useState(false);

    function cadastrar(pessoaJuridica) {
        setCarregando(true)
        PessoaJuridicaService.criar(pessoaJuridica).then(
            resposta => {
                let mensagemSucesso = <> A conta foi criada com sucesso! Ela está disponível <Link to={`${routes.EXIBIR_PJ}${resposta.data.id}`}>aqui</Link> </>
                let sucesso = <Alerta tipo={Severidade.SUCESSO} mensagem={mensagemSucesso} />
                setMensagem(sucesso)
                setCarregando(false)
            }
        ).catch(
            resposta => {
                let erro = <Alerta tipo={Severidade.ERRO} mensagem="Ops! Algo de errado aconteceu!" />
                setMensagem(erro)
                setCarregando(false)
            }
        )
    }

    return <>
    <Carregando aberto={carregando} setAberto={(e) => setCarregando(false)} />
        <Container maxWidth="sm">
            <Paper>
                <Container maxWidth="sm">
                    <Etapas onSubmit={cadastrar} mensagem={mensagem} />
                </Container>
            </Paper>
        </Container>
    </>
}