import React, { useEffect, useRef, useState } from 'react'
import LocalidadesService from '../../../../../services/LocalidadesService';
import InputSelect from '../../../../common/Input/Select';
import { Cargo } from '../../../../../models/enums/Cargo'
import Vaga from '../../../../../models/entities/Vaga'
import InputTexto from '../../../../common/Input/Texto';
import InputMascara from '../../../../common/Input/Mascara';
import { Box } from '@material-ui/core';
import BotaoSimples from '../../../../common/Botao/Simples';
import { useHistory } from 'react-router';

export default function DadosVaga({ onSubmit, dados }) {

    const formRef = useRef();
    const history = useHistory();
    const [vaga, setVaga] = useState(new Vaga())
    const [estados, setEstados] = useState(null);
    const [estado, setEstado] = useState(null);
    const [cargo, setCargo] = useState(null);
    const [valor, setValor] = useState('');

    useEffect(() => {
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
        if (estados === null) {
            LocalidadesService.listarEstados().then(
                resposta => tratarEstados(resposta)
            );
        }
        if (dados) {
            setVaga(dados);
            setCargo(Cargo.find(cargo => cargo.id === dados.cargo))
            if (estados !== null) {
                setEstado(estados.find(estado => estado.nome === dados.localidade));
            }
        }
    }, [dados, estados])

    function onChangeSalario(event) {
        const { value } = event.target;
        setValor(value);
        let tamanhoSalario = value.length;
        let salario = parseFloat(value.substring(2, tamanhoSalario).replace(/\./g, "").replace(/,/g, "."))
        setVaga({ ...vaga, valor: salario })
    }

    return (
        <form onSubmit={onSubmit(vaga)} ref={formRef}>
            <InputTexto
                type="text"
                label="Área"
                required={true}
                textoDeAjuda="Insira a área de atuação"
                value={vaga.areaAtuacao}
                onChange={(e) => setVaga({ ...vaga, areaAtuacao: e.target.value })}
            />
            <InputSelect
                label="Cargo"
                value={cargo}
                opcoes={Cargo}
                textoDeAjuda="Selecione um cargo"
                onChange={(event, newValue) => {
                    setCargo(newValue);
                    setVaga({ ...vaga, cargo: newValue.id });
                }}
            />
            <InputSelect
                label="Localidade"
                value={estado}
                opcoes={estados}
                textoDeAjuda="Selecione um estado"
                onChange={(event, newValue) => {
                    setEstado(newValue);
                    setVaga({ ...vaga, localidade: newValue.nome });
                }}
            />
            <InputTexto
                type="text"
                label="Descrição"
                required={true}
                textoDeAjuda="Insira uma descrição"
                value={vaga.descricao}
                onChange={(e) => setVaga({ ...vaga, descricao: e.target.value })}
            />
            <InputMascara
                mascara="R$9.999,99"
                exibirSempre={true}
                value={valor}
                onChange={onChangeSalario}
                type="text"
                label="Salário bruto"
                required={true}
            />
            <Box component="span" m={15}>
                <BotaoSimples
                    variant="outlined"
                    onClick={(e) => history.goBack()}
                    nome="Voltar"
                />
                <BotaoSimples
                    type="submit"
                    variant="contained"
                    onClick={onSubmit(vaga)}
                    nome="Finalizar"
                    cor="primary"
                />
            </Box>
        </form>
    )
}