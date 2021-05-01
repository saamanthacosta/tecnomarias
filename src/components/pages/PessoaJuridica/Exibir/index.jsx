import { Container, Divider } from '@material-ui/core';
import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router';
import PessoaJuridicaService from '../../../../services/PessoaJuridicaService'
import PessoaJuridica from '../../../../models/entities/PessoaJuridica'
import Carregando from '../../../common/Carregando';
import ListarVagas from './ListarVagas';
import Botoes from './Botoes';
import CardPJ from './Card';
import MensagemErro from '../../../common/MensagemErro';

export default function ExibirPJ() {

    const { id } = useParams()
    const [pj, setPj] = useState(null);
    const [mensagem, setMensagem] = useState(null);
    const [carregando, setCarregando] = useState(true);

    useEffect(() => {
        if (pj === null) {
            PessoaJuridicaService.buscar(id).then(
                resposta => {
                    let pessoaJuridica = new PessoaJuridica(
                        resposta.id, resposta.nome, resposta.email,
                        resposta.telefoneList, resposta.cnpj, resposta.site,
                        resposta.descricao, resposta.porteEmpresa, resposta.areaAtuacao,
                        resposta.mediaAvaliacao, resposta.avaliacoes, resposta.endereco
                    )
                    setPj(pessoaJuridica)
                }
            ).catch(
                erro => {
                    setMensagem("Não foi possível exibir esse perfil.")
                }
            )
        }
        if (pj !== null) {
            setCarregando(false)

        }
    }, [pj, id])

    return <>
        <Carregando aberto={carregando} setAberto={(e) => setCarregando(false)} />
        <Container maxWidth="md">
            {
                mensagem && <MensagemErro mensagem={mensagem} />
            }
            {
                pj !== null &&
                <>
                    <CardPJ pj={pj} />
                    <Botoes id={id} />
                    <Divider />
                    <ListarVagas id={id} />
                </>
            }
        </Container>
    </>
}