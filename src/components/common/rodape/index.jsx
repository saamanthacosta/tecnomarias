import React from 'react';
import css from "../../../assets/css/rodape.css";
import logo from "../../../assets/imagens/logo-header2.PNG";
import logo2 from "../../../assets/imagens/logo-face.png";
import logo3 from "../../../assets/imagens/logo-insta.png";
import logo4 from "../../../assets/imagens/logo-twitter.png";
import logo5 from "../../../assets/imagens/logo-linkedin.png";
import { Link } from 'react-router-dom';
import { routes } from '../../../config/routes'

export default function Rodape() {
    return (
        <footer className="footer-distributed">
            <div className="footer-left">
                <p className="footer-company-about">
                    <span>Sobre a empresa</span>
                    Somos uma empresa que busca reduzir a desigualdade que existe na área de STEM.
                    Temos como objetivo auxiliar a promover o networking entre mulheres auxiliando-as em seu desenvolvimento profissional.
                </p>

            </div>

            <div className="footer-center">

                <img
                    alt="logo-header"
                    src={logo}
                    width="250"
                    height="75"
                    className="d-inline-block align-top"
                />
                <br />
                <p className="footer-links">
                    <Link to="/" class="link-1">Home</Link>
                    <Link to={routes.LISTAR_VAGAS} >Vagas</Link>
                    <Link to={routes.LISTAR_PF} >Cadastros</Link>
                    <Link to={routes.LISTAR_PF} >Conecte-se</Link>
                    <Link to="/" >Sobre</Link>
                </p>

                <p className="footer-company-name">Universidade Federal Fluminense - TecnoMarias © 2021</p>



            </div>

            <div className="footer-right">

                <p className="footer-company-about">
                    <span>Nossas Redes Sociais</span>
                </p>

                <div className="footer-icons">

                    <div className="footer-icons-top">
                        <Link id="face" to="/">
                            <img
                                alt="logo-face"
                                src={logo2}
                                width="65"
                                height="65"
                                className="d-inline-block align-top"
                            />
                        </Link>
                        <Link to="/">
                            <img
                                alt="logo-insta"
                                src={logo3}
                                width="65"
                                height="65"
                                className="d-inline-block align-top"
                            />
                        </Link>
                    </div>

                    <div className="footer-icons-bottom">
                        <Link id="twitter" to="/">
                            <img
                                alt="logo-twitter"
                                src={logo4}
                                width="65"
                                height="65"
                                className="d-inline-block align-top"
                            />
                        </Link>
                        <Link to="/">
                            <img
                                alt="logo-linkedin"
                                src={logo5}
                                width="65"
                                height="65"
                                className="d-inline-block align-top"
                            />
                        </Link>
                    </div>
                </div>
            </div>
        </footer>
    )
}