import React from 'react';
import css from "../../../assets/css/home.css";
import css2 from "../../../assets/css/bootstrap.css";
import css3 from "../../../assets/css/jj.css";
import home_img from "../../../assets/imagens/home-img.png";
import background_img from "../../../assets/imagens/background-img.PNG";
import cad_pf from "../../../assets/imagens/mulheres.png";
import cad_pj from "../../../assets/imagens/empresa.png";
import fb from "../../../assets/imagens/fb.png";
import agil from "../../../assets/imagens/agil.png";
import net from "../../../assets/imagens/net.png";
import rocket from "../../../assets/imagens/rocket.png";

export default function Home() {
    return (
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

            <h1 id="comentarios">TUDO PARA ELAS <br/></h1>
            <h3>Para conectar mulheres com outras mulheres <br/>Encontre aqui uma empresa que valorize seu trabalho</h3>

            <div class="wrapper">

                <section class="columns">

                    <div class="column">
                        <img class="img-cols" src={net}/>
                        <h2>Netwoking</h2>
                        <p class="cols">Compartilhe seu agregador de links com suas redes sociais, portfolios, projetos pessoais, curriculos, entre outros itens para realizar a sua divulgação profissional e assim amplie suas possibilidades no mercado.</p>
                    </div>

                    <div class="column">
                        <img class="img-cols" src={rocket}/>
                        <h2>Vagas</h2>
                        <p class="cols">Decole com vagas em empresas que dão voz as mulheres, contribuindo para o seu desenvolvimento pessoal e profissional em um ambiente saudável que trará diversos ganhos para ambas as partes.</p>
                    </div>

                    <div class="column">
                        <img class="img-cols" src={agil}/>
                        <h2>Agilidade</h2>
                        <p class="cols">Agilidade para empresas e para mulheres que buscam se conectar, cadastros simples e sem burocracia para ambas as partes aproveitarem o máximo de poder da plataforma oferecida pela TecnoMarias. ❤</p>
                    </div>

                </section>

            </div>

            <hr id="cad-pf-line" class="featurette-divider" />

            <h1 id="comentarios">Feedbacks</h1>

            <div id="feedbacks" class="row">

                <div class="col-lg-4">
                    <figure class="snip1192">
                        <blockquote>"Finalmente pude encontrar um local que reune todas as informações que procuro sobre empresas que se preocupam com seus candidatos.
                        A TecnoMarias realmente fez um diferencial na minha carreira profissional!"
                            </blockquote>
                        <div class="author">
                            <img src={fb} alt="sq-sample1" />
                            <h5>Rafaela Almeida, 42 <span> Gerente de Projetos</span></h5>
                        </div>
                    </figure>
                </div>

                <div class="col-lg-4">
                    <figure class="snip1192">
                        <blockquote>Gostaria de agradecer aos instrutores e toda equipe da TecnoMarias, sem eles eu jamais conseguiria reunir tantas mulheres competentes e profissionais dedicadas para melhorar meu networking nessa jornada mágica.</blockquote>
                        <div class="author">
                            <img src={fb} alt="sq-sample24" />
                            <h5>Beatriz Silvestre, 36<span> Professora de Física</span></h5>
                        </div>
                    </figure>
                </div>

                <div class="col-lg-4">
                    <figure class="snip1192">
                        <blockquote>Com o networking proporcionado pela plataforma da TecnoMarias eu consegui realizar um sólido networking, pesquisar várias vagas de emprego e conseguir minha vaga de diretora em uma grande empresa de atuação internacional.
                            </blockquote>
                        <div class="author">
                            <img src={fb} alt="sq-sample29" />
                            <h5>Antonieta Almeida, 22<span> Diretora de TI</span></h5>
                        </div>
                    </figure>
                </div>

            </div>
        </body>
    )
}