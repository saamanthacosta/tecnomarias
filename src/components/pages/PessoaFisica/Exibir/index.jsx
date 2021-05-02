import { Container } from '@material-ui/core';
import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router';
import PessoaFisicaService from '../../../../services/PessoaFisicaService';
import PessoaFisica from '../../../../models/entities/PessoaFisica';
import MensagemErro from '../../../common/MensagemErro';
import Carregando from '../../../common/Carregando';
import Card from './Card'
import Botoes from './Botoes';

export default function ExibirPF() {

    const { id } = useParams()
    const [pf, setPf] = useState(null);
    const [mensagem, setMensagem] = useState(null);
    const [carregando, setCarregando] = useState(true);

    useEffect(() => {
        if (pf === null) {
            PessoaFisicaService.buscar(id).then(
                resposta => {
                    let pessoaFisica = new PessoaFisica(resposta.id, resposta.nome, resposta.email, resposta.telefoneList, resposta.links)
                    setPf(pessoaFisica)
                    setCarregando(false)
                }
            ).catch(
                erro => {
                    setMensagem("Não foi possível exibir essa pessoa.")
                    setCarregando(false)
                }
            )
        }
    }, [pf, id])

    return <>
        <Carregando aberto={carregando} setAberto={(e) => setCarregando(false)} />
        <Container maxWidth="sm">
            {
                mensagem && <MensagemErro mensagem={mensagem} />
            }
            {
                pf !== null &&
                <>
                    <Card pf={pf} />
                    <Botoes id={id} />
                </>
            }
        </Container>
    </>
}