import { Box } from '@material-ui/core';
import React from 'react'
import { useHistory } from 'react-router';
import { routes } from '../../../../../config/routes';
import BotaoSimples from '../../../../common/Botao/Simples';
import ConfirmarRemocaoVaga from '../../../../common/Modais/Confirmar/Remocao/Vaga';

export default function Botoes({ id }) {

    const history = useHistory();

    return (
        <Box component="span" m={13}>
            <BotaoSimples
                variant="outlined"
                onClick={(e) => history.goBack()}
                nome="Voltar"
            />
            <BotaoSimples
                variant="contained"
                onClick={(e) => history.push(routes.EDITAR_VAGA + id)}
                nome="Editar"
                cor="primary"
            />
            <ConfirmarRemocaoVaga id={id} />
        </Box>
    )
}