import React from 'react'
import { vaziaOuNull } from '../../../../../utils/vaziaOuNull'
import CardSimples from '../../../../common/Card'

export default function Card({ pf }) {

    const item = (titulo, valor) => <>
        <strong>{titulo}:</strong> {vaziaOuNull(valor) ? "Não cadastrado" : valor}
    </>

    function verificarTelefone(telefones, itemArray) {
        if (!vaziaOuNull(telefones)) {
            if (itemArray === 0) return `+${telefones[0].ddi} (${telefones[0].ddd}) ${telefones[0].numero}`
            else if (itemArray === 1 && !vaziaOuNull(telefones[1]))
                return `+${telefones[1].ddi} (${telefones[1].ddd}) ${telefones[1].numero}`
            else if (itemArray === 2 && !vaziaOuNull(telefones[2]))
                return `+${telefones[2].ddi} (${telefones[2].ddd}) ${telefones[2].numero}`
        }
        return "Não cadastrado";
    }

    return (
        <CardSimples
            titulo={pf.nome}
            descricao={pf.email}
            outrasDescricoes={[
                item('Telefone Residencial', verificarTelefone(pf.telefoneList, 0)),
                item('Telefone Celular', verificarTelefone(pf.telefoneList, 1)),
                item('Telefone Comercial', verificarTelefone(pf.telefoneList, 2)),
                item('GitHub', pf.links.gitHub),
                item('LinkedIN', pf.links.linkedIn),
                item('Facebook', pf.links.facebook),
                item('Portfólio', pf.links.potfolio)
            ]}
        />
    )
}