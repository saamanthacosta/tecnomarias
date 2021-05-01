import { Container } from '@material-ui/core'
import React, { useEffect, useState } from 'react'
import { useHistory } from 'react-router';
import { Link } from 'react-router-dom';
import { routes } from '../../../../config/routes'
import { PorteEmpresa } from '../../../../models/enums/PorteEmpresa';
import PessoaJuridicaService from '../../../../services/PessoaJuridicaService';
import Card from '../../../common/Card'
import MensagemErro from '../../../common/MensagemErro';
import Carregando from '../../../common/Carregando';
import BotaoSimples from '../../../common/Botao/Simples';

export default function ListagemPJ() {
    const [pjs, setPjs] = useState(null);
    const history = useHistory();
    const [mensagem, setMensagem] = useState(null);
    const [carregando, setCarregando] = useState(true);

    useEffect(() => {
        if (pjs === null) {
            PessoaJuridicaService.listar().then(
                resposta => tratarPjs(resposta)
            ).catch(
                erro => {
                    setMensagem("Não foi possível exibir esse perfil.")
                }
            )
        }
        if (pjs !== null) {
            setCarregando(false)

        }
    }, [pjs]);

    function tratarPjs(listaPjs) {
        let lista = [];
        listaPjs.forEach(pj => {
            let novaPj = {
                id: pj.id,
                areaAtuacao: pj.areaAtuacao,
                nome: pj.nome,
                porteEmpresa: PorteEmpresa.find(porte => porte.id === pj.porteEmpresa).nome
            };
            lista.push(novaPj);
        });
        setPjs(lista);
    }

    return <>
        <Carregando aberto={carregando} setAberto={(e) => setCarregando(false)} />
        <Container maxWidth="xs">
            {
                mensagem && <MensagemErro mensagem={mensagem} />
            }
            <Container maxWidth="md">
                <BotaoSimples
                    variant="contained"
                    onClick={(e) => history.push(routes.CADASTRAR_PJ)}
                    nome="Criar Empresa"
                    cor="primary"
                />
            </Container>
            {
                pjs !== null &&
                pjs.map(
                    pj => {
                        let outrasDescricoes = [];
                        outrasDescricoes.push(pj.areaAtuacao)
                        return (
                            <Link to={`${routes.EXIBIR_PJ}${pj.id}`} style={{ textDecoration: 'none' }} key={pj.id}>
                                <Card
                                    titulo={pj.nome}
                                    descricao={pj.porteEmpresa}
                                    outrasDescricoes={outrasDescricoes}
                                    onClick={(e) => history.push(routes.EXIBIR_PJ + pj.id)}
                                />
                            </Link>
                        )
                    }
                )
            }
        </Container>
    </>
}