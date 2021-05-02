import React, { useEffect, useState } from 'react';
import "../../../assets/css/home.css";
import "../../../assets/css/bootstrap.css";
import "../../../assets/css/jj.css";
import home_img from "../../../assets/imagens/home-img.png";
import background_img from "../../../assets/imagens/background-img.PNG";
import cad_pf from "../../../assets/imagens/mulheres.png";
import cad_pj from "../../../assets/imagens/empresa.png";
import fb from "../../../assets/imagens/fb.png";
import FeedbackService from '../../../services/FeedbackService';
import PessoaFisicaService from '../../../services/PessoaFisicaService';
import Feedback from '../../../models/entities/Feedback';
import Carregando from '../../common/Carregando';
import MensagemErro from '../../common/MensagemErro'

export default function Home() {
    const [feedbacks, setFeedbacks] = useState(null);
    const [carregando, setCarregando] = useState(true);
    const [mensagemErro, setMensagemErro] = useState(null);

    useEffect(() => {
        if (feedbacks === null) {
            FeedbackService.buscar().then(
                listaFeedbacks => {
                    let lista = []
                    listaFeedbacks.forEach(feedback => {
                        PessoaFisicaService.buscar(feedback.idAvaliadora).then(
                            pf => {
                                let novoFeedback = new Feedback(feedback.id, feedback.comentario, pf.nome)
                                lista.push(novoFeedback)
                            }
                        )
                        setFeedbacks(lista)
                        setCarregando(false)
                    })
                }
            ).catch(
                erro => {
                    setMensagemErro("Não foi possível exibir os feedbacks.")
                    setCarregando(false)
                }
            )
        }
    })

    return <>

        <Carregando aberto={carregando} setAberto={(e) => setCarregando(false)} />
        <body id="mybody">
            <div class="home-img">
                <img class="img-cover"
                    alt="home-img"
                    src={home_img}
                    width="100%"
                    height="560px"
                    className="d-inline-block align-top"
                />
                <div class="centered-top">Sejam Bem-Vindas à TecnoMarias<br /><br /> A sua Plataforma de Networking</div>
                <div class="centered">"Nascemos com o objetivo de ajudar mulheres a ampliar seu networking com outras mulheres."<br /><br />
                "Oferecemos um ambiente no qual possam buscar empresas que dêem espaço e voz para elas crescerem."</div>
            </div>
            <div class="img-cover">

            </div>



            <div id="cad-pf" class="row featurette">
                <div class="col-md-7 order-md-2">
                    <h2 class="featurette-heading">Conecte-se <span class="text-muted">com outras mulheres</span></h2>
                    <p class="lead">Oferecemos um espaço para conectar mulheres com outras mulheres, estimulando o networking na área de STEM- Science, Technology, Engineering e Mathematics.</p>
                    <p class="lead">Aqui você irá encontrar diversas funcionalidades que permitirão que você aumente seu networking e ainda possa se desenvolver ainda mais e tudo isso de graça!</p>
                    <input id="btn-cad-pf" class="btn btn-outline-primary btn-lg" type="button" value="Faça seu cadastro!"></input>
                </div>
                <div class="col-md-4 order-md-1">
                    <img id="img-pf" class="img-pf"
                        alt="cad-pf"
                        src={cad_pf}
                        width="300px"
                        height="300px"
                        className="d-inline-block align-top"
                    />
                </div>
            </div>

            <hr class="featurette-divider" />

            <div id="cad-pj" class="row featurette">
                <div class="col-md-8 order-md-2">
                    <h2 class="featurette-heading2">Reconhecimento <span class="text-muted">para empresas</span></h2><br />
                    <p class="lead2">Empresas podem cadastrar suas vagas em nosso site, divulgando-as para o público feminino, aumentando seu público alvo e diminuindo a desigualdade de gêneros.</p>
                    <p class="lead2">Além desta incrível oportunidade de ter uma plataforma para cadastrar e divulgar suas vagas, as empresas contam com um ambiente no qual podem ser avaliadas.</p>
                    <input id="btn-cad-pj" class="btn btn-outline-danger btn-lg" type="button" value="Cadastre sua Empresa"></input>
                </div>
                <div class="col-md-4 order-md-2">
                    <img id="img-pj" class="img-pj"
                        alt="cad-pj"
                        src={cad_pj}
                        width="300px"
                        height="300px"
                        className="d-inline-block align-top"
                    />
                </div>
            </div>

            <hr id="cad-pf-line" class="featurette-divider" />

            <h1 id="comentarios">Feedbacks</h1>

            <div id="feedbacks" class="row">

                {
                    mensagemErro && <MensagemErro mensagem={mensagemErro} />
                }
                {
                    feedbacks !== null &&
                    feedbacks.map(feedback => {
                        return (
                            <div class="col-lg-4" key={feedback.id}>
                                <figure class="snip1192">
                                    <blockquote>"{feedback.comentario}"
                            </blockquote>
                                    <div class="author">
                                        <img src={fb} alt="sq-sample1" />
                                        <h5>{feedback.nomeAvaliadora} <span> Gerente de Projetos</span></h5>
                                    </div>
                                </figure>
                            </div>
                        )
                    })
                }
            </div>
        </body>
    </>
}