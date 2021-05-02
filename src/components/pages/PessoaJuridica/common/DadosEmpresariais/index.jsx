import React, { useEffect, useState, useRef } from "react";
import BotaoSimples from "../../../../common/Botao/Simples";
import InputTexto from "../../../../common/Input/Texto";
import InputSelect from "../../../../common/Input/Select";
import { Box } from "@material-ui/core";
import { PorteEmpresa } from '../../../../../models/enums/PorteEmpresa';
import InputMascara from "../../../../common/Input/Mascara";
import Telefone from "../../../../../models/entities/Telefone";
import { vaziaOuNull } from "../../../../../utils/vaziaOuNull";

export default function DadosEmpresariais({ aoEnviar, voltar, dados }) {
    const formRef = useRef();
    const [nome, setNome] = useState("");
    const [cnpj, setCnpj] = useState("");
    const [cnpjInput, setCnpjInput] = useState("");
    const [site, setSite] = useState("");
    const [telefones, setTelefones] = useState([
        new Telefone(null, '', '', ''),
        new Telefone(null, '', '', '')
    ])
    const [porteEmpresa, setPorte] = useState("");
    const [porteInput, setPorteInput] = useState("")
    const [areaAtuacao, setArea] = useState("");
    const [descricao, setDescricao] = useState("");

    useEffect(() => {
        if (dados && nome === "") {
            setNome(dados.nome);
            setCnpj(dados.cnpj);
            setCnpjInput(dados.cnpj);
            setSite(dados.site);
            setPorte(dados.porteEmpresa);
            setPorteInput(PorteEmpresa.find(porte => porte.id === dados.porteEmpresa));
            setArea(dados.areaAtuacao);
            setDescricao(dados.descricao);
            if (dados.telefoneList !== null) {
                if (!vaziaOuNull(dados.telefoneList[0])) {
                    setTelefones({ ...telefones, 0: dados.telefoneList[0] })
                }
                if (!vaziaOuNull(dados.telefoneList[1])) {
                    setTelefones({ ...telefones, 1: dados.telefoneList[0] })
                }
            }
        }
    }, [dados, telefones, nome]);


    function proximo(event) {
        event.preventDefault();
        let telefoneList = [];
            telefoneList.push(telefones[0], telefones[1])
        aoEnviar({ nome, cnpj, site, porteEmpresa, areaAtuacao, descricao, telefoneList });
    }

    const onChangeTelefone = (prop) => (event) => {
        const { value } = event.target;
        let telefone = null;
        dados ? telefone = converterTelefone(value, telefones[prop].id)
            : telefone = converterTelefone(value, null)
        setTelefones({ ...telefones, [prop]: telefone })
    }

    function tratarTelefone(telefone) {
        return `+${telefone.ddi} (${telefone.ddd}) ${telefone.numero}`
    }

    function converterTelefone(valor, id) {
        let ddi = valor.substring(1, 3);
        let ddd = valor.substring(5, 7);
        let numero = valor.substring(9, 19);
        return new Telefone(id, ddi, ddd, numero)
    }

    function onChangeCnpj(event) {
        const { value } = event.target;
        if (value.length < 19) {
            setCnpj(value.replace(/[./-]/g, ''))
            let cnpjModificado = value.replace(/\D/g, '').match(/(\d{0,2})(\d{0,3})(\d{0,3})(\d{0,4})(\d{0,2})/);
            setCnpjInput(!cnpjModificado[2] ? cnpjModificado[1] : cnpjModificado[1] + '.' + cnpjModificado[2] + '.' + cnpjModificado[3] + '/' + cnpjModificado[4] + (cnpjModificado[5] ? '-' + cnpjModificado[5] : ''))
            
        }
    }

    return (
        <form onSubmit={proximo} ref={formRef}>
            <InputTexto
                type="text"
                label="Nome"
                required={true}
                textoDeAjuda="Insira o nome da Empresa"
                value={nome}
                onChange={(e) => setNome(e.target.value)}
            />
            <InputTexto
                type="text"
                label="CNPJ"
                required={true}
                textoDeAjuda="Insira o CNPJ da Empresa"
                value={cnpjInput}
                onChange={onChangeCnpj}
            />
            <InputTexto
                type="text"
                label="Site"
                required={true}
                textoDeAjuda="Insira o site da Empresa"
                value={site}
                onChange={(e) => setSite(e.target.value)}
            />
            <InputMascara
                mascara="+99 (99) 9999-9999"
                exibirSempre={true}
                value={tratarTelefone(telefones[0])}
                onChange={onChangeTelefone(0)}
                type="text"
                label="Telefone Principal"
            />
            <InputMascara
                mascara="+99 (99) 99999-9999"
                exibirSempre={true}
                value={tratarTelefone(telefones[1])}
                onChange={onChangeTelefone(1)}
                type="text"
                label="Telefone Secundário"
            />
            <InputTexto
                type="text"
                label="Descrição"
                required={true}
                textoDeAjuda="Insira uma breve descrição da Empresa"
                value={descricao}
                onChange={(e) => setDescricao(e.target.value)}
            />
            <InputTexto
                type="text"
                label="Área"
                required={true}
                textoDeAjuda="Insira a área de atuação da Empresa"
                value={areaAtuacao}
                onChange={(e) => setArea(e.target.value)}
            />
            <InputSelect
                label="Porte *"
                value={porteInput}
                textoDeAjuda="Selecione o porte da empresa"
                onChange={(event, newValue) => { setPorte(newValue.id); setPorteInput(newValue) }}
                required={true}
                opcoes={PorteEmpresa}
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
                    nome="Próximo"
                    cor="primary"
                />
            </Box>
        </form>
    );
}