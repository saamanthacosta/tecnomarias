import { Stepper, Step, StepLabel, Typography } from '@material-ui/core';
import React, { useEffect, useState } from 'react'
import PessoaJuridica from '../../../../../models/entities/PessoaJuridica';
import DadosUsuario from '../../../common/DadosUsuario';
import { vaziaOuNull } from '../../../../../utils/vaziaOuNull';
import DadosEmpresariais from '../DadosEmpresariais';
import DadosEndereco from '../DadosEndereco';

export default function Etapas({ dados = null, onSubmit, mensagem }) {

    const [etapaAtual, setEtapaAtual] = useState(0);
    const [pessoa, setPessoa] = useState(null);
    const [requisicaoNaoFoiRealizada, setRequisicaoNaoFoiRealizada] = useState(true);

    const enviarDadosParaOsForms = dados !== null ? true : false;

    const formularios = [
        <DadosUsuario aoEnviar={coletarDados} dados={enviarDadosParaOsForms ? pessoa : null} />,
        <DadosEmpresariais aoEnviar={coletarDados} voltar={voltar} dados={enviarDadosParaOsForms ? pessoa : null} />,
        <DadosEndereco aoEnviar={coletarDados} voltar={voltar} dados={enviarDadosParaOsForms ? pessoa : null} />,
        <Typography variant="h5">{mensagem}</Typography>,
    ];

    useEffect(() => {
        if (dados && etapaAtual === 0) {
            setPessoa(dados)
        }
        if (etapaAtual === formularios.length - 1 && requisicaoNaoFoiRealizada) {
            let idPessoa = vaziaOuNull(pessoa.id) ? null : pessoa.id
            let avaliacoes = vaziaOuNull(pessoa.avaliacoes) ? null : pessoa.avaliacoes;
            let mediaAvaliacao = vaziaOuNull(pessoa.mediaAvaliacao) ? null : pessoa.mediaAvaliacao;
            let pessoaJuridica = new PessoaJuridica(
                idPessoa, pessoa.nome, pessoa.email, pessoa.telefoneList,
                pessoa.cnpj, pessoa.site, pessoa.descricao, pessoa.porteEmpresa,
                pessoa.areaAtuacao, mediaAvaliacao, avaliacoes, pessoa.endereco
            )
            onSubmit(pessoaJuridica)
            setRequisicaoNaoFoiRealizada(false)
        }
        console.log(formularios.length + pessoa)
    }, [dados, onSubmit, pessoa, etapaAtual, formularios.length, requisicaoNaoFoiRealizada]);


    function coletarDados(novosDados) {
        setPessoa({ ...pessoa, ...novosDados });
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
        </>
    )
}