import React, { useEffect, useState } from "react";
import BotaoSimples from "../../../../common/Botao/Simples";
import InputTexto from "../../../../common/Input/Texto";
import { Box } from "@material-ui/core";
import { vaziaOuNull } from "../../../../../utils/vaziaOuNull";
import { urlLinks } from "../../../../../utils/urlLinks";
import Links from "../../../../../models/entities/Links";

export default function DadosLinks({ aoEnviar, voltar, paginaDeExibir, dados }) {
    const [links, setLinks] = useState(new Links(0, urlLinks.github, urlLinks.linkedin, urlLinks.portfolio, urlLinks.facebook));

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
        const { name, value } = event.target;

        if (value.startsWith(prop) || dados) {
            setLinks({ ...links, [name]: value });
        }
    }

    return (
        <form onSubmit={proximo}>
            <>
                <InputTexto
                    type="text"
                    name="github"
                    label="GitHub"
                    textoDeAjuda={paginaDeExibir ? null : "Insira o link do seu GitHub"}
                    readOnly={paginaDeExibir ? true : false}
                    disabled={paginaDeExibir && vaziaOuNull(links.github)}
                    value={links.github}
                    onChange={onChangeLink(urlLinks.github)}
                />
                <InputTexto
                    type="text"
                    name="linkedin"
                    label="LinkedIN"
                    textoDeAjuda={paginaDeExibir ? null : "Insira o link do seu LinkedIN"}
                    readOnly={paginaDeExibir ? true : false}
                    disabled={paginaDeExibir && vaziaOuNull(links.linkedin)}
                    value={links.linkedin}
                    onChange={onChangeLink(urlLinks.linkedin)}
                />
                <InputTexto
                    type="text"
                    label="Facebook"
                    name="facebook"
                    textoDeAjuda={paginaDeExibir ? null : "Insira o link do seu Facebook"}
                    readOnly={paginaDeExibir ? true : false}
                    disabled={paginaDeExibir && vaziaOuNull(links.facebook)}
                    value={links.facebook}
                    onChange={onChangeLink(urlLinks.facebook)}
                />
                <InputTexto
                    type="text"
                    name="portfolio"
                    label="Portfólio"
                    textoDeAjuda={paginaDeExibir ? null : "Insira o link do seu portfólio"}
                    readOnly={paginaDeExibir ? true : false}
                    disabled={paginaDeExibir && vaziaOuNull(links.portfolio)}
                    value={links.portfolio}
                    onChange={onChangeLink(urlLinks.portfolio)}
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
        </form>
    );
}