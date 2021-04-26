import React, { useState, useContext, useRef, useEffect } from "react";
import { Box } from "@material-ui/core";
import ValidacoesCadastro from "../../../../../contexts/ValidacoesCadastro";
import BotaoSimples from "../../../../common/Botao/Simples";
import InputSenha from "../../../../common/Input/Senha";
import InputTexto from "../../../../common/Input/Texto";
import useErros from '../../../../../hooks/useErros';

export default function DadosUsuario({ aoEnviar, dados }) {
    const formRef = useRef();
    const [email, setEmail] = useState("");
    const [senha, setSenha] = useState("");
    const [confirmacaoSenha, setConfirmacaoSenha] = useState("");
    const validacoes = useContext(ValidacoesCadastro)
    const [erros, validarCampos, possoEnviar] = useErros(validacoes);

    useEffect(() => {
        if (dados) {
            setEmail(dados.email);
        }
    }, [dados])

    function proximo(event) {
        event.preventDefault();
        formRef.current.reportValidity()
        if (formRef.current.reportValidity() && possoEnviar() && senha === confirmacaoSenha) {
            aoEnviar({ email, senha });
        }
    }

    const mudarState = (props) => (e) => {
        props();
        possoEnviar();
    }

    return (
        <form onSubmit={proximo} ref={formRef}>
            <InputTexto
                type="email"
                label="E-mail"
                name="email"
                required={true}
                onBlur={validarCampos}
                textoDeAjuda={erros.email.texto}
                erro={!erros.email.valido}
                value={email}
                onChange={(e) => setEmail(e.target.value)}
            />
            {/* <InputSenha
                id="pf-senha"
                label="Senha"
                name="senha"
                onBlur={validarCampos}
                onChange={(e) => mudarState(setSenha(e.target.value))}
                erro={!erros.senha.valido}
                value={senha}
                textoDeAjuda="Sua senha deve possuir o mínimo de oito e máximo de doze caracteres, pelo menos uma letra maiúscula, uma letra minúscula, um número e um caractere especial"
                grande={true}
            />
            <InputSenha
                id="confirmar-pf-senha"
                label="Confirmar a senha"
                name="confirmarSenha"
                onBlur={confirmacaoSenha !== senha}
                onChange={(e) => mudarState(setConfirmacaoSenha(e.target.value))}
                erro={confirmacaoSenha !== senha}
                value={confirmacaoSenha}
                textoDeAjuda={confirmacaoSenha !== senha ? "Essa senha não bate com a anterior!" : ""}
                grande={true}
            /> */}
            <Box component="span" m={25}>
                <BotaoSimples
                    customizado={true}
                    type="submit"
                    variant="contained"
                    onClick={proximo}
                    nome="Próximo"
                    cor="primary"
                />
            </Box>
        </form>
    );
}
