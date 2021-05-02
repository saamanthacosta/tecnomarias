import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router';
import VagaService from '../../../../services/VagaService';
import Vaga from '../../../../models/entities/Vaga';
import Card from './Card'
import { Container } from '@material-ui/core';
import Botoes from './Botoes';
import Carregando from '../../../common/Carregando';
import MensagemErro from '../../../common/MensagemErro';

export default function ExibirVaga() {

    const { id } = useParams()
    const [vaga, setVaga] = useState(null);
    const [mensagemErro, setMensagemErro] = useState(null)
    const [carregando, setCarregando] = useState(false);

    useEffect(() => {
        function tratarVaga(resposta) {
            let novaVaga = new Vaga(
                resposta.id,
                resposta.idEmpresa,
                resposta.areaAtuacao,
                resposta.cargo,
                resposta.descricao,
                resposta.valor,
                resposta.localidade
            )
            setVaga(novaVaga);
        }
        if (vaga === null) {
            VagaService.buscar(id).then(
                resposta => {
                    tratarVaga(resposta)
                    setCarregando(false)
                }
            ).catch(
                erro => {
                    setMensagemErro("Não foi possível exibir essa vagas.")
                    setCarregando(false)
                }
            )
        }
    }, [vaga, id])

    return <>
        <Carregando aberto={carregando} setAberto={(e) => setCarregando(false)} />
        <Container maxWidth="sm">
            {
                mensagemErro && <MensagemErro mensagem={mensagemErro} />
            }
            {
                vaga !== null &&
                <>
                    <Card vaga={vaga} />
                    <Botoes id={id} />
                </>
            }
        </Container>
    </>
}