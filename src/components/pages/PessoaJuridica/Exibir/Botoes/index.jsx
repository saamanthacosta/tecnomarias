import { Box } from '@material-ui/core';
import React from 'react'
import { useHistory } from 'react-router';
import { routes } from '../../../../../config/routes';
import BotaoSimples from '../../../../common/Botao/Simples';
import ConfirmarRemoçãoPJ from '../../../../common/Modais/Confirmar/Remocao/PJ';

export default function Botoes({ id }) {

    const history = useHistory();

    return (
        <Box component="span" m={25}>
            <BotaoSimples
                variant="outlined"
                onClick={(e) => history.goBack()}
                nome="Voltar"
            />
            <BotaoSimples
                variant="contained"
                onClick={(e) => history.push(routes.CADASTRAR_VAGA + id)}
                nome="Criar Vaga"
                cor="primary"
            />
            <BotaoSimples
                variant="contained"
                onClick={(e) => history.push(routes.EDITAR_PJ + id)}
                nome="Editar"
                cor="primary"
            />
            <ConfirmarRemoçãoPJ id={id} />
        </Box>
    )
}