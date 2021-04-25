import React from 'react'
import { useState, useEffect } from 'react';
import DadosUsuario from '../common/DadosUsuario';
import DadosPessoais from '../common/DadosPessoais';
import DadosLinks from '../common/DadosLinks';
import { Container, Stepper, Step, StepLabel, Typography } from '@material-ui/core'
import { useParams } from 'react-router';
import PessoaFisicaService from '../../../../services/PessoaFisicaService';
import { converterPf } from '../../../../utils/conversorObj';
import PessoaFisica from '../../../../models/entities/PessoaFisica';

export default function EditarPF() {

    const { id } = useParams()
    const [etapaAtual, setEtapaAtual] = useState(0);
    const [pf, setPf] = useState(null);
    const [mensagem, setMensagem] = useState(null)

    const formularios = [
        <DadosUsuario aoEnviar={coletarDados} dados={pf} />,
        <DadosPessoais aoEnviar={coletarDados} voltar={voltar} dados={pf} />,
        <DadosLinks aoEnviar={coletarDados} voltar={voltar} dados={pf} />,
        <Typography variant="h5">{mensagem}</Typography>,
    ];

    useEffect(() => {
        if (pf === null) {
            PessoaFisicaService.buscar(id).then(
                resposta => {
                    let pessoaFisica = new PessoaFisica(resposta.id, resposta.nome, resposta.email, resposta.telefoneList, resposta.links)
                    setPf(pessoaFisica)
                }
            )
        }
        if (etapaAtual === formularios.length - 1) {
            var pessoaFisica =  converterPf(pf);
            PessoaFisicaService.alterar(pessoaFisica).then(
                resposta => {
                    setMensagem("A edição foi realizada com sucesso!")
                }
            ).catch(
                erro => {
                    setMensagem("Ops! Algo de errado aconteceu :(")
                }
            )
        }
    }, [pf, etapaAtual, formularios.length, id]);

    function coletarDados(dados) {
        setPf({ ...pf, ...dados });
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
            {
                pf !== null &&
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
            }
        </Container>
    </>
}