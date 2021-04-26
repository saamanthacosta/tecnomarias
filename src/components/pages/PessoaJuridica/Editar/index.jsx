import React from 'react'
import { useState, useEffect } from 'react';
import DadosUsuario from '../common/DadosUsuario';
import DadosEmpresariais from '../common/DadosEmpresariais';
import DadosEndereco from '../common/DadosEndereco';
import { Container, Stepper, Step, StepLabel, Typography } from '@material-ui/core'
import PessoaJuridicaService from '../../../../services/PessoaJuridicaService'
import PessoaJuridica from '../../../../models/entities/PessoaJuridica'
import { useParams } from 'react-router';
import { verificarTelefone } from '../../../../utils/conversorObj';

export default function EditarPJ() {

    const { id } = useParams()
    const [etapaAtual, setEtapaAtual] = useState(0);
    const [pj, setPj] = useState(null);
    const [mensagem, setMensagem] = useState(null)


    const formularios = [
        <DadosUsuario aoEnviar={coletarDados} dados={pj} />,
        <DadosEmpresariais aoEnviar={coletarDados} voltar={voltar} dados={pj} />,
        <DadosEndereco aoEnviar={coletarDados} voltar={voltar} dados={pj} />,
        <Typography variant="h5">{mensagem}</Typography>,
    ];

    useEffect(() => {
        if (pj === null) {
            PessoaJuridicaService.buscar(id).then(
                resposta => {
                    let pessoaJuridica = new PessoaJuridica(
                        resposta.id, 
                        resposta.nome, 
                        resposta.email, 
                        resposta.telefoneList, 
                        resposta.cnpj,
                        resposta.site,
                        resposta.descricao,
                        resposta.porteEmpresa,
                        resposta.areaAtuacao,
                        resposta.mediaAvaliacao,
                        resposta.avaliacoes,
                        resposta.endereco
                        )
                    setPj(pessoaJuridica)
                }
            )
        }
        if (etapaAtual === formularios.length - 1) {
            var pessoaJuridica =  verificarTelefone(pj);
            PessoaJuridicaService.alterar(pessoaJuridica).then(
                resposta => {
                    setMensagem("A edição foi realizada com sucesso!")
                }
            ).catch(
                erro => {
                    setMensagem("Ops! Algo de errado aconteceu :(")
                }
            )
        }
    }, [pj, etapaAtual, formularios.length, id]);

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
            {
                pj !== null &&
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