import React, { useEffect, useState, useContext, useRef } from "react";
import BotaoSimples from "../../../../common/Botao/Simples";
import InputTexto from "../../../../common/Input/Texto";
import { Box } from "@material-ui/core";
import { vaziaOuNull } from "../../../../../utils/vaziaOuNull";
import ValidacoesCadastro from "../../../../../contexts/ValidacoesCadastro";
import useErros from '../../../../../hooks/useErros'
import InputMascara from "../../../../common/Input/Mascara";
import Telefone from '../../../../../models/entities/Telefone'

export default function DadosPessoais({ aoEnviar, voltar, paginaDeExibir, dados }) {
    const formRef = useRef();
    const [nome, setNome] = useState("");
    const [telefones, setTelefones] = useState([
        new Telefone(null, '', '', ''),
        new Telefone(null, '', '', ''),
        new Telefone(null, '', '', '')
    ])
    const [principal, setPrincipal] = useState('')
    const [secundario, setSecundario] = useState('')
    const [outro, setOutro] = useState('')

    const validacoes = useContext(ValidacoesCadastro)
    const [erros, validarCampos, possoEnviar] = useErros(validacoes);

    useEffect(() => {
        if (dados) {
            setNome(dados.nome);
            if (dados.telefones.length > 0) {
                setTelefones(dados.telefones);
                setPrincipal(dados.telefones[0])
                setSecundario(dados.telefones[1])
                setOutro(dados.telefones[2])
            }
        }
    }, [dados, telefones]);


    function proximo(event) {
        event.preventDefault();
        if (formRef.current.reportValidity() && possoEnviar()) {
            aoEnviar({ nome, telefones })
        }
    }

    const onChangeTelefone = (prop) => (event) => {
        const { value } = event.target;
        let telefone = converterTelefone(value, telefones[prop].id)
        let telefonesAtualizados = telefones;
        telefonesAtualizados[prop] = telefone
        setTelefones(telefonesAtualizados);
        if (prop === 0) {
            setPrincipal(telefone.completo)
        } else if (prop === 1) {
            setSecundario(telefone.completo)
        } else if (prop === 2) {
            setOutro(telefone.completo)
        }
    }

    function converterTelefone(valor, id) {
        let ddi = valor.substring(1, 3);
        let ddd = valor.substring(5, 7);
        let numero = valor.substring(9, 19);
        return new Telefone(id, ddi, ddd, numero)
    }

    return (
        <form onSubmit={proximo} ref={formRef}>
            <>
                <InputTexto
                    type="text"
                    name="nome"
                    label="Nome e Sobrenome"
                    onBlur={validarCampos}
                    erro={!erros.nome.valido}
                    required={paginaDeExibir ? null : true}
                    textoDeAjuda={paginaDeExibir ? null : erros.nome.texto}
                    value={nome}
                    readOnly={paginaDeExibir ? true : false}
                    onChange={(e) => setNome(e.target.value)}
                />
                {
                    paginaDeExibir ?

                        <>
                            <InputTexto
                                type="text"
                                label="Telefone Principal"
                                textoDeAjuda={paginaDeExibir ? null : "Insira seu telefone principal"}
                                readOnly={paginaDeExibir ? true : false}
                                disabled={paginaDeExibir && vaziaOuNull(telefones[0])}
                                value={principal}
                                onChange={(onChangeTelefone(0))}
                            />
                            <InputTexto
                                type="text"
                                label="Telefone Secundário"
                                textoDeAjuda={paginaDeExibir ? null : "Se tiver um telefone secundário, insira ele aqui"}
                                readOnly={paginaDeExibir ? true : false}
                                disabled={paginaDeExibir && vaziaOuNull(telefones[1])}
                                value={secundario}
                                onChange={onChangeTelefone(1)}
                            />
                            <InputTexto
                                type="text"
                                label="Outro Telefone"
                                textoDeAjuda={paginaDeExibir ? null : "Se tiver um outro telefone, insira ele aqui"}
                                readOnly={paginaDeExibir ? true : false}
                                disabled={paginaDeExibir && vaziaOuNull(telefones[2])}
                                value={outro}
                                onChange={onChangeTelefone(2)}
                            />
                        </>
                        :
                        <>
                            <InputMascara
                                mascara="+99 (99) 99999-9999"
                                exibirSempre={true}
                                value={principal}
                                disabled={paginaDeExibir && vaziaOuNull(telefones[0])}
                                onChange={onChangeTelefone(0)}
                                type="text"
                                label="Telefone Principal"
                                textoDeAjuda={paginaDeExibir ? null : "Insira seu telefone principal"}
                                required={paginaDeExibir ? false : true}
                            />
                            <InputMascara
                                mascara="+99 (99) 99999-9999"
                                exibirSempre={true}
                                type="text"
                                label="Telefone Secundário"
                                textoDeAjuda={paginaDeExibir ? null : "Se tiver um telefone secundário, insira ele aqui"}
                                readOnly={paginaDeExibir ? true : false}
                                disabled={paginaDeExibir && vaziaOuNull(telefones[1])}
                                value={secundario}
                                onChange={onChangeTelefone(1)}
                            />
                            <InputMascara
                                mascara="+99 (99) 99999-9999"
                                exibirSempre={true}
                                value={outro}
                                onChange={onChangeTelefone(2)}
                                type="text"
                                label="Outro Telefone"
                                textoDeAjuda={paginaDeExibir ? null : "Se tiver um outro telefone, insira ele aqui"}
                                required={paginaDeExibir ? false : true}
                                readOnly={paginaDeExibir ? true : false}
                                disabled={paginaDeExibir && vaziaOuNull(telefones[2])}
                            />
                        </>
                }
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
        </form>
    );
}