import React from 'react'
import BotaoSimples from '../Botao/Simples'

export default function Formulario({ corpo, autoComplete, noValidate, botao }) {

    return <>
        <form autoComplete={autoComplete} noValidate={noValidate} onSubmit={botao.funcao} >
            {corpo}
            <BotaoSimples
            nome="Voltar"
            onClick={this.context.router.history.goBack}
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