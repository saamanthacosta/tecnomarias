import React, { useEffect, useState } from 'react'
import FeedbackService from '../../../../services/FeedbackService';
import PessoaFisicaService from '../../../../services/PessoaFisicaService';
import Carregando from '../../../common/Carregando';
import MensagemErro from '../../../common/MensagemErro';
import fb from "../../../../assets/imagens/fb.png";
import Feedback from '../../../../models/entities/Feedback';

export default function Feedbacks() {
    const [feedbacks, setFeedbacks] = useState([]);
    const [carregando, setCarregando] = useState(true);
    const [mensagemErro, setMensagemErro] = useState(null);

    useEffect(() => {
        if (feedbacks.length !== 3) {
            FeedbackService.buscar().then(
                listaFeedbacks => {
                    let lista = []
                    listaFeedbacks.forEach(feedback => {
                        PessoaFisicaService.buscar(feedback.idAvaliadora).then(
                            pf => {
                                let novoFeedback = new Feedback(feedback.id, feedback.comentario, pf.nome)
                                lista.push(novoFeedback)
                                if (lista.length === 3) { setCarregando(false); setFeedbacks(lista) }
                            }
                        ).catch(
                            erro => {
                                setMensagemErro("Não foi possível exibir os feedbacks.")
                                setCarregando(false)
                            }
                        )

                    })
                }
            ).catch(
                erro => {
                    setMensagemErro("Não foi possível exibir os feedbacks.")
                    setCarregando(false)
                }
            )
        }
    }, [feedbacks])

    return <>

        <Carregando aberto={carregando} setAberto={(e) => setCarregando(false)} />
        {
            mensagemErro && <MensagemErro mensagem={mensagemErro} />
        }
        {
            feedbacks !== null &&
            feedbacks.map(feedback => {
                return (
                    <div className="col-lg-4" key={feedback.id}>
                        <figure className="snip1192">
                            <blockquote className="comentario">"{feedback.comentario}"
                    </blockquote>
                            <div className="author">
                                <img src={fb} alt="sq-sample1" />
                                <h5>{feedback.nomeAvaliadora} <span> Gerente de Projetos</span></h5>
                            </div>
                        </figure>
                    </div>
                )
            })
        }
    </>
}