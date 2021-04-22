import React from 'react'
import BotaoSimples from '../Botao/Simples'
import PropTypes from 'prop-types';
import { useHistory } from "react-router-dom";

export default function Formulario({ corpo, autoComplete, noValidate, botao }) {

    let history = useHistory();

    return <>
        <form autoComplete={autoComplete} noValidate={noValidate} onSubmit={botao.funcao} >
            {corpo}
            <BotaoSimples
            nome="Voltar"
            onClick={history.goBack}
            cor="primary"
            />
            <BotaoSimples
            variant="contained"
            nome={botao.nome}
            onClick={botao.funcao}
            cor={botao.cor}
            />
        </form>
    </>
}

InputTexto.propTypes = {
    corpo: PropTypes.element.isRequired,
    autoComplete: PropTypes.bool,
    noValidate: PropTypes.bool,
}

InputTexto.defaultProps = {
    autoComplete: false,
    noValidate: false
}