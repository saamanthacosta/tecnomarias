import React from 'react';
import css from "../../../assets/css/home.css";
import css2 from "../../../assets/css/bootstrap.css";
import css3 from "../../../assets/css/jj.css";
import home_img from "../../../assets/imagens/home-img.png";
import background_img from "../../../assets/imagens/background-img.PNG";

export default function Home() {
    return(
        <body>
            <div class="home-img">
                <img class="img-cover"
                            alt="home-img"
                            src={home_img}
                            width="100%"
                            height="560px"
                            className="d-inline-block align-top"
                />
                <div class="centered-top">Sejam Bem-Vindas à TecnoMarias<br/><br/> A sua Plataforma de Networking</div>
                <div class="centered">"Nascemos com o objetivo de ajudar mulheres a ampliar seu networking com outras mulheres."<br/><br/>
                "Oferecemos um ambiente no qual possam buscar empresas que dêem espaço e voz para elas crescerem."</div>
            </div>
            <div class="img-cover">
                <img
                            alt="background"
                            src={background_img}
                            width="100%"
                            height="100%"
                            className="d-inline-block align-top"
                />
            </div>

                <h1 id="comentarios">Feedbacks</h1>

                <div id="feedbacks" class="row">

                    <div class="col-lg-4">
                        <figure class="snip1192">
                            <blockquote>"Finalmente pude encontrar um local que reune todas as informações que procuro sobre empresas que se preocupam com seus candidatos.
                                A TecnoMarias realmente fez um diferencial na minha carreira profissional!"
                            </blockquote>
                            <div class="author">
                                <img src={background_img} alt="sq-sample1" />
                                <h5>Rafaela Almeida, 42 <span> Gerente de Projetos</span></h5>
                            </div>
                        </figure>
                    </div>

                    <div class="col-lg-4">
                        <figure class="snip1192">
                            <blockquote>Gostaria de agradecer aos instrutores e toda equipe da TecnoMarias, sem eles eu jamais conseguiria reunir tantas mulheres competentes e profissionais dedicadas para melhorar meu networking nessa jornada mágica.</blockquote>
                            <div class="author">
                                <img src={background_img} alt="sq-sample24" />
                                <h5>Beatriz Silvestre, 36<span> Professora de Física</span></h5>
                            </div>
                        </figure>
                    </div>

                    <div class="col-lg-4">
                        <figure class="snip1192">
                            <blockquote>Com o networking proporcionado pela plataforma da TecnoMarias eu consegui realizar um sólido networking, pesquisar várias vagas de emprego e conseguir minha vaga de diretora em uma grande empresa de atuação internacional.
                            </blockquote>
                            <div class="author">
                                <img src={background_img} alt="sq-sample29" />
                                <h5>Antonieta Almeida, 22<span> Diretora de TI</span></h5>
                            </div>
                        </figure>
                    </div>

                </div>
        </body>
    )
}