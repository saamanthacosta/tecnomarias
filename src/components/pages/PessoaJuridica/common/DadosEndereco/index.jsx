import React, { useEffect, useState } from "react";
import BotaoSimples from "../../../../common/Botao/Simples";
import Formulario from "../../../../common/Formulario";
import InputTexto from "../../../../common/Input/Texto";
import { Box } from "@material-ui/core";
import { vaziaOuNull } from "../../../../../utils/vaziaOuNull";

export default function DadosEndereco({ aoEnviar, voltar, paginaDeExibir, dados }) {
    const [links, setLinks] = useState({
        facebook: '',
        github: '',
        portfolio: '',
        linkedin: '',
    });

    useEffect(() => {
        if (dados) {
          setLinks(dados.links)
        }
    }, [dados])

    function proximo(event) {
        event.preventDefault();
        aoEnviar({ links });
    }

    const onChangeLink = (prop) => (event) => {
        setLinks({ ...links, [prop]: event.target.value });
    }

    return (
        <Formulario onSubmit={proximo}>
            <>
                <InputTexto
                    type="text"
                    label="Facebook"
                    textoDeAjuda={paginaDeExibir ? null : "Insira o link do seu Facebook"}
                    readOnly={paginaDeExibir ? true : false}
                    disabled={paginaDeExibir && vaziaOuNull(links.facebook)}
                    value={links.facebook}
                    onChange={onChangeLink('facebook')}
                />
                <InputTexto
                    type="text"
                    label="LinkedIN"
                    textoDeAjuda={paginaDeExibir ? null : "Insira o link do seu LinkedIN"}
                    readOnly={paginaDeExibir ? true : false}
                    disabled={paginaDeExibir && vaziaOuNull(links.linkedin)}
                    value={links.linkedin}
                    onChange={onChangeLink('linkedin')}
                />
                <InputTexto
                    type="text"
                    label="Portfólio"
                    textoDeAjuda={paginaDeExibir ? null : "Insira o link do seu portfólio"}
                    readOnly={paginaDeExibir ? true : false}
                    disabled={paginaDeExibir && vaziaOuNull(links.portfolio)}
                    value={links.portfolio}
                    onChange={onChangeLink('portfolio')}
                />
                <InputTexto
                    type="text"
                    label="GitHub"
                    textoDeAjuda={paginaDeExibir ? null : "Insira o link do seu GitHub"}
                    readOnly={paginaDeExibir ? true : false}
                    disabled={paginaDeExibir && vaziaOuNull(links.github)}
                    value={links.github}
                    onChange={onChangeLink('github')}
                />
                {
                    (!paginaDeExibir) &&
                    <Box component="span" m={20}>
                        <BotaoSimples
                            variant="outlined"
                            customizado={true}
                            onClick={voltar}
                            nome="Voltar"
                            cor="primary"
                        />
                        <BotaoSimples
                            customizado={true}
                            type="submit"
                            variant="contained"
                            onClick={proximo}
                            nome="Finalizar"
                            cor="primary"
                        />
                    </Box>
                }
            </>
        </Formulario>
    );
}