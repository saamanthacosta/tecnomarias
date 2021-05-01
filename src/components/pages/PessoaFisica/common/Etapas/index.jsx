import {  Stepper, Step, StepLabel, Typography } from '@material-ui/core';
import React, { useEffect, useState } from 'react'
import PessoaFisica from '../../../../../models/entities/PessoaFisica';
import DadosUsuario from '../../../common/DadosUsuario';
import DadosLinks from '../DadosLinks';
import DadosPessoais from '../DadosPessoais';
import { vaziaOuNull } from '../../../../../utils/vaziaOuNull';

export default function Etapas({ dados=null, onSubmit, mensagem }) {

    const [etapaAtual, setEtapaAtual] = useState(0);
    const [pessoa, setPessoa] = useState(null);
    const [requisicaoNaoFoiRealizada, setRequisicaoNaoFoiRealizada] = useState(true);

    const enviarDadosParaOsForms = dados !== null ? pessoa : false; 

    const formularios = [
        <DadosUsuario aoEnviar={coletarDados} dados={enviarDadosParaOsForms} />,
        <DadosPessoais aoEnviar={coletarDados} voltar={voltar} dados={enviarDadosParaOsForms} />,
        <DadosLinks aoEnviar={coletarDados} voltar={voltar} dados={enviarDadosParaOsForms} />,
        <Typography variant="h5">{mensagem}</Typography>,
    ];

    useEffect(() => {
        if (dados) {
            setPessoa(dados)
        }
        if (etapaAtual === formularios.length - 1 && requisicaoNaoFoiRealizada) {
            let idPessoa = vaziaOuNull(pessoa.id) ? null : pessoa.id
            let pessoaFisica = new PessoaFisica(
                idPessoa, pessoa.nome, pessoa.email, pessoa.telefoneList, pessoa.links
             )
            onSubmit(pessoaFisica)
            setRequisicaoNaoFoiRealizada(false)
        }
    }, [dados, onSubmit, pessoa, etapaAtual, formularios.length, requisicaoNaoFoiRealizada]);

    
    function coletarDados(dados) {
        setPessoa({ ...pessoa, ...dados });
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

    return (
        <>
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
        </>
    )
}