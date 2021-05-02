import React from 'react';
import "../../../assets/css/home.css";
import "../../../assets/css/bootstrap.css";
import "../../../assets/css/jj.css";
import home_img from "../../../assets/imagens/home-img.png";
import cad_pf from "../../../assets/imagens/mulheres.png";
import cad_pj from "../../../assets/imagens/empresa.png";
import agil from "../../../assets/imagens/agil.png";
import net from "../../../assets/imagens/net.png";
import rocket from "../../../assets/imagens/rocket.png";
import Feedbacks from './Feedbacks';
import { Link } from 'react-router-dom';
import { routes } from '../../../config/routes';

export default function Home() {
    return <>
        <body id="mybody">
            <div className="home-img">
                <img className="d-inline-block align-top"
                    alt="home-img"
                    src={home_img}
                    width="100%"
                    height="560px"
                />
                <div className="centered-top">Sejam Bem-Vindas à TecnoMarias<br /><br /> A sua Plataforma de Networking</div>
                <div className="centered">"Nascemos com o objetivo de ajudar mulheres a ampliar seu networking com outras mulheres."<br /><br />
                "Oferecemos um ambiente no qual possam buscar empresas que dêem espaço e voz para elas crescerem."</div>
            </div>
            <div className="img-cover">

            </div>

            <div id="cad-pf" className="row featurette">
                <div className="col-md-7 order-md-2">
                    <h2 className="featurette-heading">Conecte-se <span className="text-muted">com outras mulheres</span></h2>
                    <p className="lead">Oferecemos um espaço para conectar mulheres com outras mulheres, estimulando o networking na área de STEM- Science, Technology, Engineering e Mathematics.</p>
                    <p className="lead">Aqui você irá encontrar diversas funcionalidades que permitirão que você aumente seu networking e ainda possa se desenvolver ainda mais e tudo isso de graça!</p>
                    <Link to={routes.CADASTRAR_PF}>
                        <input id="btn-cad-pf" className="btn btn-outline-primary btn-lg" type="button" value="Faça seu cadastro!"></input>
                    </Link>
                </div>
                <div className="col-md-4 order-md-1">
                    <img id="img-pf" className="img-pf"
                        alt="cad-pf"
                        src={cad_pf}
                        width="300px"
                        height="300px"
                    />
                </div>
            </div>

            <hr className="featurette-divider" />

            <div id="cad-pj" className="row featurette">
                <div className="col-md-8 order-md-2">
                    <h2 className="featurette-heading2">Reconhecimento <span className="text-muted">para empresas</span></h2><br />
                    <p className="lead2">Empresas podem cadastrar suas vagas em nosso site, divulgando-as para o público feminino, aumentando seu público alvo e diminuindo a desigualdade de gêneros.</p>
                    <p className="lead2">Além desta incrível oportunidade de ter uma plataforma para cadastrar e divulgar suas vagas, as empresas contam com um ambiente no qual podem ser avaliadas.</p>
                    <Link to={routes.CADASTRAR_PJ}>
                        <input id="btn-cad-pj" className="btn btn-outline-danger btn-lg" type="button" value="Cadastre sua Empresa"></input>
                    </Link>
                </div>
                <div className="col-md-4 order-md-2">
                    <img id="img-pj" className="img-pj"
                        alt="cad-pj"
                        src={cad_pj}
                        width="300px"
                        height="300px"
                    />
                </div>
            </div>

            <hr id="cad-pf-line" className="featurette-divider" />

            <h1 id="comentarios">TUDO PARA ELAS <br /></h1>
            <h3>Para conectar mulheres com outras mulheres <br />Encontre aqui uma empresa que valorize seu trabalho</h3>

            <div className="wrapper">
                <section className="columns">
                    <div className="column">
                        <img className="img-cols" alt="net" src={net} />
                        <h2>Netwoking</h2>
                        <p className="cols">Compartilhe seu agregador de links com suas redes sociais, portfolios, projetos pessoais, curriculos, entre outros itens para realizar a sua divulgação profissional e assim amplie suas possibilidades no mercado.</p>
                    </div>
                    <div className="column">
                        <img className="img-cols" alt="rocket" src={rocket} />
                        <h2>Vagas</h2>
                        <p className="cols">Decole com vagas em empresas que dão voz as mulheres, contribuindo para o seu desenvolvimento pessoal e profissional em um ambiente saudável que trará diversos ganhos para ambas as partes.</p>
                    </div>
                    <div className="column">
                        <img className="img-cols" alt="agil" src={agil} />
                        <h2>Agilidade</h2>
                        <p className="cols">Agilidade para empresas e para mulheres que buscam se conectar, cadastros simples e sem burocracia para ambas as partes aproveitarem o máximo de poder da plataforma oferecida pela TecnoMarias. ❤</p>
                    </div>
                </section>
            </div>

            <hr id="cad-pf-line" className="featurette-divider" />

            <h1 id="comentarios">Feedbacks</h1>
            <div id="feedbacks" className="row">
                <Feedbacks />
            </div>
        </body>
    </>
}