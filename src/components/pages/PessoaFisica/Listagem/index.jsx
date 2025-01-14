import { Container } from '@material-ui/core'
import React, { useEffect, useState } from 'react'
import { useHistory } from 'react-router';
import { Link } from 'react-router-dom';
import { routes } from '../../../../config/routes'
import PessoaFisicaService from '../../../../services/PessoaFisicaService';
import MensagemErro from '../../../common/MensagemErro';
import Carregando from '../../../common/Carregando';
import Card from '../../../common/Card'
import BotaoSimples from '../../../common/Botao/Simples';

export default function ListagemPF() {
    const [pfs, setPfs] = useState(null);
    const history = useHistory();
    const [mensagem, setMensagem] = useState(null);
    const [carregando, setCarregando] = useState(true);

    useEffect(() => {
        if (pfs === null) {
            PessoaFisicaService.listar().then(
                resposta => {
                    tratarPfs(resposta)
                    setCarregando(false)
                }
            ).catch(
                erro => {
                    setMensagem("Não foi possível listar as pessoas físicas.")
                    setCarregando(false)
                }
            )
        }
    }, [pfs]);

    function tratarPfs(listaPfs) {
        let lista = [];
        listaPfs.forEach(pf => {
            let novaPf = {
                id: pf.id,
                email: pf.email,
                nome: pf.nome
            };
            lista.push(novaPf);
        });
        setPfs(lista);
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
                    onClick={(e) => history.push(routes.CADASTRAR_PF)}
                    nome="Criar Pessoa"
                    cor="primary"
                />
            </Container>
            {
                pfs !== null &&

                pfs.map(
                    pf => {
                        return (
                            <Link to={`${routes.EXIBIR_PF}${pf.id}`} style={{ textDecoration: 'none' }} key={pf.id}>
                                <Card
                                    titulo={pf.nome}
                                    descricao={pf.email}
                                    outrasDescricoes={null}
                                    onClick={(e) => history.push(routes.EXIBIR_PF + pf.id)}
                                />
                            </Link>
                        )
                    }
                )
            }
        </Container>
    </>
}