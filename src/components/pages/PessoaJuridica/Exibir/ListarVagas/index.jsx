import { Container } from '@material-ui/core'
import React, { useEffect, useState } from 'react'
import { Link, useHistory } from 'react-router-dom'
import { routes } from '../../../../../config/routes'
import VagaService from '../../../../../services/VagaService'
import Card from '../../../../common/Card'

export default function ListarVagas({ id }) {

    const history = useHistory();
    const [vagas, setVagas] = useState(null);

    useEffect(() => {
        if (vagas === null) {
            VagaService.listarPorEmpresa(id).then(
                resposta => setVagas(resposta)
            )
        }
    }, [id, vagas])

    const item = (titulo, valor) => <>
        <strong>{titulo}:</strong> {valor}
    </>

    return (
        <Container maxWidth="xs">
            {
                vagas !== null &&
                vagas.map(
                    vaga => {
                        return (
                            <Link to={`${routes.EXIBIR_VAGA}${vaga.id}`} style={{ textDecoration: 'none' }} key={vaga.id}>
                                <Card
                                    titulo={vaga.areaAtuacao}
                                    descricao={vaga.cargo}
                                    outrasDescricoes={[item('Localidade', vaga.localidade)]}
                                    onClick={(e) => history.push(routes.EXIBIR_VAGA + vaga.id)}
                                />
                            </Link>
                        )
                    }
                )
            }
        </Container>
    )
}