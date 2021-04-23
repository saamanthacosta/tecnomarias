import React, { useEffect, useState } from "react";
import BotaoSimples from "../../../../common/Botao/Simples";
import Formulario from "../../../../common/Formulario";
import InputTexto from "../../../../common/Input/Texto";
import { Box } from "@material-ui/core";
import { vaziaOuNull } from "../../../../../utils/vaziaOuNull";

export default function DadosEmpresariais({ aoEnviar, voltar, paginaDeExibir, dados }) {
    const [nome, setNome] = useState("");
    const [cnpj, setCnpj] = useState("");
    const [site, setSite] = useState("");
    const [porte, setPorte] = useState("");
    const [area, setArea] = useState("");
    const [descricao, setDescricao] = useState("");

    useEffect(() => {
        if (dados) {
            setNome(dados.nome);
            setCnpj(dados.cnpj);
            setSite(dados.site);
            setPorte(dados.porte);
            setArea(dados.area);
            setDescricao(dados.descricao);
        }
    }, [dados]);


    function proximo(event) {
        event.preventDefault();
        aoEnviar({ nome, telefones });
    }

    return (
        <Formulario onSubmit={proximo}>
            <>
                <InputTexto
                    type="text"
                    label="Nome"
                    required={paginaDeExibir ? null : true}
                    textoDeAjuda={paginaDeExibir ? null : "Insira o nome da Empresa"}
                    value={nome}
                    readOnly={paginaDeExibir ? true : false}
                    onChange={(e) => setNome(e.target.value)}
                />
                <InputTexto
                    type="text"
                    label="CNPJ"
                    required={paginaDeExibir ? null : true}
                    textoDeAjuda={paginaDeExibir ? null : "Insira o CNPJ da Empresa"}
                    value={cnpj}
                    readOnly={paginaDeExibir ? true : false}
                    onChange={(e) => setCnpj(e.target.value)}
                />
                <InputTexto
                    type="text"
                    label="Site"
                    required={paginaDeExibir ? null : true}
                    textoDeAjuda={paginaDeExibir ? null : "Insira o site da Empresa"}
                    value={site}
                    readOnly={paginaDeExibir ? true : false}
                    onChange={(e) => setSite(e.target.value)}
                />
                <InputTexto
                    type="text"
                    label="Descrição"
                    required={paginaDeExibir ? null : true}
                    textoDeAjuda={paginaDeExibir ? null : "Insira uma breve descrição da Empresa"}
                    value={descricao}
                    readOnly={paginaDeExibir ? true : false}
                    onChange={(e) => setDescricao(e.target.value)}
                />
                <InputSelect
                    label="Porte"
                    value={porte}
                    textoDeAjuda={paginaDeExibir ? null : "Selecione o porte da empresa"}
                    onChange={(e) => setPorte(e.target.value)}
                    required={paginaDeExibir ? null : true}
                    readOnly={paginaDeExibir ? true : false}
                    opcoes={[
                        'Microempresa', 'Pequeno porte', 'Médio porte', 'Grande empresa'
                    ]}
                />

                <InputSelect
                    label="Area"
                    value={area}
                    textoDeAjuda={paginaDeExibir ? null : "Selecione a área da empresa"}
                    onChange={(e) => setArea(e.target.value)}
                    required={paginaDeExibir ? null : true}
                    readOnly={paginaDeExibir ? true : false}
                    opcoes={['Area 1', '2']}
                />

                {
                    (!paginaDeExibir) &&
                    <Box component="span" m={20}>
                        <BotaoSimples
                            customizado={true}
                            variant="outlined"
                            onClick={voltar}
                            nome="Voltar"
                            cor="primary"
                        />
                        <BotaoSimples
                            customizado={true}
                            type="submit"
                            variant="contained"
                            onClick={proximo}
                            nome="Próximo"
                            cor="primary"
                        />
                    </Box>
                }

            </>
        </Formulario>
    );
}