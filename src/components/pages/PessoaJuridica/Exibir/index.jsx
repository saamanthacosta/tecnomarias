import { Box, Container } from '@material-ui/core';
import React, { useEffect, useState } from 'react'
import DadosEndereco from '../common/DadosEndereco';
import DadosEmpresariais from '../common/DadosEmpresariais';
import { useHistory, useParams } from 'react-router';
import { routes } from '../../../../config/routes';
import InputTexto from '../../../common/Input/Texto';
import BotaoSimples from '../../../common/Botao/Simples';
import ConfirmarRemocaoPJ from '../../../common/Modais/Confirmar/Remocao/PJ';
import PessoaJuridicaService from '../../../../services/PessoaJuridicaService'
import PessoaJuridica from '../../../../models/entities/PessoaJuridica'

export default function ExibirPJ() {

    const { id } = useParams()
    const [pj, setPj] = useState(null);
    const history = useHistory();

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
    }, [pj, id])

    function voltar() {
        history.goBack();
    }

    function editar() {
        let rota = routes.EDITAR_PJ + id
        history.push(rota);
    }

    return <>
        <Container maxWidth="sm">
            {
                pj !== null &&
                <>
                 <InputTexto
                        type="email"
                        label="E-mail"
                        name="email"
                        value={pj.email}
                        readOnly={true}
                    />
                    <DadosEmpresariais paginaDeExibir dados={pj} />
                    <DadosEndereco paginaDeExibir dados={pj} />
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
                        <ConfirmarRemocaoPJ id={id} />
                    </Box>
                </>
            }
        </Container>
    </>
}