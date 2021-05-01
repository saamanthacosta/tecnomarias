import { Container } from '@material-ui/core'
import React, { useEffect, useState } from 'react'
import { useHistory } from 'react-router';
import { Link } from 'react-router-dom';
import { routes } from '../../../../config/routes'
import VagaService from '../../../../services/VagaService';
import Card from '../../../common/Card'
import Filtro from './Filtro';

export default function ListagemVagas() {
    const [vagas, setVagas] = useState(null);
    const history = useHistory();

    useEffect(() => {
        if (vagas === null) {
            VagaService.listar().then(
                resposta => tratarVagas(resposta)
            )
        }
    }, [vagas]);

    function tratarVagas(listaVagas) {
        let lista = [];
        listaVagas.forEach(vaga => {
            let novaVaga = {
                id: vaga.id,
                areaAtuacao: vaga.areaAtuacao,
                cargo: vaga.cargo,
                localidade: vaga.localidade
            };
            lista.push(novaVaga);
        });
        setVagas(lista);
    }

    return <>
        <Container maxWidth="sm">
            <Filtro tratarVagas={tratarVagas} />
            {
                vagas !== null &&
                vagas.map(
                    vaga => {
                        let outrasDescricoes = [];
                        outrasDescricoes.push(vaga.localidade)
                        return (
                            <Link to={`${routes.EXIBIR_VAGA}${vaga.id}`} style={{ textDecoration: 'none' }} key={vaga.id}>
                                <Card
                                    titulo={vaga.areaAtuacao}
                                    descricao={vaga.cargo}
                                    outrasDescricoes={outrasDescricoes}
                                    onClick={(e) => history.push(routes.EXIBIR_VAGA + vaga.id)}
                                />
                            </Link>
                        )
                    }
                )
            }
        </Container>
    </>
}