import React from 'react'
import { useState, useEffect } from 'react';
import DadosUsuario from '../common/DadosUsuario';
import DadosEmpresariais from '../common/DadosEmpresariais';
import DadosEndereco from '../common/DadosEndereco';
import { Container, Stepper, Step, StepLabel, Typography } from '@material-ui/core'
import PessoaJuridicaService from '../../../../services/PessoaJuridicaService';
import PessoaJuridica from '../../../../models/entities/PessoaJuridica';
import { verificarTelefone } from '../../../../utils/conversorObj';

export default function CadastrarPJ() {

    const [etapaAtual, setEtapaAtual] = useState(0);
    const [pj, setPj] = useState(new PessoaJuridica(null, '', '', '', '', '', '', '', '', null, null, ''));
    const [mensagem, setMensagem] = useState(null);

    useEffect(() => {
        if (etapaAtual === formularios.length - 1) {
            let pessoaJuridica = verificarTelefone(pj);
            PessoaJuridicaService.criar(pessoaJuridica).then(
                resposta => {
                    setMensagem("Cadastro realizado com sucesso!")
                }
            ).catch(
                erro => {
                    setMensagem("Ops! Alguma coisa de errado aconteceu, seu cadastro não foi realizado.")
                }
            )
        }
    });

    const formularios = [
        <DadosUsuario aoEnviar={coletarDados} />,
        <DadosEmpresariais aoEnviar={coletarDados} voltar={voltar} />,
        <DadosEndereco aoEnviar={coletarDados} voltar={voltar} />,
        <Typography variant="h5">{mensagem}</Typography>,
    ];

    function coletarDados(dados) {
        setPj({ ...pj, ...dados });
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
                    <StepLabel>A Empresa</StepLabel>
                </Step>
                <Step onClick={voltarParaEtapaEspecifica(2)}>
                    <StepLabel>Endereço</StepLabel>
                </Step>
                <Step>
                    <StepLabel>Conclusão</StepLabel>
                </Step>
            </Stepper>
            {formularios[etapaAtual]}
        </Container>
    </>
}