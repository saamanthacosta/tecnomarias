import React from 'react'
import { useState, useEffect } from 'react';
import { Container } from '@material-ui/core'
import PessoaJuridicaService from '../../../../services/PessoaJuridicaService'
import PessoaJuridica from '../../../../models/entities/PessoaJuridica'
import { useParams } from 'react-router';
import Alerta from '../../../common/Alerta';
import { Severidade } from '../../../../models/enums/Severidade'
import Paper from '../../../common/Paper';
import Etapas from '../common/Etapas';
import { Link } from 'react-router-dom';
import { routes } from '../../../../config/routes';
import Carregando from '../../../common/Carregando';
import MensagemErro from '../../../common/MensagemErro';

export default function EditarPJ() {

    const { id } = useParams()
    const [pj, setPj] = useState(null);
    const [mensagem, setMensagem] = useState(null)
    const [mensagemErro, setMensagemErro] = useState(null)
    const [carregando, setCarregando] = useState(true);

    useEffect(() => {
        if (pj === null) {
            PessoaJuridicaService.buscar(id).then(
                resposta => {
                    let pessoaJuridica = new PessoaJuridica(
                        resposta.id, resposta.nome, resposta.email, resposta.telefoneList,
                        resposta.cnpj, resposta.site, resposta.descricao, resposta.porteEmpresa,
                        resposta.areaAtuacao, resposta.mediaAvaliacao, resposta.avaliacoes, resposta.endereco
                    )
                    setPj(pessoaJuridica)
                    setCarregando(false)
                }
            ).catch(
                erro => {
                    setMensagemErro("Não foi possível exibir a tela de edição dessa empresa.")
                    setCarregando(false)
                }
            )
        }
    }, [pj, id]);

    function alterar(pessoaJuridica) {
        PessoaJuridicaService.alterar(pessoaJuridica).then(
            resposta => {
                let mensagemSucesso = <> A edição foi realizada com sucesso! Ela está disponível <Link to={`${routes.EXIBIR_PJ}${resposta.data.id}`}>aqui</Link> </>
                let sucesso = <Alerta tipo={Severidade.SUCESSO} mensagem={mensagemSucesso} />
                setMensagem(sucesso)
                setCarregando(false)
            }
        ).catch(
            resposta => {
                let erro = <Alerta tipo={Severidade.ERRO} mensagem="Ops! Algo de errado aconteceu!" />
                setMensagem(erro)
                setCarregando(false)
            }
        )
    }


    return <>
    <Carregando aberto={carregando} setAberto={(e) => setCarregando(false)} />
        <Container maxWidth="sm">
        {
                mensagemErro && <MensagemErro mensagem={mensagemErro} />
            }
            <Paper>
                <Container maxWidth="sm">
                    {
                        pj !== null &&
                        <>
                            <Etapas dados={pj} onSubmit={alterar} mensagem={mensagem} />
                        </>
                    }
                </Container>
            </Paper>
        </Container>
    </>
}