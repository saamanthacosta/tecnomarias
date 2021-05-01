import React, { useState, useContext, useRef, useEffect } from "react";
import { Box } from "@material-ui/core";
import ValidacoesCadastro from "../../../../contexts/ValidacoesCadastro";
import BotaoSimples from "../../../common/Botao/Simples";
import InputTexto from "../../../common/Input/Texto";
import useErros from '../../../../hooks/useErros';

export default function DadosUsuario({ aoEnviar, dados }) {
    const formRef = useRef();
    const [email, setEmail] = useState("");
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
        if (formRef.current.reportValidity() && possoEnviar()) {
            aoEnviar({ email });
        }
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
            <Box component="span" m={25}>
                <BotaoSimples
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
