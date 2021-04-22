import { Box } from "@material-ui/core";
import React, { useState } from "react";
import BotaoSimples from "../../../../common/Botao/Simples";
import Formulario from "../../../../common/Formulario";
import InputSenha from "../../../../common/Input/Senha";
import InputTexto from "../../../../common/Input/Texto";

export default function DadosUsuario({ aoEnviar }) {
    const [email, setEmail] = useState("");
    const [senha, setSenha] = useState("");

    function proximo(event) {
        event.preventDefault();
        aoEnviar({ email, senha });
    }

    return (
        <Formulario onSubmit={proximo}>
            <>
            <InputTexto
                type="email"
                label="E-mail"
                required={true}
                textoDeAjuda="Esse e-mail será utilizado para acessar a plataforma"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
            />
            <InputSenha
                id="pf-senha"
                label="Senha"
                onChange={(e) => setSenha(e.target.value)}
                value={senha}
                textoDeAjuda="A senha deverá ter pelo menos 4 caracteres"
                grande={true}
            />
            <InputSenha
                id="confirmar-pf-senha"
                label="Confirmar a senha"
                onChange={(e) => setSenha(e.target.value)}
                value={senha}
                textoDeAjuda="Confirme a sua senha"
                grande={true}
            />
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
            </>
        </Formulario>
    );
}
