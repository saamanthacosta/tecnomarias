import React from 'react'
import { useState, useEffect } from 'react';
import DadosUsuario from '../common/DadosUsuario';
import DadosPessoais from '../common/DadosPessoais';
import DadosLinks from '../common/DadosLinks';
import { Container, Stepper, Step, StepLabel, Typography } from '@material-ui/core'

export default function EditarPF() {

    const [etapaAtual, setEtapaAtual] = useState(0);
    const [dadosColetados, setDados] = useState({});
    const [pf, setPf] = useState(null);

    const formularios = [
        <DadosUsuario aoEnviar={coletarDados} />,
        <DadosPessoais aoEnviar={coletarDados} voltar={voltar} dados={pf} />,
        <DadosLinks aoEnviar={coletarDados} voltar={voltar} dados={pf} />,
        <Typography variant="h5">Obrigado pelo Cadastro!</Typography>,
    ];

    useEffect(() => {
        if (pf === null) {
            var teste = {
                nome: 'Testando o nome',
                telefones: ["21 99999999", "21 991111111"],
                links: {
                    linkedin: "linkedin",
                    github: "github"
                }
            };
            setPf(teste)
        }
        if (etapaAtual === formularios.length - 1) {
            console.log(dadosColetados);
        }
    }, [pf, dadosColetados, etapaAtual, formularios.length]);

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