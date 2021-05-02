import React, { useEffect, useState, useContext, useRef } from "react";
import BotaoSimples from "../../../../common/Botao/Simples";
import InputTexto from "../../../../common/Input/Texto";
import { Box } from "@material-ui/core";
import ValidacoesCadastro from "../../../../../contexts/ValidacoesCadastro";
import useErros from '../../../../../hooks/useErros'
import InputMascara from "../../../../common/Input/Mascara";
import Telefone from "../../../../../models/entities/Telefone";
import { vaziaOuNull } from "../../../../../utils/vaziaOuNull";

export default function DadosPessoais({ aoEnviar, voltar, paginaDeExibir, dados }) {
    const formRef = useRef();
    const [nome, setNome] = useState("");
    const [telefones, setTelefones] = useState([
        new Telefone(null, '', '', ''),
        new Telefone(null, '', '', ''),
        new Telefone(null, '', '', '')
    ])
    const validacoes = useContext(ValidacoesCadastro)
    const [erros, validarCampos, possoEnviar] = useErros(validacoes);

    useEffect(() => {
        if (dados && nome === "") {
            setNome(dados.nome);
            if (dados.telefoneList !== null) {
                if (!vaziaOuNull(dados.telefoneList[0])) {
                    setTelefones({ ...telefones, 0: dados.telefoneList[0] })
                }
                if (!vaziaOuNull(dados.telefoneList[1])) {
                    setTelefones({ ...telefones, 1: dados.telefoneList[0] })
                }
                if (!vaziaOuNull(dados.telefoneList[2])) {
                    setTelefones({ ...telefones, 2: dados.telefoneList[0] })
                }
            }
        }
    }, [dados, telefones]);

    function proximo(event) {
        event.preventDefault();
        if (formRef.current.reportValidity() && possoEnviar()) {
            let telefoneList = [];
            telefoneList.push(telefones[0], telefones[1], telefones[2])
            aoEnviar({ nome, telefoneList })
        }
    }

    const onChangeTelefone = (prop) => (event) => {
        const { value } = event.target;
        let telefone = null;
        dados ? telefone = converterTelefone(value, telefones[prop].id)
            : telefone = converterTelefone(value, null);
        setTelefones({ ...telefones, [prop]: telefone })
    }

    function converterTelefone(valor, id) {
        let ddi = valor.substring(1, 3);
        let ddd = valor.substring(5, 7);
        let numero = valor.substring(9, 19);
        return new Telefone(id, ddi, ddd, numero)
    }

    function tratarTelefone(telefone) {
        return `+${telefone.ddi} (${telefone.ddd}) ${telefone.numero}`
    }

    return (
        <form onSubmit={proximo} ref={formRef}>
            <InputTexto
                type="text"
                name="nome"
                label="Nome e Sobrenome"
                onBlur={validarCampos}
                erro={!erros.nome.valido}
                required={paginaDeExibir ? null : true}
                textoDeAjuda={paginaDeExibir ? "" : erros.nome.texto}
                value={nome}
                readOnly={paginaDeExibir ? true : false}
                onChange={(e) => setNome(e.target.value)}
            />
            <InputMascara
                mascara="+99 (99) 9999-9999"
                exibirSempre={true}
                value={ tratarTelefone(telefones[0])}
                onChange={onChangeTelefone(0)}
                type="text"
                label="Telefone Residencial"
            />
            <InputMascara
                mascara="+99 (99) 99999-9999"
                exibirSempre={true}
                type="text"
                label="Telefone Celular"
                value={tratarTelefone(telefones[1])}
                onChange={onChangeTelefone(1)}
            />
            <InputMascara
                mascara="+99 (99) 99999-9999"
                exibirSempre={true}
                value={tratarTelefone(telefones[2])}
                onChange={onChangeTelefone(2)}
                type="text"
                label="Telefone Comercial"
            />
            <Box component="span" m={20}>
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
                    nome="Próximo"
                    cor="primary"
                />
            </Box>
        </form>
    );
}