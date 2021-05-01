import React from 'react';
import css from "../../../assets/css/rodape.css";
import logo from "../../../assets/imagens/logo-header2.PNG";
import logo2 from "../../../assets/imagens/logo-face.png";
import logo3 from "../../../assets/imagens/logo-insta.png";
import logo4 from "../../../assets/imagens/logo-twitter.png";
import logo5 from "../../../assets/imagens/logo-linkedin.png";

export default function Rodape() {
    return (
        <footer class="footer-distributed">
            <div class="footer-left">
                <p class="footer-company-about">
                    <span>Sobre a empresa</span>
                    Somos uma empresa que busca reduzir a desigualdade que existe na área de STEM. 
                    Temos como objetivo auxiliar a promover o networking entre mulheres auxiliando-as em seu desenvolvimento profissional.
                    Oferecemos uma plataforma simples, completa e fácil de usar para que seja possível essa maior integração da área!
                </p>

            </div>

            <div class="footer-center">

                <img
                    alt="logo-header"
                    src={logo}
                    width="250"
                    height="75"
                    className="d-inline-block align-top"
                />
                <br/>
                <p class="footer-links">
                    <a href="#" class="link-1">Home</a>
                    <a href="#">Vagas</a>
                    <a href="#">Cadastros</a>
                    <a href="#">Conecte-se</a>
                    <a href="#">Sobre</a>
                </p>

                <p class="footer-company-name">Universidade Federal Fluminense - TecnoMarias © 2021</p>



            </div>

            <div class="footer-right">

                <p class="footer-company-about">
                        <span>Nossas Redes Sociais</span>
                </p>

                <div class="footer-icons">

                    <div class="footer-icons-top">
                        <a id="face" href="#">
                            <img
                                alt="logo-face"
                                src={logo2}
                                width="65"
                                height="65"
                                className="d-inline-block align-top"
                            />
                        </a>
                        <a href="#">
                            <img
                                alt="logo-insta"
                                src={logo3}
                                width="65"
                                height="65"
                                className="d-inline-block align-top"
                            />
                        </a>
                    </div>

                    <div class="footer-icons-bottom">
                    <a id="twitter" href="#">
                            <img
                                alt="logo-twitter"
                                src={logo4}
                                width="65"
                                height="65"
                                className="d-inline-block align-top"
                            />
                        </a>
                        <a href="#">
                            <img
                                alt="logo-linkedin"
                                src={logo5}
                                width="65"
                                height="65"
                                className="d-inline-block align-top"
                            />
                        </a>
                    </div>

                </div>

            </div>
        </footer>
    )
}