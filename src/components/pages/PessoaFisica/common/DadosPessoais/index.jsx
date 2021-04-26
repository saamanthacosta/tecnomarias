import React, { useEffect, useState, useContext, useRef } from "react";
import BotaoSimples from "../../../../common/Botao/Simples";
import InputTexto from "../../../../common/Input/Texto";
import { Box } from "@material-ui/core";
import { vaziaOuNull } from "../../../../../utils/vaziaOuNull";
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
    const [residencial, setResidencial] = useState('')
    const [celular, setCelular] = useState('')
    const [comercial, setComercial] = useState('')

    const validacoes = useContext(ValidacoesCadastro)
    const [erros, validarCampos, possoEnviar] = useErros(validacoes);

    useEffect(() => {
        if (dados) {
            setNome(dados.nome);
            if (!vaziaOuNull(dados.telefoneList)) {
                setTelefones(dados.telefoneList);
                let telefoneCompleto = `+${dados.telefoneList[0].ddi} (${dados.telefoneList[0].ddd}) ${dados.telefoneList[0].numero}`
                setResidencial(telefoneCompleto);
                if (!vaziaOuNull(dados.telefoneList[1])) {
                    telefoneCompleto = `+${dados.telefoneList[1].ddi} (${dados.telefoneList[1].ddd}) ${dados.telefoneList[1].numero}`
                    setCelular(telefoneCompleto)
                }
                if (!vaziaOuNull(dados.telefoneList[2])) {
                    telefoneCompleto = `+${dados.telefoneList[2].ddi} (${dados.telefoneList[2].ddd}) ${dados.telefoneList[2].numero}`
                    setComercial(telefoneCompleto)
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
        if (dados) {
            telefone = converterTelefone(value, telefoneList[prop].id, dados.id)
        } else {
            telefone = converterTelefone(value)
        }
        let telefonesAtualizados = telefoneList;
        telefonesAtualizados[prop] = telefone
        setTelefones(telefonesAtualizados);
        var telefoneCompleto = `+${telefone.ddi} (${telefone.ddd}) ${telefone.numero}`
        if (prop === 0) {
            setResidencial(telefoneCompleto)
        } else if (prop === 1) {
            setCelular(telefoneCompleto)
        } else if (prop === 2) {
            setComercial(telefoneCompleto)
        }
    }

    function converterTelefone(valor, id, idPessoa) {
        let ddi = valor.substring(1, 3);
        let ddd = valor.substring(5, 7);
        let numero = valor.substring(9, 19);
        return new Telefone(id, ddi, ddd, numero, idPessoa)
    }

    function converterTelefone(valor) {
        let ddi = valor.substring(1, 3);
        let ddd = valor.substring(5, 7);
        let numero = valor.substring(9, 19);
        return new Telefone(null, ddi, ddd, numero, null)
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
                    textoDeAjuda={paginaDeExibir ? "" : erros.nome.texto}
                    value={nome}
                    readOnly={paginaDeExibir ? true : false}
                    onChange={(e) => setNome(e.target.value)}
                />
                {
                    paginaDeExibir ?

                        <>
                            <InputTexto
                                type="text"
                                label="Telefone Residencial"
                                readOnly={paginaDeExibir ? true : false}
                                disabled={paginaDeExibir && vaziaOuNull(telefoneList[0])}
                                value={residencial}
                                onChange={(onChangeTelefone(0))}
                            />
                            <InputTexto
                                type="text"
                                label="Telefone Celular"
                                readOnly={paginaDeExibir ? true : false}
                                disabled={paginaDeExibir && vaziaOuNull(telefoneList[1])}
                                value={celular}
                                onChange={onChangeTelefone(1)}
                            />
                            <InputTexto
                                type="text"
                                label="Telefone Comercial"
                                readOnly={paginaDeExibir ? true : false}
                                disabled={paginaDeExibir && vaziaOuNull(telefoneList[2])}
                                value={comercial}
                                onChange={onChangeTelefone(2)}
                            />
                        </>
                        :
                        <>
                            <InputMascara
                                mascara="+99 (99) 9999-9999"
                                exibirSempre={true}
                                value={residencial}
                                disabled={paginaDeExibir && vaziaOuNull(telefoneList[0])}
                                onChange={onChangeTelefone(0)}
                                type="text"
                                label="Telefone Residencial"
                            />
                            <InputMascara
                                mascara="+99 (99) 99999-9999"
                                exibirSempre={true}
                                type="text"
                                label="Telefone Celular"
                                readOnly={paginaDeExibir ? true : false}
                                disabled={paginaDeExibir && vaziaOuNull(telefoneList[1])}
                                value={celular}
                                onChange={onChangeTelefone(1)}
                            />
                            <InputMascara
                                mascara="+99 (99) 99999-9999"
                                exibirSempre={true}
                                value={comercial}
                                onChange={onChangeTelefone(2)}
                                type="text"
                                label="Telefone Comercial"
                                required={paginaDeExibir ? false : true}
                                readOnly={paginaDeExibir ? true : false}
                                disabled={paginaDeExibir && vaziaOuNull(telefoneList[2])}
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