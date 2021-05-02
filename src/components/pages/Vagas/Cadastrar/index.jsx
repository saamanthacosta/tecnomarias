import { Container, Typography } from '@material-ui/core';
import React, { useState } from 'react'
import VagaService from '../../../../services/VagaService';
import DadosVaga from '../common/DadosVaga';
import Alerta from '../../../common/Alerta';
import Paper from '../../../common/Paper';
import { Severidade } from '../../../../models/enums/Severidade'
import { useParams } from 'react-router';
import { Link } from 'react-router-dom';
import { routes } from '../../../../config/routes';
import Carregando from '../../../common/Carregando';

export default function CadastrarVaga() {

    const { id } = useParams()
    const [mensagem, setMensagem] = useState(null)
    const [carregando, setCarregando] = useState(false);

    const onSubmit = (dados) => (event) => {
        event.preventDefault();
        setCarregando(true)
        dados.idEmpresa = id;
        dados.id = null;
        VagaService.criar(dados).then(
            resposta => {
                let mensagemSucesso = <> A vaga foi criada com sucesso! Ela está disponível <Link to={`${routes.EXIBIR_VAGA}${resposta.data.id}`}>aqui</Link> </>
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
        {mensagem}
        <Container maxWidth="sm">
            <Paper>
                <Container maxWidth="sm">
                    <Typography align='center' variant='h5' style={{ height: '50px' }}>Cadastrar uma Vaga</Typography>
                    <DadosVaga
                        onSubmit={onSubmit}
                    />
                </Container>
            </Paper>
        </Container>
    </>
}