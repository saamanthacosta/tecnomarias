import React, { useEffect, useState, useRef } from "react";
import BotaoSimples from "../../../../common/Botao/Simples";
import InputTexto from "../../../../common/Input/Texto";
import InputSelect from "../../../../common/Input/Select";
import { Box } from "@material-ui/core";
import { PorteEmpresa } from '../../../../../models/enums/PorteEmpresa';
import InputMascara from "../../../../common/Input/Mascara";
import { vaziaOuNull } from "../../../../../utils/vaziaOuNull";
import Telefone from "../../../../../models/entities/Telefone";

export default function DadosEmpresariais({ aoEnviar, voltar, paginaDeExibir, dados }) {
    const formRef = useRef();
    const [nome, setNome] = useState("");
    const [cnpj, setCnpj] = useState("");
    const [site, setSite] = useState("");
    const [telefoneList, setTelefones] = useState([
        new Telefone(null, '', '', ''),
        new Telefone(null, '', '', '')
    ])
    const [porteEmpresa, setPorte] = useState("");
    const [porteInput, setPorteInput] = useState("")
    const [areaAtuacao, setArea] = useState("Ciencia");
    const [descricao, setDescricao] = useState("");
    const [principal, setPrincipal] = useState("");
    const [secundario, setSecundario] = useState("");

    useEffect(() => {
        if (dados) {
            setNome(dados.nome);
            setCnpj(dados.cnpj);
            setSite(dados.site);
            setPorte(dados.porteEmpresa);
            setPorteInput(PorteEmpresa.find(porte => porte.id === dados.porteEmpresa));
            setArea(dados.areaAtuacao);
            setDescricao(dados.descricao);
        }
    }, [dados]);


    function proximo(event) {
        event.preventDefault();
        aoEnviar({ nome, cnpj, site, porteEmpresa, areaAtuacao, descricao, telefoneList });
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
            setPrincipal(telefoneCompleto)
        } else if (prop === 1) {
            setSecundario(telefoneCompleto)
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
            {
                paginaDeExibir ?
                    <>
                        <InputTexto
                            type="text"
                            label="Telefone Principal"
                            readOnly={paginaDeExibir ? true : false}
                            disabled={paginaDeExibir && vaziaOuNull(telefoneList[0])}
                            value={principal}
                            onChange={onChangeTelefone(0)} />
                        <InputTexto
                            type="text"
                            label="Telefone Secundário"
                            readOnly={paginaDeExibir ? true : false}
                            disabled={paginaDeExibir && vaziaOuNull(telefoneList[1])}
                            value={secundario}
                            onChange={onChangeTelefone(1)} />
                    </>
                    :
                    <>
                        <InputMascara
                            mascara="+99 (99) 9999-9999"
                            exibirSempre={true}
                            value={principal}
                            onChange={onChangeTelefone(0)}
                            type="text"
                            label="Telefone"
                            readOnly={paginaDeExibir ? true : false}
                            disabled={paginaDeExibir && vaziaOuNull(telefoneList[0])}
                        />

                        <InputMascara
                            mascara="+99 (99) 99999-9999"
                            exibirSempre={true}
                            value={secundario}
                            onChange={onChangeTelefone(1)}
                            type="text"
                            label="Telefone Secundário"
                            readOnly={paginaDeExibir ? true : false}
                            disabled={paginaDeExibir && vaziaOuNull(telefoneList[1])}
                        />
                    </>
            }
            <InputTexto
                type="text"
                label="Descrição"
                required={paginaDeExibir ? null : true}
                textoDeAjuda={paginaDeExibir ? null : "Insira uma breve descrição da Empresa"}
                value={descricao}
                readOnly={paginaDeExibir ? true : false}
                onChange={(e) => setDescricao(e.target.value)}
            />
            {
                paginaDeExibir ?
                    (porteInput !== null) &&
                    <InputTexto
                        type="text"
                        label="Porte"
                        value={porteInput.nome}
                        readOnly={true}
                    />
                    :
                    <>
                        {/* <InputSelect
                        label="Area"
                        value={area}
                        textoDeAjuda={paginaDeExibir ? null : "Selecione a área da empresa"}
                        onChange={(event, newValue) => setArea(newValue)}
                        required={paginaDeExibir ? null : true}
                        readOnly={paginaDeExibir ? true : false}
                        opcoes={['Area 1', '2']}
                    /> */}
                        <InputSelect
                            label="Porte"
                            value={porteInput}
                            textoDeAjuda={paginaDeExibir ? null : "Selecione o porte da empresa"}
                            onChange={(event, newValue) => { setPorte(newValue.id); setPorteInput(newValue) }}
                            required={paginaDeExibir ? null : true}
                            readOnly={paginaDeExibir ? true : false}
                            opcoes={PorteEmpresa}
                        />
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
                    </>
            }
        </form>
    );
}