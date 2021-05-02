import React, { useEffect, useRef, useState } from "react";
import BotaoSimples from "../../../../common/Botao/Simples";
import InputTexto from "../../../../common/Input/Texto";
import { Box } from "@material-ui/core";
import { vaziaOuNull } from "../../../../../utils/vaziaOuNull";
import Endereco from '../../../../../models/entities/Endereco'
import InputSelect from "../../../../common/Input/Select";
import LocalidadesService from "../../../../../services/LocalidadesService";

export default function DadosEndereco({ aoEnviar, voltar, paginaDeExibir, dados }) {
    const formRef = useRef();
    const [endereco, setEndereco] = useState(new Endereco());
    const [estados, setEstados] = useState([]);
    const [estado, setEstado] = useState(null);
    const [municipios, setMunicipios] = useState([]);
    const [municipio, setMunicipio] = useState(null);

    useEffect(() => {
        if (dados) {
            setEndereco(dados.endereco)
            LocalidadesService.buscarMunicipio(dados.endereco.municipioIBGE).then(
                resposta => setMunicipio({ id: resposta.data.id, nome: resposta.data.nome })
            )
        }
        LocalidadesService.listarEstados().then(
            resposta => tratarEstados(resposta)
        );
    }, [dados, estados])

    function tratarEstados(dados) {
        let estadosAPI = dados.data;
        let lista = [];
        estadosAPI.forEach(estado => {
            let novoEstado = {
                id: estado.id,
                nome: estado.nome
            }
            lista.push(novoEstado)
        })
        setEstados(lista);
    }

    function proximo(event) {
        event.preventDefault();
        aoEnviar({ endereco });
    }

    const onChangeEndereco = (prop) => (event) => {
        setEndereco({ ...endereco, [prop]: event.target.value });
    }

    function onChangeEstado(event, newValue) {
        setEstado(newValue);
        setMunicipio(null);
        LocalidadesService.listarMunicipios(newValue.id).then(
            resposta => tratarMunicipios(resposta)
        )
    }

    function tratarMunicipios(dados) {
        let municipiosAPI = dados.data;
        let lista = [];
        municipiosAPI.forEach(estado => {
            let novoMunicipio = {
                id: estado.id,
                nome: estado.nome
            }
            lista.push(novoMunicipio)
        })
        setMunicipios(lista);
    }

    return (
        <form onSubmit={proximo} ref={formRef}>
            <InputTexto
                type="text"
                label="Logradouro"
                required={paginaDeExibir ? false : true}
                textoDeAjuda={paginaDeExibir ? null : "Insira o logradouro"}
                readOnly={paginaDeExibir ? true : false}
                disabled={paginaDeExibir && vaziaOuNull(endereco.logradouro)}
                value={endereco.logradouro}
                onChange={onChangeEndereco('logradouro')}
            />
            <InputTexto
                type="text"
                label="Número"
                required={paginaDeExibir ? false : true}
                textoDeAjuda={paginaDeExibir ? null : "Insira o número"}
                readOnly={paginaDeExibir ? true : false}
                disabled={paginaDeExibir && vaziaOuNull(endereco.numero)}
                value={endereco.numero}
                onChange={onChangeEndereco('numero')}
            />
            <InputTexto
                type="text"
                label="Complemento"
                textoDeAjuda={paginaDeExibir ? null : "Insira o complemento"}
                readOnly={paginaDeExibir ? true : false}
                disabled={paginaDeExibir && vaziaOuNull(endereco.complemento)}
                value={endereco.complemento === null ? '' : endereco.completo}
                onChange={onChangeEndereco('complemento')}
            />
            {
                paginaDeExibir ?
                    (municipio !== null) &&
                        <InputTexto
                            type="text"
                            label="Município"
                            readOnly={true}
                            disabled={paginaDeExibir && vaziaOuNull(endereco.complemento)}
                            value={municipio.nome}
                        />
                    :
                    <>
                        <InputSelect
                            label="Estado *"
                            value={estado}
                            opcoes={estados}
                            required={paginaDeExibir ? false : true}
                            textoDeAjuda={paginaDeExibir ? null : "Selecione o estado"}
                            onChange={(event, newValue) => onChangeEstado(event, newValue)}
                        />
                        <InputSelect
                            label="Município *"
                            value={municipio}
                            disabled={estado === null ? true : false}
                            opcoes={municipios}
                            required={paginaDeExibir ? false : true}
                            textoDeAjuda={paginaDeExibir ? null : "Selecione o município"}
                            onChange={(event, newValue) => {
                                setMunicipio(newValue)
                                setEndereco({ ...endereco, municipioIBGE: newValue.id })
                            }}
                        />
                        <InputTexto
                            type="text"
                            label="Bairro"
                            textoDeAjuda={paginaDeExibir ? null : "Insira o bairro"}
                            readOnly={paginaDeExibir ? true : false}
                            disabled={paginaDeExibir && vaziaOuNull(endereco.bairro)}
                            value={endereco.bairro}
                            onChange={onChangeEndereco('bairro')}
                        />
                        <Box component="span" m={15}>
                            <BotaoSimples
                                variant="outlined"
                                onClick={voltar}
                                nome="Voltar"
                                cor="primary"
                            />
                            <BotaoSimples
                                type="submit"
                                variant="contained"
                                onClick={proximo}
                                nome="Finalizar"
                                cor="primary"
                            />
                        </Box>
                    </>
            }
        </form>
    );
}