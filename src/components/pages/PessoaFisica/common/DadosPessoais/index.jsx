import React, { useEffect, useState, useContext, useRef } from "react";
import BotaoSimples from "../../../../common/Botao/Simples";
import InputTexto from "../../../../common/Input/Texto";
import { Box } from "@material-ui/core";
import ValidacoesCadastro from "../../../../../contexts/ValidacoesCadastro";
import useErros from '../../../../../hooks/useErros'
import InputMascara from "../../../../common/Input/Mascara";
import Telefone from "../../../../../models/entities/Telefone";

export default function DadosPessoais({ aoEnviar, voltar, paginaDeExibir, dados }) {
    const formRef = useRef();
    const [nome, setNome] = useState("");
    const [telefoneList, setTelefones] = useState([
        new Telefone(null, '', '', ''),
        new Telefone(null, '', '', ''),
        new Telefone(null, '', '', '')
    ])
    const validacoes = useContext(ValidacoesCadastro)
    const [erros, validarCampos, possoEnviar] = useErros(validacoes);

    useEffect(() => {
        if (dados) {
            setNome(dados.nome);
            if (dados.telefoneList !== null) {
                if (dados.telefoneList[0] !== null) {
                    setTelefones({ ...telefoneList, 0: dados.telefoneList[0] })
                }
                if (dados.telefoneList[1] !== null) {
                    setTelefones({ ...telefoneList, 1: dados.telefoneList[0] })
                }
                if (dados.telefoneList[2] !== null) {
                    setTelefones({ ...telefoneList, 2: dados.telefoneList[0] })
                }
            }
        }
    }, [dados, telefoneList]);

    function proximo(event) {
        event.preventDefault();
        if (formRef.current.reportValidity() && possoEnviar()) {
            aoEnviar({ nome, telefoneList })
        }
    }

    const onChangeTelefone = (prop) => (event) => {
        const { value } = event.target;
        let telefone = null;
        dados ? telefone = converterTelefone(value, telefoneList[prop].id, dados.id)
            : telefone = converterTelefone(value, null, null)
        setTelefones({ ...telefoneList, [prop]: telefone })
    }

    function converterTelefone(valor, id, idPessoa) {
        let ddi = valor.substring(1, 3);
        let ddd = valor.substring(5, 7);
        let numero = valor.substring(9, 19);
        return new Telefone(id, ddi, ddd, numero, idPessoa)
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
                value={ tratarTelefone(telefoneList[0])}
                onChange={onChangeTelefone(0)}
                type="text"
                label="Telefone Residencial"
            />
            <InputMascara
                mascara="+99 (99) 99999-9999"
                exibirSempre={true}
                type="text"
                label="Telefone Celular"
                value={tratarTelefone(telefoneList[1])}
                onChange={onChangeTelefone(1)}
            />
            <InputMascara
                mascara="+99 (99) 99999-9999"
                exibirSempre={true}
                value={tratarTelefone(telefoneList[2])}
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