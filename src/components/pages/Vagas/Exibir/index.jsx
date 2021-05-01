import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router';
import VagaService from '../../../../services/VagaService';
import Vaga from '../../../../models/entities/Vaga';
import Card from './Card'
import { Container } from '@material-ui/core';
import Botoes from './Botoes';

export default function ExibirVaga() {

    const { id } = useParams()
    const [vaga, setVaga] = useState(null);

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
                resposta => tratarVaga(resposta)
            )
        }
    }, [vaga, id])

    return <>
        {
            vaga !== null &&
            <Container maxWidth="sm">
                <Card vaga={vaga} />
                <Botoes id={id} />
            </Container>
        }
    </>
}