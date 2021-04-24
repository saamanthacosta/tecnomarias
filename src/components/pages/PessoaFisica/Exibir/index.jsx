import { Box, Container } from '@material-ui/core';
import React, { useEffect, useState } from 'react'
import { useHistory, useParams } from 'react-router';
import PessoaFisicaService from '../../../../services/PessoaFisicaService';
import PessoaFisica from '../../../../models/entities/PessoaFisica';
import DadosLinks from '../common/DadosLinks';
import DadosPessoais from '../common/DadosPessoais';
import InputTexto from '../../../common/Input/Texto';
import { routes } from '../../../../config/routes';
import ConfirmarRemoçãoPF from '../../../common/Modais/Confirmar/Remocao/PF';
import BotaoSimples from '../../../common/Botao/Simples';

export default function ExibirPF() {

    const { id } = useParams()
    const [pf, setPf] = useState(null);
    const history = useHistory();

    useEffect(() => {
        if (pf === null) {
            PessoaFisicaService.buscar(id).then(
                resposta => {
                    let pessoaFisica = new PessoaFisica(resposta.id, resposta.nome, resposta.email, resposta.telefoneList, resposta.links)
                    setPf(pessoaFisica)
                }
            )
        }
    }, [pf, id])

    function editar() {
        let rota = routes.EDITAR_PF + id
        history.push(rota);
    }

    function voltar() {
        history.goBack();
    }

    return <>
        <Container maxWidth="sm">
            <form>
                <>
                    {
                        pf !== null &&
                        <>
                            <InputTexto
                                type="email"
                                label="E-mail"
                                name="email"
                                value={pf.email}
                                readOnly={true}
                            />
                            <DadosPessoais paginaDeExibir dados={pf} />
                            <DadosLinks paginaDeExibir dados={pf} />
                            <Box component="span" m={15}>
                                <BotaoSimples
                                    customizado={true}
                                    variant="outlined"
                                    onClick={voltar}
                                    nome="Voltar"
                                />
                                <BotaoSimples
                                    customizado={true}
                                    variant="contained"
                                    onClick={editar}
                                    nome="Editar"
                                    cor="primary"
                                />
                                <ConfirmarRemoçãoPF id={id} />
                            </Box>
                        </>
                    }
                </>
            </form>
        </Container>
    </>
}