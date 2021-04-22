import React, { useEffect, useState } from "react";
import BotaoSimples from "../../../../common/Botao/Simples";
import Formulario from "../../../../common/Formulario";
import InputTexto from "../../../../common/Input/Texto";
import { Box } from "@material-ui/core";
import { vaziaOuNull } from "../../../../../utils/vaziaOuNull";

export default function DadosPessoais({ aoEnviar, voltar, paginaDeExibir, dados }) {
    const [nome, setNome] = useState("");
    const [telefones, setTelefones] = useState({
        principal: '',
        secundario: '',
        outro: ''
    });

    useEffect(() => {
        function transformarTelefones() {
            var novosTelefones = telefones;
            novosTelefones.principal = dados.telefones[0]
            if (!vaziaOuNull(dados.telefones[1])) {
                novosTelefones.secundario = dados.telefones[1]
            }
            if (!vaziaOuNull(dados.telefones[2])) {
                novosTelefones.secundario = dados.telefones[2]
            }
            setTelefones(novosTelefones)
        }
        if (dados) {
            setNome(dados.nome);
            transformarTelefones();
        }
    }, [dados, telefones]);


    function proximo(event) {
        event.preventDefault();
        aoEnviar({ nome, telefones });
    }

    const onChangeTelefone = (prop) => (event) => {
        setTelefones({ ...telefones, [prop]: event.target.value });
    }

    return (
        <Formulario onSubmit={proximo}>
            <>
                <InputTexto
                    type="text"
                    label="Nome e Sobrenome"
                    required={paginaDeExibir ? null : true}
                    textoDeAjuda={paginaDeExibir ? null : "Insira seu nome e sobrenome"}
                    value={nome}
                    readOnly={paginaDeExibir ? true : false}
                    onChange={(e) => setNome(e.target.value)}
                />
                <InputTexto
                    type="text"
                    label="Telefone Principal"
                    textoDeAjuda={paginaDeExibir ? null : "Insira seu telefone principal"}
                    required={paginaDeExibir ? false : true}
                    readOnly={paginaDeExibir ? true : false}
                    value={telefones.principal}
                    onChange={onChangeTelefone('principal')}
                />
                <InputTexto
                    type="text"
                    label="Telefone Secundário"
                    textoDeAjuda={paginaDeExibir ? null : "Se tiver um telefone secundário, insira ele aqui"}
                    readOnly={paginaDeExibir ? true : false}
                    disabled={paginaDeExibir && vaziaOuNull(telefones.secundario)}
                    value={telefones.secundario}
                    onChange={onChangeTelefone('secundario')}
                />
                <InputTexto
                    type="text"
                    label="Outro Telefone"
                    textoDeAjuda={paginaDeExibir ? null : "Se tiver um outro telefone, insira ele aqui"}
                    readOnly={paginaDeExibir ? true : false}
                    disabled={paginaDeExibir && vaziaOuNull(telefones.outro)}
                    value={telefones.outro}
                    onChange={onChangeTelefone('outro')}
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