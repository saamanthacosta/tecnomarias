import React, { useEffect, useState } from 'react'
import Card from '../../../../common/Card'
import PessoaJuridicaService from '../../../../../services/PessoaJuridicaService'
import { Link } from 'react-router-dom'
import { routes } from '../../../../../config/routes'
import { Cargo } from '../../../../../models/enums/Cargo'

export default function CardPJ({ vaga }) {

    const [nomeEmpresa, setNomeEmpresa] = useState(null)

    useEffect(() => {
        PessoaJuridicaService.buscar(vaga.idEmpresa).then(
            resposta => setNomeEmpresa(resposta.nome)
        )
    }, [vaga])

    function tratarCargo(prop) {
        let nomeDoCargo = null;
        Cargo.forEach(
            cargo => {
                if (cargo.id === prop) nomeDoCargo = cargo.nome 
            }
        );
        return nomeDoCargo;
    }

    const descricao = (prop) => <>
        <strong>Descrição:</strong> {prop}
    </>

    const localidade = (prop) => <>
        <strong>Localidade:</strong> {prop}
    </>

    const cargo = (prop) => <>
        <strong>Cargo:</strong> {tratarCargo(prop)}
    </>

    const valor = (prop) => <>
        <strong>Valor:</strong> {`R$${prop},00`}
    </>

    const empresa = (prop) => <>
        <Link to={`${routes.EXIBIR_PJ}${prop}`} style={{ textDecoration: 'none' }}>
            {nomeEmpresa}
        </Link>
    </>

    return <>
        <Card
            titulo={vaga.areaAtuacao}
            descricao={empresa(vaga.idEmpresa)}
            outrasDescricoes={[descricao(vaga.descricao), localidade(vaga.localidade), cargo(vaga.cargo), valor(vaga.valor)]}
        />
    </>
}