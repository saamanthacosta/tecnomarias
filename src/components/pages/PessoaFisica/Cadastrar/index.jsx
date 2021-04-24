import React from 'react'
import { useState, useEffect } from 'react';
import DadosUsuario from '../common/DadosUsuario';
import DadosPessoais from '../common/DadosPessoais';
import DadosLinks from '../common/DadosLinks';
import { Container, Stepper, Step, StepLabel, Typography } from '@material-ui/core'
import { converterPf } from '../../../../utils/conversorObj';
import PessoaFisicaService from '../../../../services/PessoaFisicaService';

export default function CadastrarPF() {

    const [etapaAtual, setEtapaAtual] = useState(0);
    const [dadosColetados, setDados] = useState({});

    useEffect(() => {
        if (etapaAtual === formularios.length - 1) {
            var pessoaFisica = converterPf(dadosColetados);
            PessoaFisicaService.criar(pessoaFisica).then(
                resposta => {
                    console.log(resposta);
                }
            ).catch(
                erro => {
                    console.log(erro);
                }
            )
        }
    });

    const formularios = [
        <DadosUsuario aoEnviar={coletarDados} />,
        <DadosPessoais aoEnviar={coletarDados} voltar={voltar} />,
        <DadosLinks aoEnviar={coletarDados} voltar={voltar} />,
        <Typography variant="h5">Obrigado pelo Cadastro!</Typography>,
    ];

    function coletarDados(dados) {
        setDados({ ...dadosColetados, ...dados });
        proximo();
    }

    function proximo() {
        setEtapaAtual(etapaAtual + 1);
    }

    function voltar() {
        setEtapaAtual(etapaAtual - 1);
    }

    const voltarParaEtapaEspecifica = (etapa) => (e) => {
        if (etapa < etapaAtual) {
            setEtapaAtual(etapa)
        }
    }

    return <>
        <Container maxWidth="sm">
            <Stepper activeStep={etapaAtual}>
                <Step onClick={voltarParaEtapaEspecifica(0)}>
                    <StepLabel>Login</StepLabel>
                </Step>
                <Step onClick={voltarParaEtapaEspecifica(1)}>
                    <StepLabel>Pessoal</StepLabel>
                </Step>
                <Step onClick={voltarParaEtapaEspecifica(2)}>
                    <StepLabel>Links</StepLabel>
                </Step>
                <Step>
                    <StepLabel>Conclusão</StepLabel>
                </Step>
            </Stepper>
            {formularios[etapaAtual]}
        </Container>
    </>
}