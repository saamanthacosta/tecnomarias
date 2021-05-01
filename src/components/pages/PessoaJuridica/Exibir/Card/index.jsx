import React, { useEffect, useState } from 'react'
import { PorteEmpresa } from '../../../../../models/enums/PorteEmpresa'
import CardSimples from '../../../../common/Card'
import Rating from '../../../../common/Avaliacao'
import { vaziaOuNull } from '../../../../../utils/vaziaOuNull'
import LocalidadesService from '../../../../../services/LocalidadesService'
import Alerta from '../../../../common/Alerta'
import { Severidade } from '../../../../../models/enums/Severidade'
import PessoaJuridicaService from '../../../../../services/PessoaJuridicaService'
import Avaliacao from '../../../../../models/entities/Avaliacao'

export default function Card({ pj }) {

    const [mensagem, setMensagem] = useState(null);
    const [mediaAvaliacao, setMediaAvaliacao] = useState(null);
    const [municipio, setMunicipio] = useState(null);
    const [avaliacaoReadOnly, setAvaliacaoReadOnly] = useState(false);

    useEffect(() => {
        if (pj !== null) {
            let media = 0;
            pj.avaliacoes.forEach(avaliacao => {
                media += avaliacao.nota
            })
            setMediaAvaliacao(media / pj.avaliacoes.length);

            LocalidadesService.buscarMunicipio(pj.endereco.municipioIBGE).then(
                resposta => setMunicipio(resposta.data.nome)
            )
        }
    }, [pj])

    function avaliar(nota) {
        setAvaliacaoReadOnly(true)
        let avaliacao = new Avaliacao(null, "N/A", nota, null, null, pj.id)
        PessoaJuridicaService.avaliar(pj.id, avaliacao).then(
            resposta => {
                setMensagem(<Alerta tipo={Severidade.SUCESSO} mensagem="A avaliação foi realizada com sucesso!" />);
                tratarMediaAposAvaliacao(nota);
            }
        ).catch(
            resposta => {
                setMensagem(<Alerta tipo={Severidade.ERRO} mensagem="Ops! Algo de errado aconteceu!" />)
            }
        )
    }

    function tratarMediaAposAvaliacao(nota) {
        var novaMediaAvaliacao = nota;
        pj.avaliacoes.forEach(avaliacao => {
            novaMediaAvaliacao += avaliacao.nota
        })
        setMediaAvaliacao(novaMediaAvaliacao / (pj.avaliacoes.length + 1));
    }

    const item = (titulo, valor) => <>
        <strong>{titulo}:</strong> {valor}
    </>

    const endereco = (endereco) => `${endereco.logradouro}, ${endereco.numero} ${vaziaOuNull(endereco.complemento) ? '' : `- ${endereco.complemento}`} / ${municipio}`

    const itemAvaliacao = <>
        <Rating value={mediaAvaliacao} onChange={avaliar} readOnly={avaliacaoReadOnly} />
    </>

    function verificarTelefone(telefones, itemArray) {
        if (!vaziaOuNull(telefones)) {
            if (itemArray === 0) return `+${telefones[0].ddi} (${telefones[0].ddd}) ${telefones[0].numero}`
            if (itemArray === 1 && !vaziaOuNull(telefones[1]))
                return `+${telefones[1].ddi} (${telefones[1].ddd}) ${telefones[1].numero}`
        }
        return "Não cadastrado";
    }

    function tratarCnpj(cnpj) {
        let cnpjModificado = cnpj.replace(/\D/g, '').match(/(\d{0,2})(\d{0,3})(\d{0,3})(\d{0,4})(\d{0,2})/)
        return !cnpjModificado[2] ? cnpjModificado[1] : cnpjModificado[1] + '.' + cnpjModificado[2] + '.' + cnpjModificado[3] + '/' + cnpjModificado[4] + (cnpjModificado[5] ? '-' + cnpjModificado[5] : '')
    }

    return <>
        {mensagem}
        <CardSimples
            titulo={pj.nome}
            descricao={pj.site}
            outrasDescricoes={[
                itemAvaliacao,
                item('Email', pj.email),
                item('Descrição', pj.descricao),
                item('CNPJ', tratarCnpj(pj.cnpj)),
                item('Área de Atuação', pj.areaAtuacao),
                item('Porte', PorteEmpresa.find(porte => porte.id === pj.porteEmpresa).nome),
                item('Telefone Principal', verificarTelefone(pj.telefoneList, 0)),
                item('Telefone Secundário', verificarTelefone(pj.telefoneList, 1)),
                item('Endereço', endereco(pj.endereco)),
            ]}
        />
    </>
}