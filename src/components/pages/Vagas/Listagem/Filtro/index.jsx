import { Box, Container } from '@material-ui/core';
import React, { useEffect, useState } from 'react'
import LocalidadesService from '../../../../../services/LocalidadesService';
import VagaService from '../../../../../services/VagaService';
import BotaoSimples from '../../../../common/Botao/Simples';
import Colapsavel from '../../../../common/Colapsavel'
import InputRadio from '../../../../common/Input/Radio';
import InputSelect from '../../../../common/Input/Select';
import { Cargo } from '../../../../../models/enums/Cargo'
import { Severidade } from '../../../../../models/enums/Severidade'
import { TipoFiltro } from '../../../../../models/enums/TipoFiltro'
import Alerta from '../../../../common/Alerta';
import InputTexto from '../../../../common/Input/Texto';

export default function Filtro({ tratarVagas }) {

    const [estados, setEstados] = useState([]);
    const [estado, setEstado] = useState(null);
    const [tipoFiltro, setTipoFiltro] = useState('areaAtuacao');
    const [area, setArea] = useState(null);
    const [cargo, setCargo] = useState(null);

    useEffect(() => {
        LocalidadesService.listarEstados().then(
            resposta => tratarEstados(resposta)
        );
    }, [estados]);

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

    function buscar(event) {
        event.preventDefault();
        let valor = null;
        switch (tipoFiltro) {
            case TipoFiltro[0].id:
                valor = area
                break;
            case TipoFiltro[1].id:
                valor = cargo.id
                break;
            case TipoFiltro[2].id:
                valor = estado.nome
                break;
            default:
                valor = null
                break;
        }
        if (valor !== null) {
            VagaService.filtrar(tipoFiltro, valor).then(
                resposta => {
                    tratarVagas(resposta)
                }
            ).catch(
                erro => {
                    <Alerta tipo={Severidade.ERRO} mensagem={erro.message} />
                }
            )
        }
    }

    return (
        <Colapsavel
            titulo="Filtrar Vagas"
            corpo={
                <form>
                    <Container maxWidth="lg">
                        <InputRadio
                            opcoes={TipoFiltro}
                            value={tipoFiltro}
                            onChange={(e) => {
                                setTipoFiltro(e.target.value)
                            }}
                        />
                        {
                            (tipoFiltro === TipoFiltro[0].id) &&
                            <InputTexto
                                type="text"
                                label="Área de Atuação"
                                required={true}
                                textoDeAjuda="Insira a área de atuação"
                                value={area}
                                onChange={(e) => setArea(e.target.value)}
                            />
                        }
                        {
                            (tipoFiltro === TipoFiltro[1].id) &&
                            <InputSelect
                                label="Cargo"
                                value={cargo}
                                opcoes={Cargo}
                                textoDeAjuda="Selecione um cargo"
                                onChange={(event, newValue) => setCargo(newValue)}
                            />
                        }
                        {
                            (tipoFiltro === TipoFiltro[2].id) &&
                            <InputSelect
                                label="Localidade"
                                value={estado}
                                opcoes={estados}
                                textoDeAjuda="Selecione um estado"
                                onChange={(event, newValue) => setEstado(newValue)}
                            />
                        }
                        <Box component="span" m={20}>
                            <BotaoSimples
                                type="submit"
                                variant="contained"
                                onClick={buscar}
                                nome="Buscar"
                                cor="primary" />
                        </Box>
                    </Container>
                </form>
            }
        />
    )
}